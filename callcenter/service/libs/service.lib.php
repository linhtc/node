<?php
include_once('post.php'); 
function exception_error_handler($errno, $errstr, $errfile, $errline) {
    if (stristr($errstr, "DB Error") == TRUE) {
        throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
    }
}
set_error_handler("exception_error_handler");

class ServiceLibDbAccess {
	public function saveCustomerDetail($uniqueid, $fullname, $phone, $email, $address){
		global $db;
		try{
			$sql = "
				INSERT INTO remote_diagnostic_customer(uniqueid, fullname, phone, email, address)
				VALUES('".$uniqueid."', '".$fullname."', '".$phone."', '".$email."', '".$address."')
					ON DUPLICATE KEY
				UPDATE fullname = '".$fullname."', phone = '".$phone."', email = '".$email."', address = '".$address."';
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function saveSettingDiagnostic($uniqueid, $diagnosticList, $exitApp, $callNumber, $itemSelected){
		global $db;
		try{
			/* $sql = "
				SELECT z.app_running
				FROM zlog_remote_diagnostic z
				WHERE z.uniqueid = '$uniqueid';
			";
			$checker = $db->selectdata($sql);
			if($checker[0]['app_running']){
				return 'App is running. Please wait for app update to complete!';
			} */
			$sql = "
				UPDATE zlog_remote_diagnostic z
				SET z.diagnostic_functions = '$diagnosticList', exit_app = '$exitApp', 
					call_number = '$callNumber', items_selected = '$itemSelected'
				WHERE z.uniqueid = '$uniqueid';
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function saveDoneSuggestion($uniqueid, $answer){
		global $db;
		try{
			$sql = "
				UPDATE zlog_remote_diagnostic z
				SET z.curr_suggestion = (NULL), z.answer = $answer
				WHERE z.uniqueid = '$uniqueid';
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function saveAcceptRunApp($uniqueid, $accepted, $username){
		global $db;
		try{
			$sql = "
				UPDATE zlog_remote_diagnostic z
				SET z.accepted = $accepted, z.user_accepted = '$username'
				WHERE z.uniqueid = '$uniqueid';
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function saveTakeScreenshot($uniqueid, $screenshot){
		global $db;
		try{
			$sql = "
				UPDATE zlog_remote_diagnostic z
				SET z.screenshot = $screenshot, curr_screenshot = ''
				WHERE z.uniqueid = '$uniqueid';
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function createUserLogin($username, $password){
		global $db;
		try{
			$salt = 's+(_a*';
			$password = md5(md5(md5($username).md5($password.$salt)));
			$sql = "
				INSERT INTO remote_diagnostic_user (`username`, `password`)
					VALUES ('$username', '$password')
				ON DUPLICATE KEY
				UPDATE `username` = '$username', `password` = '$password', deleted = 0
				;
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function confirmLogin($username, $password){
		global $db;
		try{
			$salt = 's+(_a*';
			$password = md5(md5(md5($username).md5($password.$salt)));
			$sql = "
				SELECT u.username
				FROM remote_diagnostic_user u
				WHERE u.username = '$username' AND u.password = '$password';
			";
			$result = $db->selectdata($sql);
			return !empty($result[0]['username']) ? 1 : 0;
		} catch(Exception $e){
			return array();
        }
	}
	public function getDetailLogFileBK($search = ''){
		global $db;
        try{
			$criteria = '1';
			$uniqueid = isset($search->uniqueid) ? $search->uniqueid : '';
			$uniLen = strlen($uniqueid);
			if($uniLen == 6){ // locator id
				$criteria = "z.uniqueid = '".$uniqueid."'";
			} elseif($uniLen > 6){ // imei
				$criteria = "z.device_sn = '".$uniqueid."'";
			} else{ // wrong locator id or imei
				return array();
			}
			$sql = "
				SELECT rs1.*, c.address, c.email, c.fullname, c.phone
				FROM (
					SELECT z.uniqueid, z.device_sn, z.device_imei, z.product_name, z.model_name, z.os_type, 
						z.time_created, z.time_modified, z.result_first_time, z.result_last_time, 
						z.diagnostic_functions, z.method, z.app_running, z.exit_app, z.curr_suggestion, 
						z.is_question, z.call_number, z.answer, z.items_selected, z.camera_images, z.accepted,
						z.curr_screenshot
					FROM zlog_remote_diagnostic z
					WHERE $criteria
					ORDER BY z.auto_id DESC
					LIMIT 1
				) rs1
				LEFT JOIN remote_diagnostic_customer c ON c.uniqueid = rs1.uniqueid
			";
			$datas = $db->selectdata($sql, array());
			return isset($datas[0]) ? $datas[0] : array();
		} catch(Exception $e){
            return ERROR;
        }
	}
	public function getDetailLogFile($search = ''){
		global $db;
        try{
			$criteria = '1';
			$uniqueid = isset($search->uniqueid) ? $search->uniqueid : '';
			$uniLen = strlen($uniqueid);
			if($uniLen == 6){ // locator id
				$criteria = "z.uniqueid = '".$uniqueid."'";
			} elseif($uniLen > 6){ // imei
				$criteria = "z.device_sn = '".$uniqueid."'";
			} else{ // wrong locator id or imei
				return array();
			}
			$sql = "
				SELECT z.uniqueid, z.device_sn, z.device_imei, z.product_name, z.model_name, z.os_type, 
					z.time_created, z.time_modified, z.result_first_time, z.result_last_time, 
					z.diagnostic_functions, z.method, z.app_running, z.exit_app, z.curr_suggestion, 
					z.is_question, z.call_number, z.answer, z.items_selected, z.camera_images, z.accepted,
					z.curr_screenshot, z.step, z.device_fmi, c.address, c.email, c.fullname, c.phone
				FROM zlog_remote_diagnostic z
				LEFT JOIN remote_diagnostic_customer c ON c.uniqueid = z.uniqueid
				WHERE $criteria;
			";
			$datas = $db->selectdata($sql, array());
			return isset($datas[0]) ? $datas[0] : array();
		} catch(Exception $e){
            return ERROR;
        }
	}
	public function getLikeUniqueid($uniqueidPattern){
		global $db;
		try{
			$sql = "
				SELECT u.uniqueid 
				FROM remote_diagnostic_unique u
				WHERE u.uniqueid LIKE '$uniqueidPattern%'
				ORDER BY u.time_generated DESC
				LIMIT 5;
			";
			$result = $db->selectdata($sql);
			return $result;
		} catch(Exception $e){
			return array();
        }
	}
	public function generateUniqueID(){
		return uniqid (GENERATE_SERVER, true); // the constant is defined in define.php
	}
	public function executeQuery($sql){
		global $db;
		try{
			$result = $db->querydata($sql);
			return $result;
		} catch(Exception $e){
			return false;
        }
	}
	public function dropdownOperatorList(){
		global $db;
		try{
			$sql = "
				SELECT u.username
				FROM remote_diagnostic_user u
				ORDER BY u.username;
			";
			$result = $db->selectdata($sql);
			return $result;
		} catch(Exception $e){
			return array();
        }
	}
	public function reportPaging($search){
		global $db;
		try{
			$criteria = $this->repairSearchString($search);
			if(empty($criteria)){ $criteria = 1; }
			$sql = "
				SELECT COUNT(1) total
				FROM zlog_remote_diagnostic z
				WHERE $criteria;
			";
			$result = $db->selectdata($sql); // echo $sql; exit;
			return !empty($result[0]['total']) ? $result[0]['total'] : 0;
		} catch(Exception $e){
			return 0;
        }
	}
	public function reportList($search, $page = 0, $rows = 10){
		global $db;
		try{
			$pages = $page * $rows;
			$limit = $rows ? " LIMIT $pages, $rows" : "";
			$criteria = $this->repairSearchString($search);
			if(empty($criteria)){ $criteria = 1; }
			$sql = "
				SELECT z.auto_id
				FROM zlog_remote_diagnostic z
				WHERE $criteria
				ORDER BY z.time_created DESC
				$limit;
			"; //echo $sql; exit;
			$result = $db->selectdata($sql);
			$autoidList = '';
			if(count($result)){
				foreach($result as $item){
					$autoidList .= ($autoidList == '' ? '' : ',')."'".$item['auto_id']."'";
				}
			}
			if(empty($autoidList)){ return array(); }
			$sql = "
				SELECT *
				FROM zlog_remote_diagnostic z
				WHERE z.auto_id IN($autoidList)
				ORDER BY z.auto_id DESC;
			"; //echo $sql; exit;
			$result = $db->selectdata($sql);
			return $result;
		} catch(Exception $e){
			return array();
        }
	}
	public function repairSearchString($search){
		$criteria = '';
		#region local time
		if(!empty($search->fromdate) && !empty($search->todate)){
			$formdate = date('Y-m-d', strtotime($search->fromdate))." 00:00:00";
			$todate = date('Y-m-d', strtotime($search->todate))." 23:59:59";
			$criteria .= " z.time_created >= '$formdate' ";
			$criteria .= " and z.time_created <= '$todate' ";
		} else{
			$criteria = '1';
		}
		#end region local time
		
		#region locator id
		if(!empty($search->uniqueid)){
			$uniqueid = $search->uniqueid;
			if(strpos($uniqueid, ',')){
				$criteria .= " AND z.uniqueid IN($uniqueid) ";
			} else{
				$criteria .= " AND z.uniqueid LIKE '$uniqueid%' ";
			}
		}
		#end region locator id
		
		#region operator
		if(!empty($search->user_accepted)){
			$user_accepted = $search->user_accepted;
			$user_accepted = '"'. str_replace(",", '","', $user_accepted) .'"';
			if(strpos($user_accepted, ',')){
				$criteria .= " AND z.user_accepted IN($user_accepted) ";
			} else{
				$criteria .= " AND z.user_accepted = $user_accepted ";
			}
		}
		#end region operator
		
		#region device sn
		if(!empty($search->device_sn)){
			$device_sn = $search->device_sn;
			if(strpos($device_sn, ',')){
				$criteria .= " AND z.device_sn IN($device_sn) ";
			} else{
				$criteria .= " AND z.device_sn = '$device_sn' ";
			}
		}
		#end region device sn
		
		#region device imei
		if(!empty($search->device_imei)){
			$device_imei = $search->device_imei;
			if(strpos($device_sn, ',')){
				$criteria .= " AND z.device_imei IN($device_imei) ";
			} else{
				$criteria .= " AND z.device_imei = '$device_imei' ";
			}
		}
		#end region device imei
		
		return $criteria;
	}
}
?>