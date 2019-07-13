
	
/* --------------------------------------------------
	Initialization
-------------------------------------------------- */

    // Initialize all functions when the document is ready.
	$(document).ready(function(){
		initResize();
		initScroller();
		initAnimation();
		initIsotope();
		initContactAjax();
	});

/* --------------------------------------------------
	Resize
-------------------------------------------------- */

	function initResize () {
		var header = $(".header-text");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if ($(".index-page").length > 0) {
				if (scroll >= 270) {
					header.addClass("remove");
				} else {
					header.removeClass("remove");
				}
			}else{
				if (scroll >= 120) {
					header.addClass("remove");
				} else {
					header.removeClass("remove");
				}
			}
		});
	}
	
	
/* --------------------------------------------------
	Scroll Nav
-------------------------------------------------- */

	function initScroller () {
		$('#scroll-page-content').localScroll({
           target:'#page-content'
        });
		$('#page-top').localScroll({
           target:'body'
        });
	}


/* --------------------------------------------------
	Animation
-------------------------------------------------- */

	function initAnimation () {
		new WOW().init();
	}

	
/* --------------------------------------------------
	Isotope
-------------------------------------------------- */

	function initIsotope () {
		var initial_items = 5;
		var next_items = 3;
		// init Isotope
		var $isotopeContainer = $('.isotopeContainer').isotope({
		  itemSelector: '.isotopeSelector',
		  layoutMode: 'masonry'
		});
		// filter functions
		var filterFns = {};
		
		// bind filter button click
		$('.isotopeFilters').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $isotopeContainer.isotope({ filter: filterValue });
		  
		  updateFilterCounts();
		});
		function updateFilterCounts() {
			// get filtered item elements
			var itemElems = $isotopeContainer.isotope('getFilteredItemElements');
			var count_items = $(itemElems).length;
			if (count_items > initial_items) {
				$('#isotopeShowMore').show();
			}
			else {
				$('#isotopeShowMore').hide();
			}
			if ($('.isotopeSelector').hasClass('visible-xs')) {
				$('.isotopeSelector').removeClass('visible-xs');
			}
			var index = 0;

			$(itemElems).each(function () {
				if (index >= initial_items) {
					$(this).addClass('visible-xs');
				}
				index++;
			});
			$isotopeContainer.isotope('layout');
		}
		
		
		// change active class on buttons
		$('.filter-container').each( function( i, filterContainer ) {
		  var $filterContainer = $( filterContainer );
		  $filterContainer.on( 'click', 'button', function() {
			$filterContainer.find('.active').removeClass('active');
			$( this ).addClass('active');
		  });
		});
		
		// function load more item
		function showNextItems(pagination) {
			var itemsMax = $('.visible-xs').length;
			var itemsCount = 0;
			$('.visible-xs').each(function () {
				if (itemsCount < pagination) {
					$(this).removeClass('visible-xs');
					itemsCount++;
				}
			});
			if (itemsCount >= itemsMax) {
				$('#isotopeShowMore').hide();
			}
			$isotopeContainer.isotope('layout');
		}
		// function that hides items when page is loaded
		function hideItems(pagination) {
			var itemsMax = $('.isotopeSelector').length;
			var itemsCount = 0;
			$('.isotopeSelector').each(function () {
				if (itemsCount >= pagination) {
					$(this).addClass('visible-xs');
				}
				itemsCount++;
			});
			if (itemsCount < itemsMax || initial_items >= itemsMax) {
				$('#isotopeShowMore').hide();
			}
			$isotopeContainer.isotope('layout');
		}
		$('#isotopeShowMore').on('click', function (e) {
			e.preventDefault();
			showNextItems(next_items);
		});
		hideItems(initial_items);
	}

	
/* --------------------------------------------------
	Ajax Contact Form
-------------------------------------------------- */

	function initContactAjax () {
		$("#submit_btn").click(function() { 
		   
			var proceed = true;
			//simple validation at client's end
			//loop through each field and we simply change border color to red for invalid fields		
			$("#contact_form input[required=true], #contact_form textarea[required=true]").each(function(){
				$(this).css('border-color',''); 
				if(!$.trim($(this).val())){ //if this field is empty 
					$(this).css('border-color','red'); //change border color to red   
					proceed = false; //set do not proceed flag
				}
				//check invalid email
				var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
				if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
					$(this).css('border-color','red'); //change border color to red   
					proceed = false; //set do not proceed flag				
				}	
			});
		   
			if(proceed) //everything looks good! proceed...
			{
				//get input field values data to be sent to server
				post_data = {
					'user_name'		: $('input[name=name]').val(), 
					'user_email'	: $('input[name=email]').val(), 
					<!-- 'country_code'	: $('input[name=phone1]').val(),  -->
					<!-- 'phone_number'	: $('input[name=phone2]').val(),  -->
					'subject'		: $('select[name=subject]').val(), 
					'msg'			: $('textarea[name=message]').val()
				};
				
				//Ajax post data to server
				$.post('contact.php', post_data, function(response){  
					if(response.type == 'error'){ //load json data from server and output message     
						output = '<div class="error">'+response.text+'</div>';
					}else{
						output = '<div class="success">'+response.text+'</div>';
						//reset values in all input fields
						$("#contact_form  input[required=true], #contact_form textarea[required=true]").val(''); 
						$("#contact_form #contact_body").slideUp(); //hide form after success
					}
					$("#contact_form #contact_results").hide().html(output).slideDown();
				}, 'json');
			}
		});
		
		//reset previously set border colors and hide all message on .keyup()
		$("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() { 
			$(this).css('border-color',''); 
			$("#result").slideUp();
		});
	}