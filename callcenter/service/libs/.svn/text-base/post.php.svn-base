<?php
class Post {
	public function curlPostRequest($requestList){
		$serverList = json_decode(PUSHING_SERVER);
		if(!PUSHING_ALLOWED || !count($requestList) || !count((array)$serverList)){
			return false;
		}
		$serverRequest = new stdClass();
		$serverRequest->COMMAND = 'execute-query';
		$serverRequest->REQUEST_LIST = $requestList;
		$serverRequest = json_encode($serverRequest);
		if(ED_KEY){
			$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB);
			$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
			$serverRequest = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, ED_KEY, $serverRequest, MCRYPT_MODE_ECB, $iv));
		}
		foreach($serverList as $serverLink=>$serverEnabled){
			if($serverEnabled){
				$serverLink = $serverLink.'/service.php';
				$ch = curl_init($serverLink);
				curl_setopt($ch, CURLOPT_URL, $serverLink);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $serverRequest);
				curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
				curl_setopt($ch, CURLOPT_TIMEOUT, 30);
				$serverResponse = curl_exec($ch);
				$curlInfo = curl_getinfo($ch);
				curl_close($ch);
				if($curlInfo['http_code'] == 200){
					if(ED_KEY){
						$serverResponse = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, ED_KEY, base64_decode($serverResponse), MCRYPT_MODE_ECB);
					}
					$serverResponse = json_decode($serverResponse);
				} else{
					//
				}
			}
		}
	}
}

?>