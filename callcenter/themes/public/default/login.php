<!DOCTYPE html>
<!-- 
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.2
Version: 3.7.0
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
<meta charset="utf-8"/>
<title>Call Center | Login</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<meta content="" name="description"/>
<meta content="" name="author"/>
<!-- BEGIN GLOBAL MANDATORY STYLES -->
<link href="<?=url_tmpl();?>callcenter/css/css-google-login.css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css"/>
<link href="<?=url_tmpl();?>callcenter/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
<link href="<?=url_tmpl();?>callcenter/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
<link href="<?=url_tmpl();?>callcenter/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="<?=url_tmpl();?>callcenter/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
<!-- END GLOBAL MANDATORY STYLES -->
<!-- BEGIN PAGE LEVEL STYLES -->
<link href="<?=url_tmpl();?>callcenter/plugins/select2/select2.css" rel="stylesheet" type="text/css"/>
<link href="<?=url_tmpl();?>callcenter/css/login3.css" rel="stylesheet" type="text/css"/>
<!-- END PAGE LEVEL SCRIPTS -->
<!-- BEGIN THEME STYLES -->
<link href="<?=url_tmpl();?>callcenter/css/components-rounded.css" id="style_components" rel="stylesheet" type="text/css"/>
<link href="<?=url_tmpl();?>callcenter/css/plugins.css" rel="stylesheet" type="text/css"/>
<link href="<?=url_tmpl();?>callcenter/layout/css/layout.css" rel="stylesheet" type="text/css"/>
<link href="<?=url_tmpl();?>callcenter/layout/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color"/>
<link href="<?=url_tmpl();?>callcenter/layout/css/custom.css" rel="stylesheet" type="text/css"/>
<!-- END THEME STYLES -->
<link rel="shortcut icon" href="favicon.ico"/>
<style>
.overlay{
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	width: 100%;
	height: 100%;
	display: block;
}
.login{
	background-image: url("<?=url_tmpl();?>callcenter/images/bg.jpg");
	background-attachment: fixed;
	background-size: 100% 100%;
	background-position: 50% -235.68px;
	width: 100%;
	min-height: 100%;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}
</style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="login">
<div class="overlay">
	<!-- BEGIN LOGO -->
	<div class="logo" style="margin-bottom: 20px;">
		<b style="color:#FFF; font-size:24px; font-family: 'Tahoma', Times, serif;font-weight: 100;">CALL</b>
		<b style="color:#D11D43; font-size:24px; font-family: 'Tahoma', Times, serif;font-weight: 100;">CENTER</b>
	</div>
	<!-- END LOGO -->
	<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
	<div class="menu-toggler sidebar-toggler">
	</div>
	<!-- END SIDEBAR TOGGLER BUTTON -->
	<!-- BEGIN LOGIN -->
	<div class="content">
		<!-- BEGIN LOGIN FORM -->
		<form class="login-form" action="#" method="post">
			<h3 class="form-title">Login to your account</h3>
			<div id="login-status" class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				<span>
				Enter any username and password. </span>
			</div>
			<div class="form-group">
				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
				<label class="control-label visible-ie8 visible-ie9">Username</label>
				<div class="input-icon">
					<i class="fa fa-user"></i>
					<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Username" name="username"/>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">Password</label>
				<div class="input-icon">
					<i class="fa fa-lock"></i>
					<input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" name="password"/>
				</div>
			</div>
			<div class="form-actions">
				<label class="checkbox">
				<input type="checkbox" name="remember" value="1"/> Remember me </label>
				<button type="submit" class="btn green-haze pull-right">
				Login <i class="m-icon-swapright" style="background-image: url('<?=url_tmpl();?>callcenter/images/syncfusion-icons-white.png');"></i>
				</button>
			</div>
			<div class="progress" style="display:none; background: none; height:2px; padding: 0px !important; margin-left:-30px; margin-right: -30px; margin-top: -2px;">
				<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%">
					<span class="sr-only">0% Complete</span>
				</div>
			</div>
			<div class="forget-password">
				
				<h4>Forgot your password ?</h4>
				<p>
					Click <a href="javascript:;" id="forget-password"> here</a>
					to create your new password now.
				</p>
			</div>
		</form>
		<!-- END LOGIN FORM -->
	</div>
	<!-- END LOGIN -->
	<!-- BEGIN COPYRIGHT -->
	<div class="copyright">
		 2015 Copyright &copy; GDT Inc. ALL Rights Reserved.
	</div>
</div>
<!-- END COPYRIGHT -->
<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="<?=url_tmpl();?>callcenter/plugins/respond.min.js"></script>
<script src="<?=url_tmpl();?>callcenter/plugins/excanvas.min.js"></script> 
<![endif]-->
<script src="<?=url_tmpl();?>callcenter/plugins/jquery.min.js" type="text/javascript"></script>
<script src="<?=url_tmpl();?>callcenter/plugins/jquery-migrate.min.js" type="text/javascript"></script>
<script src="<?=url_tmpl();?>callcenter/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="<?=url_tmpl();?>callcenter/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="<?=url_tmpl();?>callcenter/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script src="<?=url_tmpl();?>callcenter/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
<!-- END PAGE LEVEL PLUGINS -->

<script src="<?=url_tmpl();?>callcenter/js/metronic.js" type="text/javascript"></script>
<script src="<?=url_tmpl();?>callcenter/layout/scripts/layout.js" type="text/javascript"></script>
<script>
	var remoteLink = 'authorize/confirmlogin'; // remote link in controller
	var myTimer = null;
	var progressTmp = 0;
	$('.login-form').validate({
		errorElement: 'span', //default input error message container
		errorClass: 'help-block', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		rules: { username: { required: true }, password: { required: true }, remember: { required: false } },
		messages: { username: { required: "Username is required." }, password: { required: "Password is required." } },
		invalidHandler: function(event, validator) { $('.alert-danger').find('span').html('Enter any username and password.'); $('.alert-danger', $('.login-form')).show(); },
		highlight: function(element) { $(element).closest('.form-group').addClass('has-error');  },
		success: function(label) { label.closest('.form-group').removeClass('has-error'); label.remove(); },
		errorPlacement: function(error, element) { error.insertAfter(element.closest('.input-icon')); },
		submitHandler: function(form) { 
			if(myTimer != null){ clearTimeout(myTimer); }
			$('.progress').show();
			progressTmp = getRandomInt(0, 10);
			progressLoginBar();
			ajaxConfirmLogin(); return false; 
		}
	});
	$('.login-form input').keypress(function(e) { 
		if (e.which == 13) { 
		if ($('.login-form').validate().form()) { 
			if(myTimer != null){ clearTimeout(myTimer); }
			$('.progress').show();
			progressTmp = getRandomInt(0, 10);
			progressLoginBar();
			ajaxConfirmLogin(); } return false; 
		} 
	});
	function ajaxConfirmLogin(){
		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();
		var pushData = JSON.stringify({command:'confirm-login', username:username, password:password});
		$.ajax({
			type: "POST",
			url: remoteLink,
			data: pushData,
			dataType: "json",
			timeout: 10000,
			success: function(data) {
				var approval = data.RESULT;
				//document.cookie="approval="+approval+";expires=Fri, 31 Dec 9999 23:59:59 GMT";
				document.cookie="approval="+approval;
				if(approval){
					window.location = '<?php echo base_url(); ?>';
				} else{
					$('#login-status').find('span').html('Username or password incorrect.'); //adding file
					$('#login-status', $('.login-form')).show();
				}
				if(myTimer != null){ clearTimeout(myTimer); }
				$('.progress').hide();
				return false;
			},
			error: function(){
				$('#login-status').find('span').html('Lost connection. Trying to reconnect...'); //adding file
				$('#login-status', $('.login-form')).show();
				//if(myTimer != null){ clearTimeout(myTimer); }
				setTimeout(function(){ ajaxConfirmLogin(); }, 10000);
			}
		});
	}
	function progressLoginBar(){
		if(myTimer != null){ clearTimeout(myTimer); }
		progressTmp += 1;
		if(progressTmp <= 99){ 
			//console.log(progressTmp);
			$('.progress .progress-bar').css('width', progressTmp+'%'); 
		}
		myTimer = setTimeout(function(){ progressLoginBar(); }, 100);
	}
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	$("input[name='username']").focus(); // adding file
</script>
<script>
jQuery(document).ready(function() {     
  Metronic.init(); // init metronic core components
  //Layout.init(); // init current layout
  //Login.init();
  //Demo.init();
});
</script>
<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>