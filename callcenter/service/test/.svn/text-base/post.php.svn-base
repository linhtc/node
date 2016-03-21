<?php //echo strtotime('2015-09-22 04:38:49'); exit;
	#region repair data
	$string = '{"command":"0","machine_sn":"000000087641","machine_sn2":"000000087641"}';
	/* $string = new stdClass();
	$string->key = 'VN@510';
	$string->sql = array(" UPDATE pricit_machine SET last_login = '2015-07-27 10:58:05' WHERE machine_sn = '00000008DBD7' AND delif = 0; ");
	$string = json_encode($string); */
	#end region repair data
	
	#region encode
	$key = 'gdt$E@G@!Espt';
	$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB);
	$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
	$encode = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $string, MCRYPT_MODE_ECB, $iv));
	$request = trim($encode); //echo $request; exit;
	$request = '{"Serial":" ","End_Time":"2015-09-23 08:41:47","Uniqueid":"3BMCXB","Status":"Failed","OsType":"IOS","Modify":"1","Timegenerated":"1442971850","InfoDevice":{"Serial":"","Model":"iPhone7,1","UUID":"e8a7c2100077ce3e98d6e1d1899aa85f","Carier":"VIETTEL","Capacity":"64GB","Jailbreak":"NO","Name":"Greystone’s iPhone","OS":"8.1.2"},"UUID":"e8a7c2100077ce3e98d6e1d1899aa85f","Start_Time":"2015-09-23 08:21:48","Model":"iPhone7,1","Result":[{"Applications":{"Result":"Have 2 app Installed","Error":"Warning","Complaint":""}},{"Performance":{"Result":"RAM: Usage: 84.48%(796MB\/942MB), CPU: Usage: 3.50%","Error":"","Complaint":""}},{"Battery":{"Result":"Level: 100, Design Capacity: 2855, Voltage: 4.34V, Cycle Count: 143, Temperature: 32.40,Brightness: 50.07, Battery Level: 100","Error":"","Complaint":""}},{"Calls":{"Result":"Call: Not tested(Radio Access Failed), Receive: Not tested(Radio Access Failed), Radio: Failed, AirPlane Mode: Is OFF","Error":"Warning","Complaint":""}},{"Sound & Vibration":{"Result":"Volume (50.00): Passed, Silent Mode: YES, Speaker: YES, Vibration: Not tested","Error":"Warning","Complaint":""}},{"Display & keyboard":{"Result":"Brighness: 50.07, LCD: Not tested, Digitizer: Not tested, Button: Not tested","Error":"Warning","Complaint":""}},{"Connectivity":{"Result":"WIFI: Passed, GPS: Passed, Bluetooth: Passed, Radio: Failed, AirPlane Mode: OFF","Error":"Warning","Complaint":""}},{"Camera":{"Result":"Front Camera: Available, Rear Camera: Not available, Flash: Not available, Front Video: Available, Rear Video:Not available","Error":"Warning","Complaint":""}},{"Sensors":{"Result":"Proximity: Available, Motion: Available","Error":"","Complaint":""}},{"Device":{"Result":"UUID: e8a7c2100077ce3e 98d6e1d1899aa85f, Carier: VIETTEL, Capacity: Free: 83.31%(53.32GB\/64GB), OS: 8.1.2, Name: Greystone’s iPhone, Jailbreak: NO","Error":"","Complaint":""}}]}';
	$request = '{"uniqueid":"LINHTC", "timegenerated":'.strtotime('2015-09-22 04:38:49').', "method":3, "command":3}';
	//$request = '{"uniqueid":"LINHTC", "timegenerated":'.strtotime('2015-09-22 04:38:49').', "status":0, "command":4}';
	$request = '{"uniqueid":"999999", "timegenerated":'.strtotime('2015-09-22 04:38:49').', "suggestion":"Home->Setting->Security->Check unknown source.", "command":5}';
	$request = '{"Serial":"90fa964d","Imei":"990004514512312","Model":"SM-G900V","Timegenerated":"1443428956","Uniqueid":"9854E6","UUID":"990004514512312","Modify":"0","Status":"","end_time":"2015-09-28 15:25:05","start_time":"2015-09-28 15:25:00","OsType":"Android","Result":[{"Applications":{"Result":"- Black list: 0<br>- CPU usage: 0<br>- Ram usage: Clean Master,Messenger,Zalo,CM Security,Facebook,WiFi Master Key<br>- Permission Warning: 0<br>- Installed without Play Store: 0<br>- Running Apps: Clean Master,Messenger,Zalo,CM Security,Facebook,WiFi Master Key<br>","Error":"35","Complaint":""}},{"Performance":{"Result":"RAM Usage: 67% (1.13GB\/1.66GB)<br>Storage Usage: 73% (7.70GB\/10.52GB)<br>CPU Usage: 2%<br>","Error":"01","Complaint":""}},{"Battery":{"Result":"Brightness: 164\/255<br>Battery Level: 50\/100<br>Battery Temperature: 33.4°C<br>GPS Location: On<br>Bluetooth Discovery: Off<br>Running Apps: 6 apps<br>","Error":"3","Complaint":""}},{"Calls":{"Result":"Airplane Mode: Off<br>Service state: in service<br>Incoming Calls: 0 s<br>Outgoing Calls: 111 s<br>Missed Calls: 0 time<br>","Error":"","Complaint":""}},{"Sound & Vibration":{"Result":"Silent mode: Off<br>Ringtone: At First Sight<br>Alarm: 11\/15<br>Touch tones: 15\/15<br>Media: 15\/15<br>Notification: 15\/15<br>Incoming calls: 15\/15<br>Voice: 7\/7<br>System: 15\/15<br>Speakers: Off<br>Vibration: On<br>","Error":"29","Complaint":""}},{"Display & keyboard":{"Result":"Brightness: 164\/255<br>Screen Timeout: 2 minutes<br>Power Button : Not tested<br>Home Button : Not tested<br>Volume Down Button: Not tested<br>Volume Up Button: Not tested<br>","Error":"","Complaint":""}},{"Connectivity":{"Result":"Airplane Mode: Off<br>Wi-Fi: On<br>Bluetooth: Off<br>Mobile Data(3G\/4G): in service<br>Location: On<br>NFC: Off<br>","Error":"","Complaint":""}},{"Camera":{"Result":"Front Camera: Available<br>Rear Camera: Available<br>Video Record: Not tested<br>Flash: Not tested<br>","Error":"","Complaint":""}},{"Sensors":{"Result":"Accelerometer: Available<br>Gyroscope: Available<br>Compass: Available<br>Proximity: Available<br>Light: Available<br>","Error":"","Complaint":""}},{"Device":{"Result":"Manufacturer: SAMSUNG<br>Phone Model: SM-G900V<br>Serial Number: 90fa964d<br>IMEI\/MEID: 990004514512312<br>OS Version: 5.0<br>Carrier: VZW<br>Capacity: 16 GB<br>Baseband: G900VVRU1BOD5<br>Rooted: NO<br>Reactivation Lock: NO<br>SIM Available: YES<br>Phone Number: +841674018163<br>Network Operator: Verizon<br>","Error":"","Complaint":""}}]}';
	$request = '{"uniqueid":"999999", "timegenerated":1442971850, "suggestion":"Home->Setting->Security->Check unknown source.", "is_question":1, "command":5}';
	#end region encode
	
	#region post data
	$url = 'http://cloud16.greystonedatatech.com/remote-diagnostic-test/protocol.php';
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
	curl_setopt($ch, CURLOPT_POST, 1);
	//curl_setopt($ch, CURLOPT_USERPWD, "huynguyen:n@rtYuh");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
	$result = curl_exec($ch);
	curl_close($ch);
	//echo "Result: ";
	print_r($result); //exit;
	#end region post data
	
	#region decode result
	//$key = 'uY7Gm3EPID8y3cHeJQtZyUS5xKHlVZSu';
	$decrypt = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, base64_decode($result), MCRYPT_MODE_ECB);
	$json = trim($decrypt);
	$resultSet = json_decode($json, true);
	
	//echo '<hr /> Decode: ';
	
	
	print_r($resultSet); exit;
	#end region decode result
?>