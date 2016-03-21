<div style="width:100%;">
<div id="select" style="width:100%; float:left;">
	<div style="width:100%; font-weight:600; color:#4c7c01; margin-top:5%;">
		Please tap the below button for your device to <span id="type">download</span> the app
	</div>
</div>
<div style="width:100%; float:left; margin-top:5%;">
	<div style="width:100%;">
		<table border="0">
			<tr><td colspan="2" align="center;">Site Test</td></tr>
			<tr>
				<td id="ios">
					<div class="txtbutton_bgx" style="text-align:center;  width:410px;">
						<a onclick="checkMobile();" id="installapp" class="installapp btn btn-info btn-lg sends"
						href="itms-services://?action=download-manifest&url=https://284dc91a183e8c1e0778-417834571095dbe4fb0ff459877f6b57.ssl.cf1.rackcdn.com/iOS/RemoteDiagnostic/RemoteDiagnostic126C.plist">
							<div style="font-size:24px; font-weight:100; color:#639751;text-shadow:none">Install iTest app version 1.2.6C for</div>
							<div class="send">iOS</div>
						</a>
		
					</div>
				</td>
				<td id="android">
					<div  class="txtbutton_bgx" style="text-align:center;  margin-left:20px; width:410px;">
						<a title="appitest" type="application/vnd.android.package-archive" id="installapk" class="installapp btn btn-info btn-lg sends"
						href="http://tradit-hk.greystonedatatech.com/remotediag/files/app/RemoteDiagnostic1112_beta.apk">
							<div style="font-size:24px; font-weight:100; color:#639751;text-shadow:none">Download iTest app version 1.1.12 for</div>
							<div class="send">Android</div>
						</a>
					</div>
				</td>
				
			</tr>
		</table>
	</div>
</div>
</div>
<script type="text/javascript">
	$(function(){
		var android = navigator.userAgent.match(/android/i);
		var ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);
		var opera = navigator.userAgent.match(/Opera Mini/i);
		var windows = navigator.userAgent.match(/IEMobile/i); 
		var blackBerry =  navigator.userAgent.match(/BlackBerry/i); 
		
		$("#android").hide();
		$("#ios").hide();
		//$("#select").hide();
		if(android != null){
			$("#android").show();
			$("#ios").hide();
			$("#type").html("download");
		}
		else if(ios != null){
			$("#ios").show();
			$("#android").hide();
			$("#type").html("install");
		}
		/*else if(opera != null){
			
		}
		else if(windows != null){
			
		}
		else if(blackBerry != null){
			
		}*/
		else if(ios == null && android == null){
			$("#android").show();
			$("#ios").show();
			//$("#select").show();			
		}
	});
</script>
<style type="text/css">
	table td.tdaright {
		text-align: right;
		padding-right:6px;
	}
</style>	