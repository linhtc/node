<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(-1);
date_default_timezone_set ( 'UTC' );
$dirName = dirname(__FILE__);
include_once($dirName . '/includes/init.php');
include_once($dirName . '/define/define.php');
include_once($dirName . '/libs/service.lib.php');
$adapter = new ServiceLibDbAccess();

// client request
$clientRequest = @file_get_contents('php://input');

// write log
// $handle = fopen('download/log/service/'.(date('y_m_d__H_i_s')).'.txt', 'w+');
// fwrite($handle, $clientRequest);
// fclose($handle);

$command = '';
if(isset($_GET['command'])){
	$command = $_GET['command'];
} else{
	// decrypt request
	if(ED_KEY){ $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB); $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND); $clientRequest = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, ED_KEY, base64_decode($clientRequest), MCRYPT_MODE_ECB); $clientRequest = trim($clientRequest); }
	$clientRequest = json_decode($clientRequest);
	$clientRequest = (object)array_change_key_case((array)$clientRequest, CASE_UPPER);
	$command = isset($clientRequest->COMMAND) ? $clientRequest->COMMAND : '';
}
$now = date('y-m-d H:i:s');
$serverResponse = new stdClass();
switch($command){
	case 'execute-query':{ #region execute code
		$requestList = isset($clientRequest->REQUEST_LIST) ? $clientRequest->REQUEST_LIST : '';
		if(count($requestList)){
			foreach($requestList as $queryString){
				$adapter->executeQuery($queryString);
			}
			$serverResponse->MESSAGE = 'PASSED';
		}
		break;
	} #end region execute code
	case 'save-customer-info':{ #region save customer info
		$clientRequest = isset($clientRequest->SEARCH) ? $clientRequest->SEARCH : null;
		$clientRequest = (object)array_change_key_case((array)$clientRequest, CASE_UPPER); //print_r($data);
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : 'N/A';
		$fullname = isset($clientRequest->FULLNAME) ? $clientRequest->FULLNAME : 'N/A';
		$phone = isset($clientRequest->PHONE) ? $clientRequest->PHONE : 'N/A';
		$email = isset($clientRequest->EMAIL) ? $clientRequest->EMAIL : 'N/A';
		$address = isset($clientRequest->ADDRESS) ? $clientRequest->ADDRESS : 'N/A';
		$serverResponse->RESULT = $adapter->saveCustomerDetail($uniqueid, $fullname, $phone, $email, $address);
		break;
	} #end region save customer info
	case 'save-setting-diagnostic':{ #region save setting diagnostic
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : '';
		$exitApp = isset($clientRequest->EXIT_APP) ? $clientRequest->EXIT_APP : 0;
		$callNumber = isset($clientRequest->CALL_NUMBER) ? $clientRequest->CALL_NUMBER : 0;
		$diagnosticList = isset($clientRequest->DIAGNOSTIC_LIST) ? $clientRequest->DIAGNOSTIC_LIST : '';
		$itemSelected = isset($clientRequest->ITEMS_SELECTED) ? $clientRequest->ITEMS_SELECTED : '{}';
		$serverResponse->RESULT = $adapter->saveSettingDiagnostic($uniqueid, $diagnosticList, $exitApp, $callNumber, $itemSelected);
		break;
	} #end region save done suggestion
	case 'save-done-suggestion':{ #region save setting diagnostic
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : '';
		$answer = isset($clientRequest->ANSWER) ? $clientRequest->ANSWER : '';
		$serverResponse->RESULT = $adapter->saveDoneSuggestion($uniqueid, $answer);
		break;
	} #end region save done suggestion
	case 'get-report':{ #region get report
		$search = isset($clientRequest->SEARCH) ? $clientRequest->SEARCH : '';
		$serverResponse->datas = $adapter->getDetailLogFile($search);
		break;
	} #end region get report
	case 'get-like-uniqueid':{ #region get like uniqueid
		$uniqueidPattern = isset($clientRequest->UNIQUEID_PATTERN) ? $clientRequest->UNIQUEID_PATTERN : (isset($_GET['uniqueid_pattern']) ? $_GET['uniqueid_pattern'] : '');
		$serverResponse->datas = $adapter->getLikeUniqueid($uniqueidPattern);
		break;
	} #end region get like uniqueid
	case 'save-accept-run-app':{ #region save setting diagnostic
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : '';
		$accepted = isset($clientRequest->ACCEPTED) ? $clientRequest->ACCEPTED : '';
		$username = isset($clientRequest->USERNAME) ? $clientRequest->USERNAME : '';
		$serverResponse->RESULT = $adapter->saveAcceptRunApp($uniqueid, $accepted, $username);
		break;
	} #end region save done suggestion
	case 'backup-images-to-store':{ #region backup images to store
		$securityKey = isset($clientRequest->SECURITY_KEY) ? $clientRequest->SECURITY_KEY : (isset($_GET['security_key']) ? $_GET['security_key'] : '');
		if($securityKey == SECURITY_KEY){ // in define/define.php
			$datePoint = strtotime("+0 days", time());
			$threeDatePoint = 60*60*24*3; // 3 days via second
			$files = glob('download/images/*'); // get all file names
			if(count($files)){
				$queryTmp = '';
				foreach($files as $file){ // iterate files
					if(is_file($file)){
						$dateTmp = filemtime($file);
						if(($datePoint - $dateTmp) > $threeDatePoint){
							//$fileTmp = mysql_real_escape_string(json_encode((gzcompress(base64_encode(file_get_contents($file)), 9))));
							$fileTmp = base64_encode(file_get_contents($file));
							unlink($file);
							$queryTmp .= ($queryTmp == '' ? '' : ',')."(COMPRESS('".$fileTmp."'), '".$file."')";
							if(!empty($queryTmp)){
								$queryTmp = 'INSERT INTO remote_diagnostic_images_store(`image_data`, `image_name`) VALUES'.$queryTmp;
								$resultTmp = $adapter->executeQuery($queryTmp);
								$queryTmp = ''; 
							}
						}
					}
				}
				$serverResponse->MESSAGE = 'PASSED';
			} else{
				$serverResponse->MESSAGE = 'NO IMAGES';
			}
		} else{
			$serverResponse->MESSAGE = 'ERROR SECURITY KEY';
		}
		break;
	} #end region backup images to store
	case 'confirm-login':{ #region save setting diagnostic
		$username = isset($clientRequest->USERNAME) ? $clientRequest->USERNAME : '';
		$password = isset($clientRequest->PASSWORD) ? $clientRequest->PASSWORD : '';
		if(empty($username) || empty($password)){
			$serverResponse->RESULT = 0;
		} else{
			$serverResponse->RESULT = $adapter->confirmLogin($username, $password);
		}
		break;
	} #end region save done suggestion
	case 'create-user-login':{ #region create user login
		$username = isset($clientRequest->USERNAME) ? $clientRequest->USERNAME : (isset($_GET['username']) ? $_GET['username'] : '');
		$password = isset($clientRequest->PASSWORD) ? $clientRequest->PASSWORD : (isset($_GET['password']) ? $_GET['password'] : '');
		$securityKey = isset($clientRequest->SECURITY_KEY) ? $clientRequest->SECURITY_KEY : (isset($_GET['security_key']) ? $_GET['security_key'] : '');
		if($securityKey == SECURITY_KEY){ // in define/define.php
			$serverResponse->RESULT = $adapter->createUserLogin($username, $password);
		} else{
			$serverResponse->RESULT = 'ERROR SECURITY KEY';
		}
		break;
	} #end region create user login
	case 'save-take-screenshot':{ #region save take screenshot
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : '';
		$screenshot = isset($clientRequest->SCREENSHOT) ? $clientRequest->SCREENSHOT : '';
		$serverResponse->RESULT = $adapter->saveTakeScreenshot($uniqueid, $screenshot);
		break;
	} #end region save take screenshot
	case 'dropdown-operator':{ #region dropdown operator list
		$resultList = $adapter->dropdownOperatorList();
		$serverResponse->LIST = $resultList;
		break;
	} #end region dropdown operator list
	case 'report-paging':{ #region report paging
		$search = isset($clientRequest->SEARCH) ? $clientRequest->SEARCH : '';
		$resultList = $adapter->reportPaging($search);
		$serverResponse->TOTAL = $resultList;
		break;
	} #end region report paging
	case 'report-list':{ #region report list
		$search = isset($clientRequest->SEARCH) ? $clientRequest->SEARCH : '';
		$page = isset($clientRequest->PAGE) ? $clientRequest->PAGE : '';
		$rows = isset($clientRequest->ROWS) ? $clientRequest->ROWS : '';
		$resultList = $adapter->reportList($search, $page, $rows);
		$serverResponse->LIST = $resultList;
		break;
	} #end region report list
	default:{ #region default
		$serverResponse->MESSAGE = 'ERROR COMMAND';
	} #end region default
}
// server response
$serverResponse = json_encode($serverResponse);
if(ED_KEY){ $serverResponse = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, ED_KEY, $serverResponse, MCRYPT_MODE_ECB, $iv)); }
echo $serverResponse; exit;
echo gzdeflate($serverResponse, 9); exit;
echo base64_encode(gzencode($serverResponse, 9)); exit;