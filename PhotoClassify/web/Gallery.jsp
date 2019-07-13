<%--
  Created by IntelliJ IDEA.
  User: 宇宙无敌大帅比槑槑
  Date: 2019/7/8
  Time: 14:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Free Responsive Html5 Templates">


    <title>相册</title>

    <!-- Bootstrap Core CSS -->
    <link href="static/module/css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Custom CSS -->
    <link href="static/module/css/style.css" rel="stylesheet">

    <!-- Animate.css -->
    <link href="static/module/css/animate.css" rel="stylesheet" media="all" type="text/css">

    <!-- Lightbox.css -->
    <link href="static/module/css/lightbox.min.css" rel="stylesheet" media="all" type="text/css">

    <!-- Custom Fonts -->
    <link href="static/module/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <link rel="stylesheet" href="static/layui/css/layui.css">

    <script src="static/layui/layui.js"></script>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>



    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="static/module/js/html5shiv.js"></script>
    <script src="static/module/js/respond.min.js"></script>
    <![endif]-->
</head>
<body id="page-top" class="index-page" onload="load()">
<div class="wrap-body">

    <!--////////////////////////////////////Header-->
    <!--	<header>-->
    <!--		&lt;!&ndash;-Main Header-&ndash;&gt;-->
    <!--		<div class="main-header">-->
    <!--&lt;!&ndash;			<div class="logo">&ndash;&gt;-->
    <!--&lt;!&ndash;				<img src="images/logo.png" class="img-responsive">&ndash;&gt;-->
    <!--&lt;!&ndash;			</div>&ndash;&gt;-->

    <!--			<div class="hero-background">-->
    <!--				&lt;!&ndash; Static Header &ndash;&gt;-->
    <!--				<div class="header-text">-->
    <!--					<div class="header-text-inner">-->
    <!--						<h1>井井，让你的相册井井有条</h1>-->
    <!--					</div>-->
    <!--				</div>&lt;!&ndash; /header-text &ndash;&gt;-->
    <!--			</div>-->
    <!--		</div>-->
    <!--	</header>-->
    <!-- /Section: intro -->


    <!--////////////////////////////////////Container-->
    <section id="page-content" class="index-page">


        <!-- ////////////Content Box 01 -->
        <section class="box-content box-1">



            <div class="container">
                <div class="heading wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s" id="tag">
<%--                    <h2>Gallery</h2>--%>
                </div>

                <div class="isotopeContainer" id="show">
                    <!--					<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector art">-->
                    <!--						<div class="portfolio-box zoom-effect">-->
                    <!--							<img src="images/1-thumb.jpg" class="img-responsive" alt="">-->
                    <!--							<div class="portfolio-box-caption">-->
                    <!--								<div class="portfolio-box-caption-content">-->
                    <!--									<div class="project-name">-->
                    <!--										Project Name-->
                    <!--									</div>-->
                    <!--									<div class="project-category">-->
                    <!--										Category-->
                    <!--									</div>-->
                    <!--									<div class="project-social">-->
                    <!--										<ul class="list-inline">-->
                    <!--											<li><a href="single.html"><i class="fa fa-link"></i></a></li>-->
                    <!--											<li><a href="images/1.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><i class="fa fa-search"></i></a></li>-->
                    <!--										</ul>-->
                    <!--									</div>-->
                    <!--								</div>-->
                    <!--							</div>-->
                    <!--						</div>-->
                    <!--					</div>-->
                    <!--&lt;!&ndash;					<div class="tlinks">Collect from <a href="http://www.cssmoban.com/" >自助建站</a></div>&ndash;&gt;-->
                    <!--					<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector art">-->
                    <!--						<div class="portfolio-box zoom-effect">-->
                    <!--							<img src="images/2-thumb.jpg" class="img-responsive" alt="">-->
                    <!--							<div class="portfolio-box-caption">-->
                    <!--								<div class="portfolio-box-caption-content">-->
                    <!--									<div class="project-name">-->
                    <!--										Project Name-->
                    <!--									</div>-->
                    <!--									<div class="project-category">-->
                    <!--										Category-->
                    <!--									</div>-->
                    <!--									<div class="project-social">-->
                    <!--										<ul class="list-inline">-->
                    <!--											<li><a href="single.html"><i class="fa fa-link"></i></a></li>-->
                    <!--											<li><a href="images/2.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><i class="fa fa-search"></i></a></li>-->
                    <!--										</ul>-->
                    <!--									</div>-->
                    <!--								</div>-->
                    <!--							</div>-->
                    <!--						</div>-->
                    <!--					</div>-->
                    <!--					<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector illustrations">-->
                    <!--						<div class="portfolio-box zoom-effect">-->
                    <!--							<img src="images/3-thumb.jpg" class="img-responsive" alt="">-->
                    <!--							<div class="portfolio-box-caption">-->
                    <!--								<div class="portfolio-box-caption-content">-->
                    <!--									<div class="project-name">-->
                    <!--										Project Name-->
                    <!--									</div>-->
                    <!--									<div class="project-category">-->
                    <!--										Category-->
                    <!--									</div>-->
                    <!--									<div class="project-social">-->
                    <!--										<ul class="list-inline">-->
                    <!--											<li><a href="single.html"><i class="fa fa-link"></i></a></li>-->
                    <!--											<li><a href="images/3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><i class="fa fa-search"></i></a></li>-->
                    <!--										</ul>-->
                    <!--									</div>-->
                    <!--								</div>-->
                    <!--							</div>-->
                    <!--						</div>-->
                    <!--					</div>-->
                    <!--					<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector photography">-->
                    <!--						<div class="portfolio-box zoom-effect">-->
                    <!--							<img src="images/4-thumb.jpg" class="img-responsive" alt="">-->
                    <!--							<div class="portfolio-box-caption">-->
                    <!--								<div class="portfolio-box-caption-content">-->
                    <!--									<div class="project-name">-->
                    <!--										Project Name-->
                    <!--									</div>-->
                    <!--									<div class="project-category">-->
                    <!--										Category-->
                    <!--									</div>-->
                    <!--									<div class="project-social">-->
                    <!--										<ul class="list-inline">-->
                    <!--											<li><a href="single.html"><i class="fa fa-link"></i></a></li>-->
                    <!--											<li><a href="images/4.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><i class="fa fa-search"></i></a></li>-->
                    <!--										</ul>-->
                    <!--									</div>-->
                    <!--								</div>-->
                    <!--							</div>-->
                    <!--						</div>-->
                    <!--					</div>-->
                    <!--					<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector websites">-->
                    <!--						<div class="portfolio-box zoom-effect">-->
                    <!--							<img src="images/5-thumb.jpg" class="img-responsive" alt="">-->
                    <!--							<div class="portfolio-box-caption">-->
                    <!--								<div class="portfolio-box-caption-content">-->
                    <!--									<div class="project-name">-->
                    <!--										Project Name-->
                    <!--									</div>-->
                    <!--									<div class="project-category">-->
                    <!--										Category-->
                    <!--									</div>-->
                    <!--									<div class="project-social">-->
                    <!--										<ul class="list-inline">-->
                    <!--											<li><a href="single.html"><i class="fa fa-link"></i></a></li>-->
                    <!--											<li><a href="images/5.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><i class="fa fa-search"></i></a></li>-->
                    <!--										</ul>-->
                    <!--									</div>-->
                    <!--								</div>-->
                    <!--							</div>-->
                    <!--						</div>-->
                    <!--					</div>-->
                    <!--					<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector websites">-->
                    <!--						<div class="portfolio-box zoom-effect">-->
                    <!--							<img src="images/6-thumb.jpg" class="img-responsive" alt="">-->
                    <!--							<div class="portfolio-box-caption">-->
                    <!--								<div class="portfolio-box-caption-content">-->
                    <!--									<div class="project-name">-->
                    <!--										Project Name-->
                    <!--									</div>-->
                    <!--									<div class="project-category">-->
                    <!--										Category-->
                    <!--									</div>-->
                    <!--									<div class="project-social">-->
                    <!--										<ul class="list-inline">-->
                    <!--											<li><a href="single.html"><i class="fa fa-link"></i></a></li>-->
                    <!--											<li><a href="images/6.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><i class="fa fa-search"></i></a></li>-->
                    <!--										</ul>-->
                    <!--									</div>-->
                    <!--								</div>-->
                    <!--							</div>-->
                    <!--						</div>-->
                    <!--					</div>-->
                    <!--					<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector illustrations">-->
                    <!--						<div class="portfolio-box zoom-effect">-->
                    <!--							<img src="images/7-thumb.jpg" class="img-responsive" alt="">-->
                    <!--							<div class="portfolio-box-caption">-->
                    <!--								<div class="portfolio-box-caption-content">-->
                    <!--									<div class="project-name">-->
                    <!--										Project Name-->
                    <!--									</div>-->
                    <!--									<div class="project-category">-->
                    <!--										Category-->
                    <!--									</div>-->
                    <!--									<div class="project-social">-->
                    <!--										<ul class="list-inline">-->
                    <!--											<li><a href="single.html"><i class="fa fa-link"></i></a></li>-->
                    <!--											<li><a href="images/7.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><i class="fa fa-search"></i></a></li>-->
                    <!--										</ul>-->
                    <!--									</div>-->
                    <!--								</div>-->
                    <!--							</div>-->
                    <!--						</div>-->
                    <!--					</div>-->
                    <!--				</div>-->
                    <!--				<div class="text-center"><button class="btn btn-skin" id="isotopeShowMore" >Show More</button></div>-->
                </div>
            </div>
        </section>
    </section>



    <!-- ========== Scripts ========== -->
    <script type="text/javascript" src="static/module/js/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="static/module/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="static/module/js/jquery.localScroll.min.js"></script>
    <script type="text/javascript" src="static/module/js/jquery.scrollTo.min.js"></script>
    <script type="text/javascript" src="static/module/js/SmoothScroll.js"></script>
    <script type="text/javascript" src="static/module/js/wow.min.js"></script>
    <script type="text/javascript" src="static/module/js/isotope.pkgd.min.js"></script>
    <script type="text/javascript" src="static/module/js/lightbox.min.js"></script>
    <script type="text/javascript" src="Gallery.js"></script>
    <!-- Definity JS -->
    <script type="text/javascript" src="static/module/js/main.js"></script>

</div>
</body>
</html>
