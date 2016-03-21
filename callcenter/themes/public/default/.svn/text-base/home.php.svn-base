<!DOCTYPE html>
<html>
<head>
	<!-- /.website title -->
	<title>Call center</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<!-- CSS Files -->
	<link href="<?=url_tmpl();?>callcenter/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link href="<?=url_tmpl();?>callcenter/css/font-awesome.min.css" rel="stylesheet">
	<link href="<?=url_tmpl();?>callcenter/fonts/icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet">
	<link href="<?=url_tmpl();?>callcenter/css/animate.css" rel="stylesheet" media="screen">
	<link href="<?=url_tmpl();?>callcenter/css/owl.theme.css" rel="stylesheet">
	<link href="<?=url_tmpl();?>callcenter/css/owl.carousel.css" rel="stylesheet">

	<link href="<?=url_tmpl();?>callcenter/css/css-index.css" rel="stylesheet" media="screen">
	<link rel="stylesheet" href="<?=url_tmpl();?>callcenter/css/css-google.css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic" />

	<link href="<?=url_tmpl();?>callcenter/css/components.css" id="style_components" rel="stylesheet" type="text/css"/>

	<style>
		@-webkit-keyframes rotate360 {
			100% { -webkit-transform: rotate(360deg); }
		}
		 
		@-moz-keyframes rotate360 {
			100% { -moz-transform: rotate(360deg); }
		}
		 
		@-ms-keyframes rotate360 {
			100% { -ms-transform: rotate(360deg); }
		}
		 
		@-o-keyframes rotate360 {
			100% { -o-transform: rotate(360deg); }
		}
		 
		@keyframes rotate360 {
			100% { transform: rotate(360deg); }
		}
		.rotate360 {
			-webkit-animation: rotate360 2s;
			-moz-animation: rotate360 2s;
			-ms-animation: rotate360 2s;
			-o-animation: rotate360 2s;
			animation: rotate360 2s;
			-webkit-animation: rotate360 2s infinite; /* Chrome, Safari, Opera */
		animation: rotate360 2s infinite;
		}
		.ui-autocomplete-loading {
			background: white url("<?=url_tmpl();?>callcenter/images/ui-anim_basic_16x16.gif") right center no-repeat;
		}
		.ui-autocomplete{
			z-index:10000 !important;
		}
		#app_viewer_container{
			background-color: none;
			display:block;
			position:fixed;
			right:0;
			bottom:0;
			max-width:300px;
			border-left:1px solid silver;
			background:#fff;
		}
		@media all and (max-width: 100px) {
			/* Styles */
			#container-detail{
				margin-left:0px;
			}
			#welcome_container{
				margin-left:0px;
			}
		}
	</style>


	<link rel="stylesheet" href="<?=url_tmpl();?>callcenter/css/jquery-ui.css">
	<!-- Add fancyBox main JS and CSS files -->
	<link rel="stylesheet" type="text/css" href="<?=url_tmpl();?>callcenter/fancyapps/source/jquery.fancybox.css?v=2.1.5" media="screen" />	 
	<link rel="stylesheet" type="text/css" href="<?=url_tmpl();?>callcenter/bootstrap-toastr/toastr.min.css"/>
</head>
<body data-spy="scroll" data-target="#navbar-scroll">
	<!-- /.preloader -->
	<div id="preloader"></div>
	<div id="top"></div>

	<!-- /.parallax full screen background image -->
	<div class="fullscreen landing parallax" style="background-image:url('<?=url_tmpl();?>callcenter/images/bg.jpg');" data-img-width="2000" data-img-height="1333" data-diff="100">
		
		<div class="overlay">
			<div class="container" style="font-size:14px; text-align:right;">
				<div class="row">
					<div class="col-md-12">
						<?php
							if($lang == 'en'){
								//echo '<a style="" href="'.$view['router']->generate('gcs_project_remote_diagnostic').'/es">España</a>';
							} else{
								//echo '<a style="" href="'.$view['router']->generate('gcs_project_remote_diagnostic').'/en">En</a>';
							}
						?>
						| 
						<a style="" href="<?php 
							echo base_url().'authorize/logout.html'; 
						?>"><?php echo isset($langList['LOGOUT']) ? $langList['LOGOUT'] : 'Logout'; 
						?></a>
					</div>
				</div>
			</div>
			<div class="container">
				<div id="welcome_container" class="row" style="margin-left:-150px;">
					<div class="col-md-7">
						<div class="logo wow fadeInDown"><h1><a style=" font-weight:400;" href="">Call Center</a></h1></div>
							<h1 class="wow fadeInLeft">
							<a style="color:#fff; font-weight:400;">Remote Diagnostic </a>
							</h1>
							<h4 style="color:#3EB0F7;">Powered by Greystone</h4>
						<div class="landing-text wow fadeInUp">
							<p></p>
						</div>				  
						<div class="head-btn wow fadeInLeft">
							<!--<a href="#feature" class="btn-default">Android</a>
							<a href="#download" class="btn-default">IOS</a>-->
						</div>
					</div>
					<!-- /.signup form -->
					<div class="col-md-5">
					
						<div class="signup-header wow fadeInUp" style="margin-top:130px;">
							<h3 class="form-title text-center"></h3>
							<div class="form-header">
								<div class="form-group">
									<input class="form-control input-lg" name="MERGE1" id="uniqueid" type="text" placeholder="Customer Locator ID or Phone S/N" >
								</div>
								<div class="form-group last" id="search_data_container">
									<a href="#intro">
										<input id="search_data" type="submit" class="btn btn-warning btn-block btn-lg" value="<?php echo isset($langList['SEARCH']) ? $langList['SEARCH'] : 'Search'; ?>">
									</a>
								</div>
								<p class="privacy text-center"><a href="privacy.html"></a></p>
							</div>
						</div>
					</div>
				</div>
			</div> 
		</div> 
	</div>
	<div id="container-detail" style="margin-left:-150px;">
		<!-- NAVIGATION -->
		<div id="menu">
			<nav class="navbar-wrapper navbar-default" role="navigation">
				<div class="container">
					<div class="row">
						<div class="col-md-6" style="height:36px; width:auto;">
							<div class="navbar-header">
								<a style="padding-left:0px;padding-top:15px;" class="navbar-brand site-name" href="javascript:void(null)">
									Customer Locator ID: 
									<span id="result_uniqueid" style="color:#39F;">
										
									</span>
								</a>
							</div>
						</div>
						<div class="col-md-6" style="float:right; width:auto;" id="status-bar-connected">
							<div id="next-call" class="status-bar-right col-md-8" style="cursor:pointer; float:right; margin:0px; padding-right: 0px; width:auto; font-size:16px; padding-left: 0px !important; text-align:right;">
								<label style="cursor:pointer;">
									<input style="width: 200px; height:50px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="<?php echo isset($langList['NEXTCALL']) ? $langList['NEXTCALL'] : 'Next Call'; ?>">
								</label>
							</div>
							<div id="button_croll" class="status-bar-right col-md-8" style="float:right; margin:0px; padding-right: 1px; width:auto; font-size:16px; padding-left: 0px !important; text-align:right;">
								<label>
									<input style="height:50px; font-size:24px; background-color: #FFF;color: #3EB0F7; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="Method: waiting">
								</label>
							</div>
						</div>
						<div class="col-md-6" style="float:right; display:none;" id="status-bar-connecting">
							<div class="status-bar-right col-md-6" style="cursor:pointer; float:right; margin:0px; padding-right: 0px; width:auto; font-size:16px; padding-left: 0px !important; text-align:right;">
								<label>
									<input style="cursor:pointer; background-color: #F3B63B; color: #FFF; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="Lost connection. Trying to reconnect...">
								</label>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
		
		<!-- Method 3 -->
		<div id="container_method_3" style="margin-top: 40px;">
			<div class="container" style="font-size:19px;">
				<legend style="font-size:24px; color:#39F;">
					<div class="row wow fadeInUp">
						<div class="col-md-8">Remote Control Diagnostic App</div>
						<div class="col-md-4">
							
						</div>
					</div>
				</legend>
				<!-- BEGIN SIDEBAR & CONTENT -->
				<div class="row margin-bottom-40">
				  <!-- BEGIN SIDEBAR -->
				  <div class="sidebar col-md-12">
					<ul id="ul_category" class="list-group margin-bottom-25 sidebar-menu">
						<li id="ul_category_header" style="background:#E0E0DD;cursor:pointer;border-radius: 0px !important;" class="list-group-item clearfix">
							<!--<a style="color: #fff;pointer-events: none;" href="javascript:void(0);">
								<img style="width:40px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/home.png" /> 
							</a>-->
							<label style="cursor:pointer;">
								<input style="width: 200px; height: 50px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="HOME">
							</label>
							<progress id="curr_process_bar" style="margin-top:10px;float:right;" value="10" max="100"></progress>
						</li>
						<li onclick="checkProblem('application');" style="border-right: none;width: 25%; float:left; position:inherit; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_applications_icon.png" /> 
								APPLICATIONS
							</a>
						</li>
						<li id="ul_category_header_performance" onclick="checkProblem('performance');" style="border-right: none;width: 25%; float:left; position:inherit; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" /> 
								PERFORMANCE
							</a>
						</li>
						<li onclick="checkProblem('battery');" style="border-right: none;width: 25%; float:left; position:inherit; float:left; position:static; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_battery_icon.png" /> 
								BATTERY
							</a>
						</li>
						<li onclick="checkProblem('call');" style="width: 25%; float:left; position:inherit; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_calls_icon.png" /> 
								CALLS
							</a>
						</li>
						
						<li onclick="checkProblem('connectivity');" style="border-right: none;width: 25%; float:left; position:inherit; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_connectivity_icon.png" /> 
								CONNECTIVITY
							</a>
						</li>
						<li id="ul_category_header_camera" onclick="checkProblem('camera');" style="border-right: none;width: 25%; float:left; position:inherit; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_camera_icon.png" /> 
								CAMERA
							</a>
						</li>
						<li onclick="checkProblem('sensors');" style="border-right: none;width: 25%; float:left; position:inherit; float:left; position:static; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_sensors_icon.png" /> 
								SENSOR
							</a>
						</li>
						<li onclick="checkProblem('device');" style="width: 25%; float:left; position:inherit; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_device_icon.png" /> 
								DEVICE
							</a>
						</li>
						
						<li onclick="checkProblem('sounds_vibrate');" style="border-bottom-left-radius: 4px;border-right: none;width: 50%; float:left; position:inherit; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_sound_vibration_icon.png" /> 
								SOUNDS & VIBRATION
							</a>
						</li>
						<li onclick="checkProblem('display_keyboard');" style="border-bottom-left-radius: 0;width: 50%; float:left; position:inherit; background:#FFFEFA;cursor:pointer;" class="list-group-item clearfix">
							<a style="color: #F69211;pointer-events: none;" href="javascript:void(0);">
								<img style="width:50px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_display_and_keyboard_icon.png" /> 
								DISPLAY & KEYBOARD
							</a>
						</li>
					</ul>
					<ul id="ul_problem" style="margin-bottom:0px;" class="list-group margin-bottom-25 sidebar-menu">
						<li onclick="checkProblem('back');" style="background:#E0E0DD ;cursor:pointer;border-radius: 0px !important;" class="list-group-item clearfix">
							<!--<a style="color: #fff;pointer-events: none;" href="javascript:void(0);">
								<img style="width:40px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/home.png" /> 
							</a>-->
							<label style="cursor:pointer;">
								<input style="width: 200px; height: 50px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="BACK">
							</label>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_application list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_applications_101" class="md-check" value="101">
									<label for="chk_applications_101" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Clear all running Apps </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_performance list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_performance_201" class="md-check" value="201">
									<label for="chk_performance_201" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Free Ram and CPU </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_performance list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_performance_202" class="md-check" value="202">
									<label for="chk_performance_202" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Clear App cache </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_battery list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_battery_301" class="md-check" value="301">
									<label for="chk_battery_301" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									My phone is too hot </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_battery list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_battery_302" class="md-check" value="302">
									<label for="chk_battery_302" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Turn off GPS </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_battery list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_battery_303" class="md-check" value="303">
									<label for="chk_battery_303" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Turn off Bluetooth </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_battery list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_battery_304" class="md-check" value="304">
									<label for="chk_battery_304" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Set brightness auto </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_call list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_call_401" class="md-check" value="401">
									<label for="chk_call_401" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Call test </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
							<input style="border: none; border-bottom: thin solid silver;" type="text" id="chk_call_401_phone_number" value="" placeholder="Input the phone number">
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_connectivity list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_connectivity_701" class="md-check" value="701">
									<label for="chk_connectivity_701" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Airplane Mode </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_camera list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_camera_801" class="md-check" value="801">
									<label for="chk_camera_801" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Front camera Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_camera list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_camera_802" class="md-check" value="802">
									<label for="chk_camera_802" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Back camera Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_camera list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_camera_803" class="md-check" value="803">
									<label for="chk_camera_803" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Video record Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_camera list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_camera_804" class="md-check" value="804">
									<label for="chk_camera_804" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Flash Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sensors list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_sensors_901" class="md-check" value="901">
									<label for="chk_sensors_901" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Sensor Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_device list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_device_exit_app" class="md-check" value="EXIT_APP">
									<label for="chk_device_exit_app" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Exit app when done </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_501" class="md-check" value="501">
									<label for="chk_vibration_501" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Cannot hear incoming calls ring </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_502" class="md-check" value="502">
									<label for="chk_vibration_502" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Cannot hear voice during phone calls </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_503" class="md-check" value="503">
									<label for="chk_vibration_503" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Cannot hear media </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_504" class="md-check" value="504">
									<label for="chk_vibration_504" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Cannot feel the device vibrate </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_505" class="md-check" value="505">
									<label for="chk_vibration_505" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Speaker Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_506" class="md-check" value="506">
									<label for="chk_vibration_506" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Vibration Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_display_keyboard list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_keyboard_601" class="md-check" value="601">
									<label for="chk_keyboard_601" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Change brightness mode to auto </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_display_keyboard list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_keyboard_602" class="md-check" value="602">
									<label for="chk_keyboard_602" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Change screen time out to default </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_display_keyboard list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_keyboard_603" class="md-check" value="603">
									<label for="chk_keyboard_603" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Button Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_display_keyboard list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_keyboard_604" class="md-check" value="604">
									<label for="chk_keyboard_604" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									LCD Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_display_keyboard list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_keyboard_605" class="md-check" value="605">
									<label for="chk_keyboard_605" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Digitizer Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
					</ul>
					<ul id="ul_problem_ios" style="margin-bottom:0px;" class="list-group margin-bottom-25 sidebar-menu">
						<li onclick="checkProblem('back');" style=" background:#E0E0DD ;cursor:pointer;border-radius: 0px !important;" class="list-group-item clearfix">
							<!--<a style="color: #fff;pointer-events: none;" href="javascript:void(0);">
								<img style="width:40px; margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/home.png" /> 
							</a>-->
							<label style="cursor:pointer;">
								<input style="width: 200px; height: 50px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="BACK">
							</label>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_application list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_performance list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_battery list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_battery_set_brightness_auto" class="md-check" value="BATTERY_BRIGHTNESS">
									<label for="chk_battery_set_brightness_auto" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Set brightness auto </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_battery list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_battery list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_call list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_call_airplane_mode" class="md-check" value="CALLS_AIPLANE_MODE">
									<label for="chk_call_airplane_mode" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Airplane Mode </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_call list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_call_network_operator" class="md-check" value="CALLS_NETWORK_OPERATOR">
									<label for="chk_call_network_operator" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Network Operator </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_call list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_call_call_test" class="md-check" value="CALLS_CALL">
									<label for="chk_call_call_test" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Call </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
							<input style="border: none; border-bottom: thin solid silver;" type="text" id="chk_call_call_test_phone_number" value="" placeholder="Input the phone number">
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_connectivity list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_connectivity_wifi" class="md-check" value="CONNECTIVE_WIFI">
									<label for="chk_connectivity_wifi" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Wi-Fi </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_connectivity list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_connectivity_gps" class="md-check" value="CONNECTIVE_GPS">
									<label for="chk_connectivity_gps" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									GPS </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_connectivity list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_connectivity_bluetooth" class="md-check" value="CONNECTIVE_BLUETOOTH">
									<label for="chk_connectivity_bluetooth" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Bluetooth </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_connectivity list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="problem_connectivity_airplane_mode" class="md-check" value="CALLS_AIPLANE_MODE">
									<label for="problem_connectivity_airplane_mode" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Airplane Mode </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_camera list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_camera_front_camera" class="md-check" value="CAMERA_FRONT_CAMERA">
									<label for="chk_camera_front_camera" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Front camera Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_camera list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_camera_back_camera" class="md-check" value="CAMERA_BACK_CAMERA">
									<label for="chk_camera_back_camera" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Back camera Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_camera list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_camera_video_record" class="md-check" value="CAMERA_VIDEO_RECORD">
									<label for="chk_camera_video_record" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Video record Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_camera list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_camera_flash" class="md-check" value="CAMERA_FLASH">
									<label for="chk_camera_flash" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Flash Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sensors list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_sensors_proximity_sensor" class="md-check" value="PROXIMITY_SENSORS_TESTING">
									<label for="chk_sensors_proximity_sensor" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Proximity Sensor Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sensors list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_sensors_motion_sensor" class="md-check" value="MOTION_SENSORS_TESTING">
									<label for="chk_sensors_motion_sensor" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Motion Sensor Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_device list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_device_exit_app_ios" class="md-check" value="EXIT_APP">
									<label for="chk_device_exit_app_ios" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Exit app when done </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_volume" class="md-check" value="SOUND_VIBRATION_VOLUME">
									<label for="chk_vibration_volume" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Cannot hear incoming calls ring </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_silent_mode" class="md-check" value="SOUND_VIBRATION_SILENT_MODE">
									<label for="chk_vibration_silent_mode" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Cannot hear voice during phone call </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_speaker" class="md-check" value="SOUND_VIBRATION_SPEAKER">
									<label for="chk_vibration_speaker" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Cannot hear media </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_sounds_vibrate list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_vibration_vibrate" class="md-check" value="SOUND_VIBRATION_VIBRATION">
									<label for="chk_vibration_vibrate" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Cannot feel the device vibrate </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_display_keyboard list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_keyboard_brightness" class="md-check" value="DISPLAY_KEYBOARD_BRIGHTNESS">
									<label for="chk_keyboard_brightness" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Change brightness mode to auto </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
						<li style="background:#FFFEFA;cursor:pointer;" class="problem_diagnostic problem_display_keyboard list-group-item clearfix">
							<a style="color: #fff; float:left;" href="javascript:void(0);">
								<div class="md-checkbox" style="float: left;">
									<input type="checkbox" id="chk_keyboard_button" class="md-check" value="DISPLAY_KEYBOARD_BUTTON">
									<label for="chk_keyboard_button" style="margin-top: 5px;font-size:19px;color: #F69211;">
									<span></span>
									<span class="check" style="top: 4px;"></span>
									<span class="box" style="top: 8px; border:1px solid #E4A24E;"></span>
									Button Testing </label>
								</div>
								<img style="opacity:0;width:10px; height: 50px;margin-right: 10px;" src="<?=url_tmpl();?>callcenter/images/category_performance_icon.png" />
							</a>
						</li>
					</ul>
				  </div>
				  <!-- END SIDEBAR -->
				</div>
				<!-- END SIDEBAR & CONTENT -->
				<div class="row wow fadeInUp">
					<div class="col-md-6"></div>
					<div class="col-md-6">
						<div class="col-md-2" style="font-size:16px; padding-left: 0px !important;">
							
						</div>
						<div class="col-md-10" style="padding-top: 2px; text-align: right; padding-right: 0px !important;">
							<label id="save-manual" style="cursor:pointer;">
								<input style="width: 200px; height: 50px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="SEND">
							</label>
						</div>
					</div>
				</div>
			</div>
			<div class="container" style="font-size:19px;">
				<legend style="margin-top:20px;  color:#F69211; font-size:19px;">
					<div class="row wow">
						<div style="width:80%;" class="col-md-8" id="curr_suggestion_bar">Suggestion</div>
						<div style="width:20%;" class="col-md-4">
							<div class="col-md-12 btn-suggestion" style="text-align: right; padding-right: 0px !important;">
								<!--<a onclick="saveDoneSuggestion(-1);" style="color:#39F; cursor:pointer;" class="btn-suggestion" id="save-done-suggestion" title="Save">
									Done
								</a>-->
								<label title="Done" onclick="saveDoneSuggestion(-1);" id="save-done-suggestion" style="cursor:pointer;">
									<input style="width: 100px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="DONE">
								</label>
							</div>
							<div class="col-md-12 btn-question" style="text-align: right; padding-left:5px; padding-right: 0px !important;">
								<!--<a onclick="saveDoneSuggestion(1);" style="color:#39F; cursor:pointer;" class="btn-question" id="save-question-pass" title="Save">
									Passed
								</a> | 
								<a onclick="saveDoneSuggestion(0);" style="color:#red; cursor:pointer;" class="btn-question" id="save-question-fail" title="Save">
									Failed
								</a>-->
								<label title="Passed" onclick="saveDoneSuggestion(1);" id="save-question-pass" style="cursor:pointer;">
									<input style="width: 80px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="PASSED">
								</label>
								<label title="Failed" onclick="saveDoneSuggestion(0);" id="save-question-fail" style="cursor:pointer;">
									<input style="width: 80px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="FAILED">
								</label>
							</div>
						</div>
					</div>
				</legend>
			</div>
		</div>
		<!-- End Method 3 -->
		
		<div id="intro">
			<div id="cricket-container" style="display:none; margin-top:-80px;">
			<p style="display:none;">
				
			</p>
			<div class="container" style="font-size:19px;">
				<legend style="margin-top:20px; font-size:24px; color:#39F;">
				<div class="row wow fadeInUp">
					<div class="col-md-4"><?php echo isset($langList['CUSTOMER_INFORMATION']) ? $langList['CUSTOMER_INFORMATION'] : 'Customer Information'; ?></div>
					<div class="col-md-4" style="font-size:16px;">
						
					</div>
					<div class="col-md-4">
						<div class="col-md-10" style="font-size:16px; padding-left: 0px !important;">
							
						</div>
						<div class="col-md-2" style="text-align: right; padding-right: 0px !important;">
							<a style="font-size:24px; color:#39F; cursor:pointer;" id="collapse-customer" title="Expand">
								<i class="fa fa-chevron-down"></i>
							</a>
						</div>
					</div>
				</div>
				</legend>
				<div class="row container-customer">
					<div class="col-md-4">
						<input value="" style="width: 100%; border: none;border-bottom: thin solid #E5E5E5; border-style: none none dotted none;" type="text" id="customer-fullname" placeholder="<?php echo isset($langList['FULLNAME']) ? $langList['FULLNAME'] : 'Full Name'; ?>" />
					</div>
					<div class="col-md-4">
						<input value="" style="width: 90%; border: none;border-bottom: thin solid #E5E5E5; border-style: none none dotted none;" type="text" id="customer-phone" placeholder="<?php echo isset($langList['PHONE']) ? $langList['PHONE'] : 'Phone'; ?>" />
					</div>
					<div class="col-md-4">
						<input value="" style="width: 100%; border: none;border-bottom: thin solid #E5E5E5; border-style: none none dotted none;" type="text" id="customer-email" placeholder="<?php echo isset($langList['EMAIL']) ? $langList['EMAIL'] : 'Email'; ?>" />
					</div>
				</div>
				<div class="row container-customer">
					<div class="col-md-4">
						<input value="" style="width: 100%; border: none;border-bottom: thin solid #E5E5E5; border-style: none none dotted none;" type="text" id="customer-address" placeholder="<?php echo isset($langList['ADDRESS']) ? $langList['ADDRESS'] : 'Address'; ?>" />
					</div>
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<div class="col-md-6" style="font-size:16px; padding-left: 0px !important;">
							
						</div>
						<div class="col-md-6" style="text-align: right; padding-right: 0px !important;">
							<label title="Save customer information" id="save-customer" style="cursor:pointer;">
								<input style="width: 100px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="<?php echo isset($langList['SAVE']) ? $langList['SAVE'] : 'Save'; ?>">
							</label>
						</div>
					</div>
				</div>
				<legend style="margin-top:20px; font-size:24px; color:#39F;">
				<div class="row wow fadeInUp">
					<div class="col-md-4" style="padding-top:20px;"><?php echo isset($langList['DEVICE_INFORMATION']) ? $langList['DEVICE_INFORMATION'] : 'Device Information'; ?></div>
					<div class="col-md-8" style="text-align:right;">
						<!--<label title="View Screenshot" id="take-screenshot" style="cursor:pointer;margin-bottom:0px;">
							<input style="width:200px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="App Viewer">
						</label>
						<label title="View Screenshot" id="view-screenshot" style="cursor:pointer;margin-bottom:0px;">
							<input style="width:200px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="App Viewer">
							<a id="fancybox-screenshot" class="fancybox-screenshot" style="position:absolute;left:0px;width:100%;heigth:100%;opacity:0;" href="http://cloud16.greystonedatatech.com/remote-diagnostic-test/download/images/ZZ5AYM_0_1445324911_1445325190.png" data-fancybox-group="gallery" title="Screenshot">Screenshot</a>
						</label>-->
					</div>
				</div>
				</legend>
				<!--<legend style="margin-top:20px; font-size:24px; color:#39F;">Device Information</legend>-->
				<div class="row wow fadeInUp" style="">
					<div class="col-md-4" id="device-product-name"><?php echo isset($langList['PRODUCT_NAME']) ? $langList['PRODUCT_NAME'] : 'Product Name'; ?>: </div>
					<div class="col-md-4" id="device-model-name"><?php echo isset($langList['MODEL_NAME']) ? $langList['MODEL_NAME'] : 'Model Number'; ?>: </div>
					<div class="col-md-4" id="device-serial-number"><?php echo isset($langList['SERIAL_NUMBER']) ? $langList['SERIAL_NUMBER'] : 'Serial Number'; ?>: </div>
				</div>
				<div class="row wow fadeInUp" style="">
					<div class="col-md-4" id="device-imei"><?php echo isset($langList['IMEI']) ? $langList['IMEI'] : 'IMEI'; ?>: </div>
					<div class="col-md-4" id="device-fmi"><?php echo isset($langList['FMI']) ? $langList['FMI'] : 'FMI'; ?>: </div>
				</div>
				<legend style="margin-top:20px; font-size:24px; color:#39F;">
				<div class="row wow fadeInUp">
					<div class="col-md-4"><?php echo isset($langList['FUNCTION_TEST']) ? $langList['FUNCTION_TEST'] : 'Function Test'; ?></div>
					<div id="app-start-time" class="col-md-4" style="font-size:17px;">
						<?php echo isset($langList['START_TIME']) ? $langList['START_TIME'] : 'Start time'; ?>: 
					</div>
					<div class="col-md-4">
						<div id="app-end-time" class="col-md-10" style="font-size:17px; padding-left: 0px !important;">
							<?php echo isset($langList['END_TIME']) ? $langList['END_TIME'] : 'End time'; ?>: 
						</div>
						<div class="col-md-2" style="text-align: right; padding-right: 0px !important;">
							<a title="Refresh" id="reload_detail" onclick="searchDetail('');" style="color:#39F; cursor:pointer;">
								<i class="rotate360 fa fa-refresh"></i>
							</a>
						</div>
					</div>
				</div>
				</legend>
				<div class="row wow fadeInUp" style="background:#d0ebf1; height:35px; color:#39F; font-size:22px;" >
					<div class="col-md-4">
						<div class="md-checkbox" style="float: left;" title="Show all items">
							<input type="checkbox" id="chk_show_all_diagnostic" class="md-check" value="chk_show_all_diagnostic">
							<label for="chk_show_all_diagnostic" style="font-size:19px;color: #F69211;">
							<span></span>
							<span class="check" style="top: 0px; border-color: #39F;"></span>
							<span class="box" style="top: 4px; border:1px solid #39F;"></span>
							</label>
						</div>
						<?php echo isset($langList['DIAGNOSTIC_FUNCTION']) ? $langList['DIAGNOSTIC_FUNCTION'] : 'Diagnostic Function'; ?>
					</div>
					<div class="col-md-1"><?php echo isset($langList['BEFORE']) ? $langList['BEFORE'] : 'Before'; ?></div>
					<div class="col-sm-3"><?php echo isset($langList['NOTE']) ? $langList['NOTE'] : 'Note'; ?></div>
					<div class="col-md-1"><?php echo isset($langList['AFTER']) ? $langList['AFTER'] : 'After'; ?></div>
					<div class="col-sm-3"><?php echo isset($langList['NOTE']) ? $langList['NOTE'] : 'Note'; ?></div>
				</div>
				<div id="result-diagnostic-container">
				
				</div>
			</div>
		</div>
		</div>
	</div>
	<div id="imgloading"></div>
	<div id="accept-run-app" class="promo-layer" style="display:none; z-index: 100000; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0, 0.9)">   
		<div style="z-index: 100001; top: 50%; left: 50%; margin: -300px 0 0 -400px; width: 800px; height: 600px; position: fixed;">       
			<div class="row">           
				<div class="col-md-12" style="text-align: center">               
					<h3 style="color: white; margin-bottom: 30px; font-size: 28px; line-height: 36px; font-weight: 400;">
						The app is waiting for your approval.
					</h3>               
					<p style="color: white; font-size: 18px;">Please select one of three options below:</p>               
					<ul style="list-style:none; margin: 30px auto 20px auto; padding: 10px; display: block; width: 550px;  text-align: left; background: #fddf00;  color: #000000;transform:rotate(0deg);">                   
						<li style="list-style:none; padding: 4px 8px; font-size: 15px;">                      
							<span style="display: inline-block; width: 10px; height: 10px; border-radius: 20px !important; background: rgba(0, 0, 0, 0.2); margin-right: 5px;  margin-top: 7px;"></span>                      
							Click "Start Now" to run app.                
						</li>                   
						<li style="list-style:none; padding: 4px 8px; font-size: 15px;">                      
							<span style="display: inline-block; width: 10px; height: 10px; border-radius: 20px !important; background: rgba(0, 0, 0, 0.2); margin-right: 5px;  margin-top: 7px;"></span>                      
							Click "Decline" to exit app on device.                
						</li>                
						<li style="list-style:none; padding: 4px 8px; font-size: 15px;">                      
							<span style="display: inline-block; width: 10px; height: 10px; border-radius: 20px !important; background: rgba(0, 0, 0, 0.2); margin-right: 5px;  margin-top: 7px;"></span>                      
							Click "Not Now" to postpone.              
						</li>                   
					</ul>           
				</div>       
			</div>       
			<div class="row">           
				<div class="col-md-12" style="margin-top: 20px;">               
					<center>
						<a id="accept-start-now" onclick="acceptRunApp(1);" class="btn btn-circle btn-danger btn-lg" style="margin: 30px 10px 10px 0px; padding: 12px 28px; font-size: 14px; text-transform: uppercase1;" href="javascript:;" title="Start Now">
						Start Now
						</a>               &nbsp;&nbsp;
						<a onclick="acceptRunApp(2);" class="btn btn-circle btn-default btn-lg promo-remind" style="padding: 11px 28px; font-size: 14px; text-transform: uppercase1;background: none; color: #fff;" href="javascript:;">
						Decline
						</a>               
						<a onclick="acceptRunApp(0);" class="btn btn-circle btn-default btn-lg promo-dismiss" style="padding: 12px 12px; font-size: 14px; text-transform: uppercase1; background: none; color: #aaa; border: 0" href="javascript:;">
						Not Now
						</a>
					</center>           
				</div>       
			</div>   
		</div>
	</div>
	<input type="hidden" value="" id="os_type" />
	
	<!-- app viewer -->
	<div id="app_viewer_container">
		<img alt="Waiting..." style="display:none;" id="image_step" width="300px" src="" />
		
		<input id="btn_step" type="button" style="font-size: 24px; padding:10px;width:100%;border:none;color:#FFF;background-color:#3EB0F7;" value="App Viewer"></span>
	</div>
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/0.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/2.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/3.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/10.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/11.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/12.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/13.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/14.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/15.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/16.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/17.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/18.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/19.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/100.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/110.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/120.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/130.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/140.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/150.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/160.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/170.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/180.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/190.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1300.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1400.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1401.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1500.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1501.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1502.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1700.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1701.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1702.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1703.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/android/1800.png" />
	
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/0.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/2.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/3.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/10.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/11.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/12.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/13.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/14.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/15.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/16.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/17.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/18.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/19.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/100.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/110.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/120.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/130.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/140.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/150.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/160.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/170.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/180.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/190.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1300.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1400.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1401.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1500.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1501.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1502.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1700.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1701.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1702.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1703.png" />
	<img style="display:none;" width="300px" src="<?=url_tmpl();?>callcenter/images/index/ios/1800.png" />
	
	
	<!-- /app viewer -->
	
	<!-- /.footer -->
	<footer id="footer" class="wow fadeInUp" style="display:none;">
		<div class="container">
			<!-- /.social links -->
			<div class="social text-center">
				<ul style="margin-top:-60px;">
					<li><a class="wow fadeInUp" href="#top"><i class="fa fa-angle-double-up"></i>Back</a></li>
				</ul>
			</div>
		</div>	
	</footer>
	
	
	<!-- /.javascript files -->
	<script src="<?=url_tmpl();?>callcenter/js/jquery.js"></script>
	<script src="<?=url_tmpl();?>callcenter/js/bootstrap.min.js"></script>
	<script src="<?=url_tmpl();?>callcenter/js/custom.js"></script>
	<script src="<?=url_tmpl();?>callcenter/js/jquery.sticky.js"></script>
	<script src="<?=url_tmpl();?>callcenter/js/wow.min.js"></script>
	<script src="<?=url_tmpl();?>callcenter/js/owl.carousel.min.js"></script>
	<script src="<?=url_tmpl();?>callcenter/js/jquery-ui.js"></script>
	<!-- Add fancyBox main JS and CSS files -->
	<script type="text/javascript" src="<?=url_tmpl();?>callcenter/fancyapps/source/jquery.fancybox.js?v=2.1.5"></script>
	<script src="<?=url_tmpl();?>callcenter/bootstrap-toastr/toastr.min.js"></script>
	<script>
		var windowWidth = $(window).width();
		if(windowWidth < 1400){
			$('#container-detail,#welcome_container').css('margin-left', '0px');
		}
		if(windowWidth <= 1024){
			$('#ul_category').find('li').css('width', '50%');
			$('#ul_category_header').css('width', '100%');
			$('#ul_category_header_performance').css('border-right', '1px solid #DDD');
			$('#ul_category_header_camera').css('border-right', '1px solid #DDD');
		}
		if(windowWidth <= 500){
			$('#ul_category').find('li').css('width', '100%');
			$('#ul_category_header_performance').css('border-right', '1px solid #DDD');
			$('#ul_category_header_camera').css('border-right', '1px solid #DDD');
		}
		// alert(windowWidth);
		new WOW().init();
		//var remoteLink = 'http://172.16.21.3:97/protocol/remote-diagnostic-test/service.php';
		//var remoteLink = '//cloud16.greystonedatatech.com/remote-diagnostic-test/service.php';
		var remoteLink = '<?php echo isset($remoteLink) ? $remoteLink : '//cloud16.greystonedatatech.com/remote-diagnostic/service.php'; ?>'; // remote link in controller
		var langStartTime = '<?php echo isset($langList['START_TIME']) ? $langList['START_TIME'] : 'Start Time'; ?>';
		var langEndTime = '<?php echo isset($langList['END_TIME']) ? $langList['END_TIME'] : 'End Time'; ?>';
		var langProductName = '<?php echo isset($langList['PRODUCT_NAME']) ? $langList['PRODUCT_NAME'] : 'Product Name'; ?>';
		var langModelName = '<?php echo isset($langList['MODEL_NAME']) ? $langList['MODEL_NAME'] : 'Model Name'; ?>';
		var langSerialNumber = '<?php echo isset($langList['SERIAL_NUMBER']) ? $langList['SERIAL_NUMBER'] : 'Serial Number'; ?>';
		var langImei = '<?php echo isset($langList['IMEI']) ? $langList['IMEI'] : 'IMEI'; ?>';
		var langFMI = '<?php echo isset($langList['FMI']) ? $langList['FMI'] : 'FMI'; ?>';
		var langFullName = '<?php echo isset($langList['FULLNAME']) ? $langList['FULLNAME'] : 'Full Name'; ?>';
		var langPhone = '<?php echo isset($langList['PHONE']) ? $langList['PHONE'] : 'Phone'; ?>';
		var langEmail = '<?php echo isset($langList['EMAIL']) ? $langList['EMAIL'] : 'Email'; ?>';
		var langAddress = '<?php echo isset($langList['ADDRESS']) ? $langList['ADDRESS'] : 'Address'; ?>';
		var langMethod = '<?php echo isset($langList['METHOD']) ? $langList['METHOD'] : 'Method'; ?>';
		var langIs = '<?php echo isset($langList['IS']) ? $langList['IS'] : 'is'; ?>';
		var langRunning = '<?php echo isset($langList['RUNNING']) ? $langList['RUNNING'] : 'running'; ?>';
		var langWaiting = '<?php echo isset($langList['WAITING']) ? $langList['WAITING'] : 'waiting'; ?>';
		var username = '<?php echo isset($username) ? $username : 'N/A'; ?>';
		var myTimer = null;
		var myTimerScreenshot = null;
		var oldDetail = '';
		var callAjax = false;
		var ajaxObj = null;
		var ajaxObjAutocomplete = null;
		var collapseCustomer = true;
		var postPoneFlag = 0;
		var notificationFlag = false; // showed popup notification
		var appRunningChanged = 0;
		var currScreenshotFlag = null;
		var cameraImagesFlag = null;
		var stepFlag = null;
		$('#imgloading').hide();
		$('.container-customer').hide();
		$('.status-bar-right').hide();
		$('#autofix_value').prop('checked', true);
		$('.list-group-item').css("position","static");
		$('#ul_category').show();
		$('#ul_problem').hide();
		$('#ul_problem_ios').hide();
		$('#container_method_3').hide();
		$('#view-screenshot').hide();
		$('#uniqueid').focus();
		$('.problem_diagnostic').find('label').css('pointer-events', 'none');
		$('.problem_diagnostic').click(function(e, n){
			var thisTmp = $(this);
			var thisCheckbox = thisTmp.find('input[type="checkbox"]');
			thisCheckbox.click();
		});
		$('.uniqueid').click(function(e, n){
			var thisTmp = $(this);
			var thisCheckbox = thisTmp.find('input[type="checkbox"]');
			thisCheckbox.click();
		});
		$('#uniqueid').autocomplete({
			source: function( request, response ) {
				if(ajaxObjAutocomplete != null){ ajaxObjAutocomplete.abort(); }
				ajaxObjAutocomplete = $.ajax({
					url: remoteLink,
					dataType: "json",
					data: { 'uniqueid_pattern':request.term, 'command':'get-like-uniqueid' },
					crossDomain:true,
					success: function( data ){
						//console.log(data);
						data = data.datas;
						var dataLenTmp = data.length;
						var dataTmp = new Array();
						for(var iRunTmp = 0; iRunTmp < dataLenTmp; iRunTmp++){
							var uniqueObjTmp = data[iRunTmp];
							//console.log(uniqueObjTmp.uniqueid);
							dataTmp.push(uniqueObjTmp.uniqueid);
						}
						$('#uniqueid').removeClass('ui-autocomplete-loading');
						response(dataTmp);
					}
				});
				//console.log($('#ui-id-1').css({'z-index':'10000 !important'}));
			},
			minLength: 1,
			select: function( event, ui ) {
				if(event.keyCode != 13){
					if(ajaxObj != null){ ajaxObj.abort(); }
					postPoneFlag = 0;
					callAjax = false;
					$('#result_uniqueid').html('<i class="rotate360 fa fa-refresh"></i>');
					$('#uniqueid,#device_sn').css({'border':'1px solid #DADADA', 'color':'#333'});
					$('#container_method_3 input[type="checkbox"]').prop('checked', false);
					if(myTimerScreenshot != null){ clearTimeout(myTimerScreenshot); myTimerScreenshot = null; }
					$('#take-screenshot').find('input').val('App Viewer');
					$('#take-screenshot').show();
					$('#view-screenshot').hide();
					$("#image_step").hide();
					$('#image_step').attr('src', '');
					currScreenshotFlag = null
					$(window).scrollTop($('#intro').offset().top);
					searchDetail(ui.item.value);
				}
			}
		});
		$('#next-call').click(function(){
			if(myTimer != null){ clearTimeout(myTimer); }
			if(ajaxObj != null){ ajaxObj.abort(); }
			$('#container_method_3').hide();
			$('#cricket-container').hide();
			if(myTimerScreenshot != null){ clearTimeout(myTimerScreenshot); myTimerScreenshot = null; }
			$('#take-screenshot').find('input').val('App Viewer');
			$('#take-screenshot').show();
			$('#view-screenshot').hide();
			$('#result_uniqueid').html('');
			var strTmpScrollTmp = 
				'<label id="app_method_scroll">'+
					'<input style="height:50px; font-size:24px; background-color: #FFF;color: #3EB0F7; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="Method: waiting">'+
				'</label>';
			$('#button_croll').html(strTmpScrollTmp);
			$('#uniqueid').val('');
			$('.container-customer').find('input').val('');
			$("#image_step").hide();
			$('#image_step').attr('src', '');
			$('#uniqueid').focus();
		});
		$('#take-screenshot').click(function(){
			takeScreenshot(); return false;
		});
		$('#btn_step').click(function(){
			$("#image_step").toggle();
			//$('#image_step').attr('src', ''); 
			return false;
		});
		$('.fancybox-screenshot').fancybox({afterClose : function(){
			$('#take-screenshot').find('input').val('App Viewer');
			$('#take-screenshot').show();
			$('#view-screenshot').hide();
			if(myTimerScreenshot != null){ clearTimeout(myTimerScreenshot); myTimerScreenshot = null; }
		}});
		$('#search_data').click(function(){
			var uniqueid = $('#uniqueid').val();
			if(uniqueid.trim() == '' || uniqueid.length != 6){
				$('#uniqueid').css({'border':'1px solid #EC1010', 'color':'#EC1010'});
				$('#uniqueid').focus();
				return false;
			}
			postPoneFlag = 0;
			callAjax = false;
			$('#container_method_3 input[type="checkbox"]').prop('checked', false);
			$('#result_uniqueid').html('<i class="rotate360 fa fa-refresh"></i>');
			$('#uniqueid').css({'border':'1px solid #DADADA', 'color':'#333'});
			if(myTimerScreenshot != null){ clearTimeout(myTimerScreenshot); myTimerScreenshot = null; }
			$('#take-screenshot').find('input').val('App Viewer');
			$('#take-screenshot').show();
			$('#view-screenshot').hide();
			$('#image_step').attr('src', '');
			$("#image_step").hide();
			currScreenshotFlag = null
			searchDetail(uniqueid);
		});
		$('#uniqueid').keyup(function(e){
			if(e.keyCode == 13){
				$('#search_data').click();
				$('.ui-autocomplete').hide();
				$("#image_step").hide();
				$('#image_step').attr('src', '');
			}
		});
		$('#uniqueid').click(function(e){
			$(this).val('');
		});
		$('#save-customer').click(function(){ 
			saveCustomer(); return false; 
		});
		$('#collapse-customer').click(function(){ 
			collapseCustomerContainer(); 
		});
		$('#save-manual').click(function(){ 
			saveSettingDiagnostic(); return false; 
		});
		$('#chk_show_all_diagnostic').click(function(){ 
			var chkTmp = $('#chk_show_all_diagnostic').prop('checked');
			if(chkTmp){ $('.items_hidden').show(); } else{ $('.items_hidden').hide(); }
		});
		function searchDetail(uniqueid){
			if(callAjax){ return false; } // dang ajax thi k ajax nua
			callAjax = true;
			$('#reload_detail').find('i').addClass('rotate360');
			var pushData = JSON.stringify({command:'get-report', search:{uniqueid:uniqueid}});
			if(ajaxObj != null){ ajaxObj.abort(); }
			ajaxObj = $.ajax({
				type: "POST",
				url: remoteLink,
				data: pushData,
				dataType: 'json',
				timeout: 10000,
				success: function(data) {
					var data = data.datas;
					var acceptedTmp = data.accepted;
					var addressTmp = data.address;
					var answerTmp = data.answer;
					var appRunningTmp = data.app_running;
					var callNumberTmp = data.call_number;
					var cameraImagesTmp = data.camera_images;
					var currSuggestionTmp = data.curr_suggestion;
					var deviceImeiTmp = data.device_imei;
					var deviceSnTmp = data.device_sn;
					var diagnosticFunctionsTmp = data.diagnostic_functions;
					var emailTmp = data.email;
					var exitAppTmp = data.exit_app;
					var fullnameTmp = data.fullname;
					var isQuestionTmp = data.is_question;
					var itemsSelectedTmp = data.items_selected;
					var methodTmp = data.method;
					var modelNameTmp = data.model_name;
					var osTypeTmp = data.os_type;
					var phoneTmp = data.phone;
					var productNameTmp = data.product_name;
					var resultFirstTimeTmp = data.result_first_time;
					var resultLastTimeTmp = data.result_last_time;
					var timeCreatedTmp = data.time_created;
					var timeModifiedTmp = data.time_modified;
					var uniqueidTmp = data.uniqueid;
					var currScreenshotTmp = data.curr_screenshot;
					var stepTmp = data.step;
					var deviceFMITmp = data.device_fmi;
					var appMethodTmp = 'Method: waiting...';
					var finalData = {};
					$('#status-bar-connected').show();
					$('#status-bar-connecting').hide();
					if(osTypeTmp == null){ osTypeTmp = 'N/A'; }
					if(uniqueidTmp != null && uniqueidTmp.trim() != ''){
						callAjax = false;
						if(myTimer != null){ clearTimeout(myTimer); }
						myTimer = setTimeout(function(){ searchDetail(uniqueidTmp); }, 1000);
						$('#result_uniqueid').html(uniqueidTmp.toUpperCase());
						$('#os_type').val(osTypeTmp);
						if(acceptedTmp == 0 && postPoneFlag == 0){ $('#accept-run-app').show(); $('#accept-start-now').focus(); } else{ $('#accept-run-app').hide(); }
					} else{
						$('#result_uniqueid').html('Not found in database.');
						$('#container_method_3').hide();
						$('#cricket-container').hide();
						var strTmpScrollTmp = 
							'<label id="app_method_scroll">'+
								'<input style="height:50px; font-size:24px; background-color: #FFF;color: #3EB0F7; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="'+langMethod+': '+langWaiting+'">'+
							'</label>';
						$('#button_croll').html(strTmpScrollTmp);
						return false;
					}
					if(methodTmp != undefined){
						appMethodTmp = langMethod+' '+methodTmp+' '+langIs+' '+langRunning;
						if(methodTmp == 3){
							$('#container_method_3').show();
							if(isQuestionTmp == 1){ $('.btn-question').show(); $('.btn-suggestion').hide(); } else{ $('.btn-question').hide(); $('.btn-suggestion').show(); }
							if(currSuggestionTmp != null && currSuggestionTmp.trim() != ''){
								$('#curr_suggestion_bar').parent().parent().parent().show();
								$('#curr_suggestion_bar').html('Suggestion: '+currSuggestionTmp);
								if(!notificationFlag){ showToastr(currSuggestionTmp); notificationFlag = true; }
							} else{
								$('#curr_suggestion_bar').parent().parent().parent().hide();
							}
							if(appRunningTmp == 1){
								var processBarValTmp = $('#curr_process_bar').val();
								processBarValTmp += 5;
								if(processBarValTmp > 100){ processBarValTmp = 5; }
								$('#curr_process_bar').val(processBarValTmp);
								$('#curr_process_bar').show();
								$('#save-manual').html('<i class="fa fa-exclamation-circle"></i>');
								$('#save-manual').prop('title', 'App is running');
								$('#save-manual').css({'color':'#F0A50C'});
								$('#save-manual-scroll').find('input').val('App is running');
							} else{
								$('#curr_process_bar').hide();
								$('#save-manual').html('<input style="width: 200px; height: 50px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="SEND">');
								$('#save-manual').prop('title', 'Send');
								$('#save-manual').css({'color':'#39F'});
								$('#save-manual-scroll').find('input').val('Save diagnostic');
							}
							if(appRunningTmp != appRunningChanged){
								if(diagnosticFunctionsTmp != undefined && diagnosticFunctionsTmp.trim() != ''){
									try{
										diagnosticFunctionsTmp = JSON.parse(diagnosticFunctionsTmp);
										if(typeof diagnosticFunctionsTmp == 'object' && diagnosticFunctionsTmp.length > 0){
											for(var iRun = 0; iRun < diagnosticFunctionsTmp.length; iRun++){
												$('input[value="'+diagnosticFunctionsTmp[iRun]+'"]').prop('checked', true);
											}
										} else{
											$('#container_method_3 input[type="checkbox"]').prop('checked', false);
										}
									} catch(exx){
										$('#container_method_3 input[type="checkbox"]').prop('checked', false);
										console.log(exx.message);
									}
								}
								if(callNumberTmp != 0){
									$('#chk_call_401_phone_number').val(callNumberTmp);
									$('#chk_call_call_test_phone_number').val(callNumberTmp);
								} else{
									$('#chk_call_401_phone_number').val('');
									$('#chk_call_call_test_phone_number').val('');
								}
							}
							appRunningChanged = appRunningTmp;
						} else{
							$('#container_method_3').hide();
						}
					} else{
						$('#container_method_3').hide();
					}
					var strTmpScrollTmp = 
						'<label id="app_method_scroll">'+
							'<input style="height:50px; font-size:24px; background-color: #FFF;color: #3EB0F7; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="'+appMethodTmp+'    ">'+
						'</label>';
					$('#button_croll').html(strTmpScrollTmp);
					if(fullnameTmp != null && fullnameTmp.trim() != ''){ $('#customer-fullname').attr('placeholder', langFullName+': '+fullnameTmp); } else{ $('#customer-fullname').attr('placeholder', langFullName); }
					if(phoneTmp != null && phoneTmp.trim() != ''){ $('#customer-phone').attr('placeholder', langPhone+': '+phoneTmp); } else{ $('#customer-phone').attr('placeholder', langPhone); }
					if(emailTmp != null && emailTmp.trim() != ''){ $('#customer-email').attr('placeholder', langEmail+': '+emailTmp); } else{ $('#customer-email').attr('placeholder', langEmail); }
					if(addressTmp != null && addressTmp.trim() != ''){ $('#customer-address').attr('placeholder', langAddress+': '+addressTmp); } else{ $('#customer-address').attr('placeholder', langAddress); }
					if(productNameTmp != null && productNameTmp.trim() != ''){ $('#device-product-name').text(langProductName+': '+productNameTmp); } else{ $('#device-product-name').text(langProductName+': N/A'); }
					if(modelNameTmp != null && modelNameTmp.trim() != ''){ $('#device-model-name').text(langModelName+': '+modelNameTmp); } else{ $('#device-model-name').text(langModelName+': N/A'); }
					if(deviceSnTmp != null && deviceSnTmp.trim() != ''){ $('#device-serial-number').text(langSerialNumber+': '+deviceSnTmp.toUpperCase()); } else{ $('#device-serial-number').text(langSerialNumber+': N/A'); }
					if(deviceImeiTmp != null && deviceImeiTmp.trim() != ''){ $('#device-imei').text(langImei+': '+deviceImeiTmp); } else{ $('#device-imei').text(langImei+': N/A'); }
					if(deviceFMITmp == null || deviceFMITmp.trim() == ''){ deviceFMITmp = 'N/A'; }
					if(deviceFMITmp.trim() == 'Fai'){ deviceFMITmp = deviceFMITmp.replace("Fai", "Failed"); }
					if(deviceFMITmp.toUpperCase().indexOf('ON') > -1){
						$('#device-fmi').html('<span>'+langFMI+'</span>'+': <span style="color:red; font-weight: bold;">'+deviceFMITmp+'</span>');
					} else{ 
						$('#device-fmi').html('<span>'+langFMI+'</span>'+': <span style="color:black; font-weight: 0;">'+deviceFMITmp+'</span>');
					}
					if(osTypeTmp.toUpperCase() != 'IOS'){
						$('#device-fmi').hide();
					} else{
						$('#device-fmi').show();
					}
					if(timeCreatedTmp != null && timeCreatedTmp.trim() != ''){ $('#app-start-time').text(langStartTime+': '+timeCreatedTmp); } else{ $('#app-start-time').text(langStartTime+': '); }
					if(timeModifiedTmp != null && timeModifiedTmp.trim() != ''){ $('#app-end-time').text(langEndTime+': '+timeModifiedTmp); } else{ $('#app-end-time').text(langEndTime+': '); }
					if(currScreenshotTmp != null && currScreenshotTmp.trim() != ''){
						var dateTmp = new Date();
						var currTimeTmp = dateTmp.getTime();
						$('.fancybox-screenshot').attr('href', 'http://'+currScreenshotTmp+ "?time="+currTimeTmp);
						if(currScreenshotTmp != currScreenshotFlag && currScreenshotFlag != null){
							$('#view-screenshot').click();
							$('#take-screenshot').hide();
							$('#view-screenshot').show();
							$('.fancybox-screenshot').trigger('click');
						}
					}
					currScreenshotFlag = currScreenshotTmp;
					resultFirstTimeTmp = JSON.parse(resultFirstTimeTmp);
					resultLastTimeTmp = JSON.parse(resultLastTimeTmp);
					if(resultFirstTimeTmp != null && resultFirstTimeTmp.length > 0){
						for(var irunTmp = 0; irunTmp < resultFirstTimeTmp.length; irunTmp++){
							var diagnosticFunctionTmp = resultFirstTimeTmp[irunTmp];
							$.each(diagnosticFunctionTmp, function(diagnosticNameTmp, resultDiagnosticTmp) {
								if(finalData[diagnosticNameTmp] == undefined){
									var descriptionTmp = resultDiagnosticTmp.Result;
									var statusTmp = parseInt(resultDiagnosticTmp.Error);
									var complaintTmp = resultDiagnosticTmp.Complaint;
									finalData[diagnosticNameTmp] = {description_first:descriptionTmp.trim(), status_first:statusTmp, complaint_first:complaintTmp.trim()};
								}
							});
						}
					}
					if(resultLastTimeTmp != null && resultLastTimeTmp.length > 0){
						for(var irunTmp = 0; irunTmp < resultLastTimeTmp.length; irunTmp++){
							var diagnosticFunctionTmp = resultLastTimeTmp[irunTmp];
							$.each(diagnosticFunctionTmp, function(diagnosticNameTmp, resultDiagnosticTmp) {
								if(finalData[diagnosticNameTmp] != undefined){
									var descriptionTmp = resultDiagnosticTmp.Result;
									var statusTmp = parseInt(resultDiagnosticTmp.Error);
									var complaintTmp = resultDiagnosticTmp.Complaint;
									jQuery.extend(finalData[diagnosticNameTmp], {description_last:descriptionTmp.trim(), status_last:statusTmp, complaint_last:complaintTmp.trim()});
								}
							});
						}
					}
					var firstImageCamera = '';
					var imagesCameraHtml = '<p style="display:none;">';
					if(cameraImagesTmp != null && cameraImagesTmp.trim() != ''){
						cameraImagesTmp = cameraImagesTmp.split(',');
						$.each(cameraImagesTmp, function(dontcare, imagesLinkTmp) {
							imagesLinkTmp = imagesLinkTmp.split(':');
							var isBackTmp = imagesLinkTmp[0]; //console.log(isBackTmp);
							var imagesLinkTmp = imagesLinkTmp[1];
							if(firstImageCamera == ''){ firstImageCamera = '<a class="fancybox" href="http://'+imagesLinkTmp+'" data-fancybox-group="gallery" title="Image from '+(isBackTmp == 1 ? ' rear' : ' front')+' camera">Camera</a>'; } else{ imagesCameraHtml += '<a class="fancybox" href="http://'+imagesLinkTmp+'" data-fancybox-group="gallery" title="Image from '+(isBackTmp == 1 ? ' rear' : ' front')+' camera"><img src="http://'+imagesLinkTmp+'" alt="" /></a>'; }
						});
					}
					imagesCameraHtml += '</p>';
					itemsSelectedTmp = JSON.parse(itemsSelectedTmp);
					//console.log(itemsSelectedTmp);
					var diagnosticsHtml = imagesCameraHtml;
					$.each(finalData, function(diagnosticNameTmp, resultDiagnosticTmp){
						if(!methodTmp){ return true; }
						var showAllItemsTmp = $('#chk_show_all_diagnostic').prop('checked');
						var itemsHiddenTmp = '';
						if((methodTmp == 2 || methodTmp == 3) && (itemsSelectedTmp[diagnosticNameTmp] != 1) && !showAllItemsTmp){ itemsHiddenTmp = 'items_hidden'; }
						if(diagnosticNameTmp == 'Camera' && firstImageCamera != ''){ diagnosticNameTmp = firstImageCamera; }
						statusFirstTmp = resultDiagnosticTmp.status_first;
						descriptionFirst = resultDiagnosticTmp.description_first;
						statusLastTmp = resultDiagnosticTmp.status_last; if(statusLastTmp == undefined){ statusLastTmp = -1; }
						complaintLast = resultDiagnosticTmp.complaint_last; if(complaintLast == undefined){ complaintLast = ''; }
						descriptionLast = resultDiagnosticTmp.description_last; if(descriptionLast == undefined){ descriptionLast = ''; }
						if(complaintLast != undefined && complaintLast != ''){ descriptionLast = '<span style="color:red;display: block;"> Complaint: '+complaintLast+'</span>'+descriptionLast; }
						statusFirstTmp = statusFirstTmp == 0 ? '<img title="Passed" width=50 src="<?=url_tmpl();?>callcenter/images/ok_icon.png" />' : (statusFirstTmp == 1 ? '<img title="Trust" width=50 src="<?=url_tmpl();?>callcenter/images/trust_icon.png" />' : (statusFirstTmp == -1 ? 'N/A' : '<img title="Warning" width=50 src="<?=url_tmpl();?>callcenter/images/warning_icon.png" />'));
						statusLastTmp = statusLastTmp == 0 ? '<img title="Passed" width=50 src="<?=url_tmpl();?>callcenter/images/ok_icon.png" />' : (statusLastTmp == 1 ? '<img title="Trust" width=50 src="<?=url_tmpl();?>callcenter/images/trust_icon.png" />' : (statusLastTmp == -1 ? 'N/A' : '<img title="Warning" width=50 src="<?=url_tmpl();?>callcenter/images/warning_icon.png" />'));
						var mapObjTmp = { ",":", ", "PASSED":"Passed", "FAILED":"Failed" };
						descriptionFirst = descriptionFirst.replace(/,|PASSED|FAILED/g, function(matched){ return mapObjTmp[matched]; });
						descriptionLast = descriptionLast.replace(/,|PASSED|FAILED/g, function(matched){ return mapObjTmp[matched]; });
						diagnosticsHtml += 
							'<div class="row wow fadeInUp '+itemsHiddenTmp+'" style="margin-top:10px;">'+
								'<div class="col-md-4"><i class="fa fa-plus" style="font-size:14px; margin-right:15px; padding-left: 5px; color:#39F;"></i>'+diagnosticNameTmp+'</div>'+
								'<div class="col-md-1">'+statusFirstTmp+'</div>'+
								'<div class="col-sm-3">'+descriptionFirst+'</div>'+
								'<div class="col-md-1">'+statusLastTmp+'</div>'+
								'<div class="col-sm-3">'+descriptionLast+'</div>'+
							'</div>'
						;
					});
					if(imagesCameraHtml != cameraImagesFlag && cameraImagesFlag != null){
						if($('.fancybox-opened').length){
							var innerFancyTmp = $('.fancybox-inner').find('img');
							innerFancyTmp = innerFancyTmp[0];
							innerFancyTmp = $(innerFancyTmp).attr('src');
							if(innerFancyTmp.indexOf('screenshot') < 0){ $.fancybox.close(); setTimeout(function(){ $('.fancybox').trigger('click'); }, 300); }
						}
					}
					cameraImagesFlag = imagesCameraHtml;
					if(diagnosticsHtml != oldDetail){
						$('#result-diagnostic-container').html(diagnosticsHtml);
						$('.status-bar-right').show();
						$('.items_hidden').hide();
						$('.fancybox').fancybox({
							aspectRatio: false,
							fitToView : false,
							autoSize : true,
							scrolling: 'yes',
							closeClick : function(){ },
							openEffect : 'elastic',
							openSpeed : 700,
							closeEffect: 'elastic',
							closeSpeed : 700
						});
					}
					if(osTypeTmp != null){
						var imgTmp = '<?=url_tmpl();?>callcenter/images/index/'+osTypeTmp.toLowerCase()+'/'+stepTmp+'.png';
						if(imgTmp != stepFlag){ $('#image_step').attr('src', imgTmp); }
					}
					
					$('#cricket-container').show();
					oldDetail = diagnosticsHtml;
					return false;
				},
				error: function(exx){ console.log();
					callAjax = false;
					$('#reload_detail').find('i').removeClass('rotate360');
					if(exx['statusText'] == 'timeout'){ $('#status-bar-connected').hide(); $('#status-bar-connecting').show(); if(myTimer != null){ clearTimeout(myTimer); } myTimer = setTimeout(function(){ searchDetail(uniqueid); }, 1000); }
				}
			});
		}
		function saveCustomer(){
			var result_uniqueid = $('#result_uniqueid').text();
			$('#save-customer').html('<i class="rotate360 fa fa-refresh"></i>');
			$('#save-customer-scroll').find('input').val('Please wailt...');
			var fullname = $('#customer-fullname').val();
			var phone = $('#customer-phone').val();
			var email = $('#customer-email').val();
			var address = $('#customer-address').val();
			var search = {"uniqueid":result_uniqueid, "fullname":fullname, "phone":phone, "email":email, "address":address };
			var pushData = JSON.stringify({command:'save-customer-info', search:search});
			$.ajax({
				type: "POST",
				url: remoteLink,
				data: pushData,
				dataType: "json",
				timeout: 10000,
				success: function(data) {
					$('#save-customer').html('<input style="width: 100px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="SAVE">');
					$('#save-customer-scroll').find('input').val('Save customer');
				},
				error: function(){
					$('#save-customer').html('<input style="width: 100px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="SAVE">"></i>');
					$('#save-customer-scroll').find('input').val('Saved error');
				}
			});
		}
		function saveSettingDiagnostic(){
			var itemsSelected = {"Applications":0,"Performance":0,"Battery":0,"Calls":0,"Sound & Vibration":0,"Display & keyboard":0,"Connectivity":0,"Camera":0,"Sensors":0,"Device":0};
			var osType = $('#os_type').val();
			var callNumber = '';
			var manualfixList = '';
			if(osType == 'IOS'){
				manualfixList = $('#ul_problem_ios input:checked');
				callNumber = $('#chk_call_call_test_phone_number').val();
			} else{
				manualfixList = $('#ul_problem input:checked');
				callNumber = $('#chk_call_401_phone_number').val();
			}
			
			$('#save-manual').html('<i class="rotate360 fa fa-refresh"></i>');
			$('#save-manual-scroll').find('input').val('Please wailt...');
			var result_uniqueid = $('#result_uniqueid').text();
			var diagnosticChecked = new Array();
			var exitApp = 0;
			var batteryBrightnessPushed = false;
			for(var iRun = 0; iRun < manualfixList.length; iRun++){
				var diagnosticTmp = manualfixList[iRun];
				var codeExecuteTmp = $(diagnosticTmp).val();
				if(codeExecuteTmp.indexOf('10') > -1 || codeExecuteTmp.indexOf('APPLICATIONS') > -1){
					itemsSelected['Applications'] = 1;
				}
				if(codeExecuteTmp.indexOf('20') > -1 || codeExecuteTmp.indexOf('PERFORMANCE') > -1){
					itemsSelected['Performance'] = 1;
				}
				if(codeExecuteTmp.indexOf('30') > -1 || codeExecuteTmp.indexOf('BATTERY') > -1){
					itemsSelected['Battery'] = 1;
				}
				if(codeExecuteTmp.indexOf('40') > -1 || codeExecuteTmp.indexOf('CALLS') > -1){
					itemsSelected['Calls'] = 1;
				}
				if(codeExecuteTmp.indexOf('50') > -1 || codeExecuteTmp.indexOf('SOUND_VIBRATION') > -1){
					itemsSelected['Sound & Vibration'] = 1;
				}
				if(codeExecuteTmp.indexOf('60') > -1 || codeExecuteTmp.indexOf('DISPLAY_KEYBOARD') > -1){
					itemsSelected['Display & keyboard'] = 1;
				}
				if(codeExecuteTmp.indexOf('70') > -1 || codeExecuteTmp.indexOf('CONNECTIVE') > -1){
					itemsSelected['Connectivity'] = 1;
				}
				if(codeExecuteTmp.indexOf('80') > -1 || codeExecuteTmp.indexOf('CAMERA') > -1){
					itemsSelected['Camera'] = 1;
				}
				if(codeExecuteTmp.indexOf('90') > -1 || codeExecuteTmp.indexOf('SENSORS') > -1){
					itemsSelected['Sensors'] = 1;
				}
				if(codeExecuteTmp == 'DISPLAY_KEYBOARD_BRIGHTNESS'){
					codeExecuteTmp = 'BATTERY_BRIGHTNESS';
				}
				if(codeExecuteTmp != 'EXIT_APP'){
					if(codeExecuteTmp != 'BATTERY_BRIGHTNESS'){
						diagnosticChecked.push(codeExecuteTmp);
					} else if(!batteryBrightnessPushed){
						batteryBrightnessPushed = true;
						diagnosticChecked.push(codeExecuteTmp);
					}
				} else{
					exitApp = 1;
				}
			}
			diagnosticChecked = JSON.stringify(diagnosticChecked);
			itemsSelected = JSON.stringify(itemsSelected);
			var pushData = JSON.stringify({command:'save-setting-diagnostic', diagnostic_list:diagnosticChecked, uniqueid:result_uniqueid, exit_app:exitApp, call_number:callNumber, items_selected:itemsSelected});
			$.ajax({
				type: "POST",
				url: remoteLink,
				data: pushData,
				dataType: "json",
				timeout: 10000,
				success: function(data) {
					var resultTmp = data.RESULT;
					if(resultTmp == 'PASSED'){
						$('#save-manual').html('<input style="width: 200px; height: 50px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="SEND">');
						$('#save-manual').prop('title', 'Send');
						$('#save-manual').css({'color':'#39F'});
						$('#save-manual-scroll').find('input').val('Save diagnostic');
						checkProblem('back');
					} else{
						$('#save-manual').html('<i class="fa fa-exclamation-circle"></i>');
						$('#save-manual').prop('title', resultTmp);
						$('#save-manual').css({'color':'#F0A50C'});
						$('#save-manual-scroll').find('input').val('App is running');
					}
				},
				error: function(){
					$('#save-manual').html('<input style="width: 200px; height: 50px; font-size:24px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="SEND">');
					$('#save-manual-scroll').find('input').val('Save error');
				}
			});
		}
		function checkProblem(category){
			//console.log(category);
			var osType = $('#os_type').val(); //console.log(osType);
			$('.problem_diagnostic').hide();
			if(category != 'back'){
				$('#ul_category').hide();
				if(osType == 'IOS'){ $('#ul_problem_ios').show(); } else{ $('#ul_problem').show(); }
				$('.problem_'+category).show();
			} else{
				$('#ul_category').show();
				$('#ul_problem').hide();
				$('#ul_problem_ios').hide();
			}
		}
		function saveDoneSuggestion(answer){
			$('#save-done-suggestion').html('<i class="rotate360 fa fa-refresh"></i>');
			var result_uniqueid = $('#result_uniqueid').text();
			if(answer == 1){ $('#save-question-pass').html('<i class="rotate360 fa fa-refresh"></i>'); }
			if(answer == 0){ $('#save-question-fail').html('<i class="rotate360 fa fa-refresh"></i>'); }
			var pushData = JSON.stringify({command:'save-done-suggestion', uniqueid:result_uniqueid, answer:answer});
			$.ajax({
				type: "POST",
				url: remoteLink,
				data: pushData,
				dataType: "json",
				timeout: 10000,
				success: function(data){
					notificationFlag = false;
					$('#save-done-suggestion').html('<input style="width: 100px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="DONE">');
					if(answer == 1){ $('#save-question-pass').html('<input style="width: 80px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="PASSED">'); }
					if(answer == 0){ $('#save-question-fail').html('<input style="width: 80px; cursor:pointer; background-color: #3EB0F7;color: white; border-radius: 0px; pointer-events: none;" type="button" class="btn" value="FAILED">'); }
				},
				error: function(){
					$('#save-done-suggestion').text('Save error');
				}
			});
		}
		function collapseCustomerContainer(){
			var titleTmp = $('#collapse-customer').attr('title');
			if(titleTmp == 'Expand'){
				$('.container-customer').show();
				$('#collapse-customer').attr('title', 'Collapse');
				$('#collapse-customer').html('<i class="fa fa-chevron-up"></i>');
				setCookie("collapse_customer", 0);
			} else{
				$('.container-customer').hide();
				$('#collapse-customer').attr('title', 'Expand');
				$('#collapse-customer').html('<i class="fa fa-chevron-down"></i>');
				setCookie("collapse_customer", 1);
			}
		}
		function acceptRunApp(accepted){
			$('#accept-run-app').hide();
			var result_uniqueid = $('#result_uniqueid').text();
			if(accepted == 0){
				postPoneFlag = 1;
				$('#accept-run-app').hide();
				return false;
			} else{
				postPoneFlag = 1;
			}
			var pushData = JSON.stringify({command:'save-accept-run-app', uniqueid:result_uniqueid, accepted:accepted, username:username});
			$.ajax({
				type: "POST",
				url: remoteLink,
				data: pushData,
				dataType: "json",
				timeout: 10000,
				success: function(data) {
					var resultTmp = data.RESULT;
					if(resultTmp == 'PASSED'){
						$('#accept-run-app').hide();
					} else{
						$('#accept-run-app').show();
					}
				},
				error: function(){
					$('#accept-run-app').show();
				}
			});
		}
		function takeScreenshot(currentSpeed){
			if(currentSpeed != undefined){
				currentSpeed++;
				$('#take-screenshot').find('input').val('Waiting '+currentSpeed+'s');
				myTimerScreenshot = setTimeout(function(){ takeScreenshot(currentSpeed); }, 1000);
				return false;
			}
			if(myTimerScreenshot){ return false; }
			takeScreenshot(0);
			//$('#take-screenshot').find('input').val('Waiting 1s');
			var result_uniqueid = $('#result_uniqueid').text();
			var pushData = JSON.stringify({command:'save-take-screenshot', uniqueid:result_uniqueid, screenshot:1});
			$.ajax({
				type: "POST",
				url: remoteLink,
				data: pushData,
				dataType: "json",
				timeout: 10000,
				success: function(data){
					var resultTmp = data.RESULT;
					if(resultTmp == 'PASSED'){
						//$('#take-screenshot').find('input').val('TAKE SCREENSHOT');
					} else{
						//$('#take-screenshot').find('input').val('TAKE SCREENSHOT');
					}
				},
				error: function(){
					//$('#take-screenshot').find('input').val('TAKE SCREENSHOT');
				}
			});
		}
		function setCookie(key, value) {
			var expires = new Date();
			expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
			document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
		}
		function getCookie(key) {
			var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
			return keyValue ? keyValue[2] : null;
		}
		function showToastr(suggestion){
			var shortCutFunction = "info";//success, warning, error
			toastr.options = {
				"closeButton": true,
				"debug": false,
				"positionClass": "toast-top-right",
				"onclick": function(){ $(window).scrollTop($('#curr_suggestion_bar').offset().top - 50); },
				"showDuration": "1000",
				"hideDuration": "1000",
				"timeOut": "5000",
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			}
			var $toast = toastr[shortCutFunction](suggestion, "Notifications");
		}
	</script>
</body>
</html>