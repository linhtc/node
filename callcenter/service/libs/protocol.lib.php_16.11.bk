<?php
include_once('post.php'); 
function exception_error_handler($errno, $errstr, $errfile, $errline) {
    if (stristr($errstr, "DB Error") == TRUE) {
        throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
    }
}
set_error_handler("exception_error_handler");

class ProtocolLibDbAccess {
	public function GeraHash($qtd){ 
		//Under the string $Caracteres you write all the characters you want to be used to randomly generate the code. 
		$Caracteres = 'ABCDEFGHJKLMPQRSTUVXWYZ23456789'; 
		$QuantidadeCaracteres = strlen($Caracteres); 
		$QuantidadeCaracteres--; 
		$Hash=NULL; 
		for($x=1;$x<=$qtd;$x++){ 
			$Posicao = rand(0,$QuantidadeCaracteres); 
			$Hash .= substr($Caracteres,$Posicao,1); 
		} 
		return $Hash; 
	}
	public function generateUniqueID($uuid){
		global $db;
		try{
			$flagBreak = false;
			$uniqueid = '7LT2L6';
			while(!$flagBreak){
				$uniqueid = $this->GeraHash(6);
				$time_generated = date('Y-m-d H:i:s');
				$sql = "
					INSERT INTO remote_diagnostic_unique(uniqueid, device_uuid, time_generated)
					VALUES('".$uniqueid."', '".$uuid."', '".$time_generated."');
				";
				try{
					$checker = $db->querydata($sql);
					if($checker){
						$flagBreak = true; break;
					}
				} catch(Exception $ee){
					$flagBreak = false;
				}
			}
			$sql = "
				INSERT INTO zlog_remote_diagnostic(uniqueid, time_app_get_unique)
				VALUES('$uniqueid', '$time_generated');
			";
			$db->querydata($sql);
			return array('uniqueid' => $uniqueid, 'time_generated' => (string)strtotime($time_generated));
		} catch(Exception $e){
			return 'Error in process!';
		}
	}
	public function generateUniqueID_BK0610($uuid){
		global $db;
		try{
			$sql = "
				SELECT 	* 
				FROM 	remote_diagnostic_unique u
				WHERE	u.device_uuid = '".$uuid."';
			";
			$checker = $db->selectdata($sql);
			if(!empty($checker[0]['uniqueid'])){
				return $checker[0]['uniqueid'];
			} else{
				$flagBreak = false;
				$uniqueid = '7LT2L6';
				while(!$flagBreak){
					$uniqueid = $this->GeraHash(6);
					$sql = "
						INSERT INTO remote_diagnostic_unique(uniqueid, device_uuid, time_generated)
						VALUES('".$uniqueid."', '".$uuid."', '".date('Y-m-d H:i:s')."');
					";
					try{
						$checker = $db->querydata($sql);
						if($checker){
							$flagBreak = true; break;
						}
					} catch(Exception $ee){
						$flagBreak = false;
					}
				}
				return $uniqueid;
			}
		} catch(Exception $e){
			return 'Error in process!';
		}
	}
	public function saveLogfile($data, $modify, $table = 'zlog_remote_diagnostic'){
		if(is_object($data)){
			global $db;
			try{
				$fields = '';
				$values = '';
				$sqlUpdate = '';
				foreach($data as $field=>$value){
					if($field != 'result_last_time'){
						$fields .= ", `".$field."`";
						if((!is_numeric($value) || $field == 'uniqueid') && $field != 'product_name'){
							$values .= ", '".$value."'";
						} else{
							$values .= ", ".$value;
						}
					}
					if(!$modify){
						if($field != 'uniqueid' && $field != 'time_app_get_unique' && $field != 'result_last_time'){
							if($field != 'product_name'){
								$sqlUpdate .= ($sqlUpdate == '' ? " UPDATE $field = '" : ", $field = '").$value."'";
							} else{
								$sqlUpdate .= ($sqlUpdate == '' ? " UPDATE $field = " : ", $field = ").$value;
							}
						}
					} else{
						if($field != 'uniqueid' && $field != 'time_app_get_unique' && $field != 'result_first_time' && $field != 'product_name'){
							$sqlUpdate .= ($sqlUpdate == '' ? " UPDATE $field = '" : ", $field = '").$value."'";
						}
					}
				}
				$fields = substr($fields, 2);
				$values = substr($values, 2);
				$sqlInsert = "
					INSERT INTO $table ($fields)
					VALUES ($values)
				";
				$sql = "
					$sqlInsert 
						ON DUPLICATE KEY
					$sqlUpdate;
				";
				//echo $sql; exit;
				//$db->querydata("SET NAMES 'utf8'");
				$db->querydata($sql, array());
				return 'PASSED';
			} catch(Exception $e){
				return 'FAILED';
			}
			return 'FAILED';
		}
		return 'FAILED';
	}
	public function getSettingDiagnostic($uniqueid, $timeAppGetUnique){
		global $db;
        try{
			$sql = "
				SELECT z.diagnostic_functions, z.exit_app, z.call_number
				FROM zlog_remote_diagnostic z
				WHERE z.uniqueid = '$uniqueid';
			";
			$datas = $db->selectdata($sql, array());
			return isset($datas[0]) ? $datas[0] : array();
		} catch(Exception $e){
            return ERROR;
        }
	}
	public function saveMethodRunningApp($uniqueid, $timeAppGetUnique, $method, $itemSelected){
		global $db;
		try{
			$sql = "
				INSERT INTO zlog_remote_diagnostic (uniqueid, time_app_get_unique, method, items_selected)
					VALUES('$uniqueid', '$timeAppGetUnique', '$method', '$itemSelected')
				ON DUPLICATE KEY
				UPDATE
					method = '$method', items_selected = '$itemSelected'
				;
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function saveStatusRunningApp($uniqueid, $timeAppGetUnique, $status){
		global $db;
		try{
			$addition = '';
			if(!$status){ $addition .= ", diagnostic_functions = '[]', exit_app = 0"; }
			$sql = "
				INSERT INTO zlog_remote_diagnostic (uniqueid, time_app_get_unique, app_running)
					VALUES('$uniqueid', '$timeAppGetUnique', '$status')
				ON DUPLICATE KEY
				UPDATE
					app_running = '$status' $addition
				;
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function saveSuggestion($uniqueid, $timeAppGetUnique, $suggestion, $isQuestion){
		global $db;
		try{
			$sql = "
				UPDATE zlog_remote_diagnostic
				SET curr_suggestion = '".addslashes($suggestion)."', is_question = '".$isQuestion."'
				WHERE uniqueid = '$uniqueid';
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function saveStep($uniqueid, $timeAppGetUnique, $step){
		global $db;
		try{
			$sql = "
				INSERT INTO zlog_remote_diagnostic (uniqueid, time_app_get_unique, step)
					VALUES('$uniqueid', '$timeAppGetUnique', '$step')
				ON DUPLICATE KEY
				UPDATE
					step = '$step'
				;
			"; //echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function getStatusSuggestion($uniqueid, $timeAppGetUnique){
		global $db;
        try{
			$sql = "
				SELECT z.curr_suggestion, z.answer
				FROM zlog_remote_diagnostic z
				WHERE z.uniqueid = '$uniqueid'
			"; //echo $sql; exit;
			$datas = $db->selectdata($sql, array());
			return isset($datas[0]) ? $datas[0] : array();
		} catch(Exception $e){
            return ERROR;
        }
	}
	public function saveImagesList($uniqueid, $timeAppGetUnique, $pathImage){
		global $db;
		try{
			$sql = "
				UPDATE zlog_remote_diagnostic
				SET camera_images = CONCAT_WS(',',camera_images, '$pathImage')
				WHERE uniqueid = '$uniqueid';
			";// echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function saveScreenshot($uniqueid, $timeAppGetUnique, $pathImage){
		global $db;
		try{
			$sql = "
				UPDATE zlog_remote_diagnostic
				SET curr_screenshot = '$pathImage', screenshot = 0
				WHERE uniqueid = '$uniqueid';
			";// echo $sql; exit;
			$db->querydata($sql, array());
			return 'PASSED';
		} catch(Exception $e){
			return 'FAILED';
		}
	}
	public function getCallCenterAccept($uniqueid, $timeAppGetUnique){
		global $db;
        try{
			$sql = "
				SELECT z.accepted
				FROM zlog_remote_diagnostic z
				WHERE z.uniqueid = '$uniqueid';
			"; //echo $sql; exit;
			$datas = $db->selectdata($sql, array());
			return isset($datas[0]) ? $datas[0] : array();
		} catch(Exception $e){
            return ERROR;
        }
	}
	public function getScreenshot($uniqueid, $timeAppGetUnique){
		global $db;
        try{
			$criteria = '';
			if(!empty($uniqueid)){ $criteria .= " AND z.uniqueid = '".$uniqueid."'"; }
			if(!empty($timeAppGetUnique)){ $criteria .= " AND z.time_app_get_unique = '".$timeAppGetUnique."'"; }
			$sql = "
				SELECT z.screenshot
				FROM zlog_remote_diagnostic z
				WHERE z.uniqueid = '$uniqueid';
			"; //echo $sql; exit;
			$datas = $db->selectdata($sql, array());
			return isset($datas[0]) ? $datas[0] : array();
		} catch(Exception $e){
            return ERROR;
        }
	}
}
?>