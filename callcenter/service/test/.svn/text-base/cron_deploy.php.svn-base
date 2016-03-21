<script>
	var run = 0;
	var timer = 1;
	var child = null;
	var myTimer = null;
	myTimer = setTimeout(function(){ locationLink(); }, 1000);
	function locationLink(){
		console.log('Running...'+run);
		child = window.open('http://tradit-hk.greystonedatatech.com/protocol/hkservices.php/checkSendLogfile', 'Logfile'+run);
		child = window.open('http://tradit-hk.greystonedatatech.com/protocol/hkservices.php/checkSendError', 'CheckError'+run);
		run++;
		myTimer = setTimeout(function(){ locationLink(); }, 10*1000);
		if(timer == 1000){
			//clearTimeout(myTimer);
			//console.log('Stopped');
		}
	}
</script>
