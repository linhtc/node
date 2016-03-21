<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(-1);
date_default_timezone_set ( 'UTC' );
$dirName = dirname(__FILE__);
include_once($dirName . '/includes/init.php');
include_once($dirName . '/define/define.php');
include_once($dirName . '/libs/protocol.lib.php');
$adapter = new ProtocolLibDbAccess();

// folder to download
$syncImagesCamera = PROTOCOL_PATH.'/download/images/';

// client request
$clientRequest = @file_get_contents('php://input');

// write log
// $handle = fopen('download/log/protocol/'.(date('y_m_d__H_i_s')).'.txt', 'w+');
// fwrite($handle, $clientRequest);
// fclose($handle);

$command = 0;
if(isset($_GET['command'])){
	$command = $_GET['command'];
} else{
	// decrypt request
	if(ED_KEY){ $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB); $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND); $clientRequest = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, ED_KEY, base64_decode($clientRequest), MCRYPT_MODE_ECB); $clientRequest = trim($clientRequest); }
	$clientRequest = json_decode($clientRequest);
	$clientRequest = (object)array_change_key_case((array)$clientRequest, CASE_UPPER);
	$command = isset($clientRequest->COMMAND) ? $clientRequest->COMMAND : 0;
}
$now = date('y-m-d H:i:s');
$serverResponse = new stdClass();
switch ($command) {
	case 0:{ #region save logfile
		$sync___uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : 'N/A';
		//$sync___time_app_get_unique = isset($clientRequest->TIMEGENERATED) ? date('Y-m-d H:i:s', strtotime($clientRequest->TIMEGENERATED)) : date('Y-m-d H:i:s');
		$sync___time_app_get_unique = isset($clientRequest->TIMEGENERATED) ? date('Y-m-d H:i:s', $clientRequest->TIMEGENERATED) : date('Y-m-d H:i:s');
		$sync___device_uuid = isset($clientRequest->UUID) ? $clientRequest->UUID : 'N/A';
		$sync___device_sn = isset($clientRequest->SERIAL) ? $clientRequest->SERIAL : 'N/A';
		$sync___device_imei = isset($clientRequest->IMEI) ? $clientRequest->IMEI : 'N/A';
		$sync___device_fmi = isset($clientRequest->FMI) ? $clientRequest->FMI : 'OFF';
		$sync___model_name = isset($clientRequest->MODEL) ? $clientRequest->MODEL : 'N/A';
		$model_device = isset($clientRequest->MODELDEVICE) ? $clientRequest->MODELDEVICE : '';
		$sync___result = isset($clientRequest->STATUS) ? $clientRequest->STATUS : 'N/A';
		$sync___phone_info = isset($clientRequest->INFODEVICE) ? $clientRequest->INFODEVICE : 'N/A';
		$sync___result_first_time = $sync___result_last_time = isset($clientRequest->RESULT) ? $clientRequest->RESULT : 'N/A';
		$sync___time_received = isset($clientRequest->LOCALTIME) ? date('Y-m-d H:i:s', strtotime($clientRequest->LOCALTIME)) : date('Y-m-d H:i:s');
		$sync___time_created = isset($clientRequest->START_TIME) ? date('Y-m-d H:i:s', strtotime($clientRequest->START_TIME)) : date('Y-m-d H:i:s');
		$sync___time_modified = isset($clientRequest->END_TIME) ? date('Y-m-d H:i:s', strtotime($clientRequest->END_TIME)) : date('Y-m-d H:i:s');
		$sync___os_type = isset($clientRequest->OSTYPE) ? $clientRequest->OSTYPE : 'N/A';
		$modify = isset($clientRequest->MODIFY) ? (int)$clientRequest->MODIFY : 0;
		
		if(!empty($model_device)){ $sync___model_name = $model_device; }
		
		$arrAllVar = get_defined_vars(); 
		$finalData = new stdClass();
		$finalData->product_name = "
			(
				SELECT m.modelname
				FROM remote_diagnostic_model m
				WHERE m.model = \"".$sync___model_name."\"
				LIMIT 1
			)
		";
		foreach($arrAllVar as $nameVar=>$valVar){
			if(!is_object($valVar) && !is_array($valVar)){
				if (strpos($nameVar, 'sync___') !== FALSE){
					$nameVar = str_replace('sync___', '', $nameVar);
					if($nameVar == 'model_name'){
						if(!empty($model_device)){
							$finalData->$nameVar = addslashes($model_device);
						} else{
							$finalData->$nameVar = addslashes($valVar);
						}
					} else{
						$finalData->$nameVar = addslashes($valVar);
					}
				}
			} else{
				if (strpos($nameVar, 'sync___') !== FALSE){
					$nameVar = str_replace('sync___', '', $nameVar);
					//print_r(json_encode($valVar, JSON_UNESCAPED_UNICODE));
					//$finalData->$nameVar = json_encode($valVar);
					$finalData->$nameVar = addslashes(json_encode($valVar, JSON_UNESCAPED_UNICODE));
				}
			}
		}
		if($sync___uniqueid != 'N/A'){
			$serverResponse->RESULT = $adapter->saveLogfile($finalData, $modify);
		} else{
			$serverResponse->RESULT = 'Locator ID is wrong';
		}
		break;
	} #end region save logfile
	case 1:{ #region get unique id
		$uuid = isset($_GET['key']) ? $_GET['key'] : null;
		$uniqueid = ''; $message = 'PASSED'; $time_generated = '';
		if(empty($uuid)){
			$message = 'FAILED';
		} else{
			$result = $adapter->generateUniqueID($uuid);
			$uniqueid = isset($result['uniqueid']) ? $result['uniqueid'] : '';
			$time_generated = isset($result['time_generated']) ? $result['time_generated'] : '';
		}
		$serverResponse->UNIQUEID = $uniqueid;
		$serverResponse->TIMEGENERATED = $time_generated;
		$serverResponse->RESULT = $message;
		break;
	} #end region get unique id
	case 2:{ #region get diagnostic setting
		$uniqueid = isset($_GET['key']) ? $_GET['key'] : '';
		$timeAppGetUnique = isset($_GET['timegenerated']) ? date('Y-m-d H:i:s', $_GET['timegenerated']) : '';
		$diagnosticList = array();
		$diagnosticList = $adapter->getSettingDiagnostic($uniqueid, $timeAppGetUnique);
		$serverResponse->DIAGNOSTIC_LIST = isset($diagnosticList['diagnostic_functions']) ? json_decode($diagnosticList['diagnostic_functions']) : array();
		$serverResponse->EXIT_APP = isset($diagnosticList['exit_app']) ? $diagnosticList['exit_app'] : 0;
		$serverResponse->CALL_NUMBER = isset($diagnosticList['call_number']) ? $diagnosticList['call_number'] : 0;
		break;
	} #end region get diagnostic setting
	case 3:{ #region save method running app and items selected
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : 'N/A';
		$timeAppGetUnique = isset($clientRequest->TIMEGENERATED) ? date('Y-m-d H:i:s', $clientRequest->TIMEGENERATED) : date('Y-m-d H:i:s');
		$method = isset($clientRequest->METHOD) ? $clientRequest->METHOD : 1;
		$itemSelected = isset($clientRequest->ITEMS_SELECTED) ? json_encode($clientRequest->ITEMS_SELECTED) : '{}';
		$serverResponse->RESULT = $adapter->saveMethodRunningApp($uniqueid, $timeAppGetUnique, $method, $itemSelected);
		break;
	} #end region save method running app and items selected
	case 4:{ #region save status running app
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : 'N/A';
		$timeAppGetUnique = isset($clientRequest->TIMEGENERATED) ? date('Y-m-d H:i:s', $clientRequest->TIMEGENERATED) : date('Y-m-d H:i:s');
		$status = isset($clientRequest->STATUS) ? $clientRequest->STATUS : 0;
		$serverResponse->RESULT = $adapter->saveStatusRunningApp($uniqueid, $timeAppGetUnique, $status);
		break;
	} #end region save status running app
	case 5:{ #region save suggestion
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : 'N/A';
		$timeAppGetUnique = isset($clientRequest->TIMEGENERATED) ? date('Y-m-d H:i:s', $clientRequest->TIMEGENERATED) : date('Y-m-d H:i:s');
		$suggestion = isset($clientRequest->SUGGESTION) ? $clientRequest->SUGGESTION : '';
		$isQuestion = isset($clientRequest->IS_QUESTION) ? $clientRequest->IS_QUESTION : 0;
		$serverResponse->RESULT = $adapter->saveSuggestion($uniqueid, $timeAppGetUnique, $suggestion, $isQuestion);
		break;
	} #end region save suggestion
	case 6:{ #region get status suggestion
		$uniqueid = isset($_GET['key']) ? $_GET['key'] : '';
		$timeAppGetUnique = isset($_GET['timegenerated']) ? date('Y-m-d H:i:s', $_GET['timegenerated']) : '';
		$statusDescription = $adapter->getStatusSuggestion($uniqueid, $timeAppGetUnique);
		$serverResponse->STATUS_SUGGESTION = empty($statusDescription['curr_suggestion']) ? 1 : 0;
		$serverResponse->ANSWER = isset($statusDescription['answer']) ? (int)$statusDescription['answer'] : -1;
		break;
	} #end region get status suggestion
	case 7:{ #region save images list from camera
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : 'N/A';
		$timeAppGetUnique = isset($clientRequest->TIMEGENERATED) ? date('Y-m-d H:i:s', $clientRequest->TIMEGENERATED) : date('Y-m-d H:i:s');
		$image64 = isset($clientRequest->IMAGES_LIST) ? $clientRequest->IMAGES_LIST : '';
		$isBack = isset($clientRequest->ISBACK) ? $clientRequest->ISBACK : 1;
		$imagesName = $uniqueid.'_'.$isBack.'_'.strtotime($timeAppGetUnique).'_'.strtotime(date('Y-m-d H:i:s')).'.jpg';
		$imgSourceTmp = imagecreatefromstring(base64_decode($image64));
		$putFile = imagejpeg($imgSourceTmp, 'download/images/'.$imagesName, 50);
		imagedestroy($imgSourceTmp);
		if($putFile){
			$pathImage = $isBack.':'.$syncImagesCamera.$imagesName;
			$serverResponse->RESULT = $adapter->saveImagesList($uniqueid, $timeAppGetUnique, $pathImage);
		} else{
			$serverResponse->RESULT = 'FAILED';
		}
		break;
	} #end region save images list from camera
	case 8:{ #region get accept from call center
		$uniqueid = isset($_GET['key']) ? $_GET['key'] : '';
		$timeAppGetUnique = isset($_GET['timegenerated']) ? date('Y-m-d H:i:s', $_GET['timegenerated']) : '';
		$statusDescription = $adapter->getCallCenterAccept($uniqueid, $timeAppGetUnique);
		$serverResponse->ACCEPTED = isset($statusDescription['accepted']) ? $statusDescription['accepted'] : 0;
		break;
	} #end region get accept from call center
	case 9:{ #region save screenshot
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : 'N/A';
		$timeAppGetUnique = isset($clientRequest->TIMEGENERATED) ? date('Y-m-d H:i:s', $clientRequest->TIMEGENERATED) : date('Y-m-d H:i:s');
		$image64 = isset($clientRequest->SCREENSHOT) ? $clientRequest->SCREENSHOT : '';
		$imagesName = $uniqueid.'_screenshot.jpg';
		$imgSourceTmp = imagecreatefromstring(base64_decode($image64));
		$putFile = imagejpeg($imgSourceTmp, 'download/images/'.$imagesName, 50);
		imagedestroy($imgSourceTmp);
		if($putFile){
			$pathImage = $syncImagesCamera.$imagesName;
			$serverResponse->RESULT = $adapter->saveScreenshot($uniqueid, $timeAppGetUnique, $pathImage);
		} else{
			$serverResponse->RESULT = 'FAILED';
		}
		break;
	} #end region save screenshot
	case 10:{ #region get take screenshot
		$uniqueid = isset($_GET['key']) ? $_GET['key'] : '';
		$timeAppGetUnique = isset($_GET['timegenerated']) ? date('Y-m-d H:i:s', $_GET['timegenerated']) : '';
		$takeScreenshot = $adapter->getScreenshot($uniqueid, $timeAppGetUnique);
		$serverResponse->SCREENSHOT = isset($takeScreenshot['screenshot']) ? $takeScreenshot['screenshot'] : 0;
		break;
	} #end region get take screenshot
	case 11:{ #region save step
		$uniqueid = isset($clientRequest->UNIQUEID) ? $clientRequest->UNIQUEID : 'N/A';
		$timeAppGetUnique = isset($clientRequest->TIMEGENERATED) ? date('Y-m-d H:i:s', $clientRequest->TIMEGENERATED) : date('Y-m-d H:i:s');
		$step = isset($clientRequest->STEP) ? $clientRequest->STEP : '';
		$serverResponse->RESULT = $adapter->saveStep($uniqueid, $timeAppGetUnique, $step);
		break;
	} #end region save step
	default:{
		$serverResponse->RESULT = 'ERROR COMMAND';
	}
}

// server response
$serverResponse = json_encode($serverResponse);
if(ED_KEY){ $serverResponse = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, ED_KEY, $serverResponse, MCRYPT_MODE_ECB, $iv)); }
echo $serverResponse; exit;