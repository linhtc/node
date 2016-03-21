<?php

/**
 * @author 
 * @copyright 2015-05
 */
class base_model extends CI_Model {

    function __construct() {
        parent::__construct('');
            $this->load->model();
                    $this->route = $this->router->class;
        }
	function sendMail($from,$to,$subject,$message,$cc="",$bcc=""){
		
		$this->load->library('email');
		
		$this->email->set_header('Header1', 'Value1');
		$this->email->from('khacson2504@gmail.com', 'Stock');
		$this->email->to('khacson1610@gmail.com');
		$this->email->cc('khacson2504@gmail.com');
		$this->email->bcc('khacson1610@gmail.com');
		
		$this->email->subject('Email Test');
		$this->email->message('Testing the email class.');
		
		$config['protocol'] = 'sendmail';
		$config['mailpath'] = '/usr/sbin/sendmail';
		$config['charset'] = 'utf-8';
		$config['wordwrap'] = TRUE;
		
		$this->email->initialize($config);
		
		if ( ! $this->email->send()){
			print_r(111); 
		}
	}
	public function getPermission($login,$route) {
		$right = '';
		if(isset($login->params[$route])){
			$right = json_encode($login->params[$route]);	
		}		
		return json_decode($right,true); 
	}
	public function getallGroup() {
                $sql = " SELECT id, groupname, parentid  
				FROM gds_stock_groups AS g
				WHERE g.isdelete = 0 
				ORDER BY groupname ASC ";
		$query = $this->model->query($sql)->execute();
		return $query;
    }
	public function getMacAddress(){
		$ip = $_SERVER['REMOTE_ADDR'];
		$mac = shell_exec("arp -a $ip"); 
		$arr = explode(" ",$mac);
		if(isset($arr[3])){
			$macAddress = $arr[3];
		}
		else{
			$macAddress = $ip;
		}
		return $macAddress; 
	}
	public function getGroup() {
		$query = $this->model->table('gdt_groups')
						 ->select('id,groupname')
						 ->where('isdelete',0);
		$query = $query->find_all();
		return $query;
	}
	public function findID($table,$id) {
		$query = $this->model->table($table)
					  ->where('isdelete',0)
					  ->where('id',$id)
					  ->find();
		return $query;
	}
	public function baseCurl($key = '', $url = '', $string = '', $debug = false, $compress = false){
		#region encode
		if(!empty($key)){
			$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB);
			$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
			$encode = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $string, MCRYPT_MODE_ECB, $iv));
		} else {
			$encode = $string;
		}
		#end region encode
		
		#region post data
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
		curl_setopt($ch, CURLOPT_POST, 1);
		//curl_setopt($ch, CURLOPT_USERPWD, "$userName:$password");
		curl_setopt($ch, CURLOPT_POSTFIELDS, $encode);
		$result = curl_exec($ch);
		curl_close($ch);
		if($compress){
			//$result = gzdecode(base64_decode($result));
			$result = gzinflate($result);
		}
		if($debug){
			echo 'Response1: <br />';
			print_r($result); echo '<hr />';
		}
		#end region post data
		
		#region decode result
		if(!empty($key)){
			$decrypt = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, base64_decode($result), MCRYPT_MODE_ECB);
			$json = trim($decrypt);
			$resultSet = json_decode($json, true);
		} else {
			$resultSet = json_decode($result, true);
		}
		
		if($debug){
			echo 'Response2: <br />';
			print_r($resultSet); exit;
		}
		
		return $resultSet;
		#end region decode result
	}
	public function baseGetLang(){
		$engList = array(
			'LOGOUT' => 'Logout',
			'SEARCH' => 'Search',
			'CUSTOMER_INFORMATION' => 'Customer Information',
			'DEVICE_INFORMATION' => 'Device Information',
			'PRODUCT_NAME' => 'Product Name',
			'MODEL_NAME' => 'Model Name',
			'SERIAL_NUMBER' => 'Serial Number',
			'IMEI' => 'IMEI',
			'FUNCTION_TEST' => 'Function Test',
			'START_TIME' => 'Start Time',
			'END_TIME' => 'End Time',
			'DIAGNOSTIC_FUNCTION' => 'Diagnostic Function',
			'BEFORE' => 'Before',
			'AFTER' => 'After',
			'NOTE' => 'Note',
			'METHOD' => 'Method',
			'IS' => 'is',
			'RUNNING' => 'running',
			'WAITING' => 'waiting',
			'NEXTCALL' => 'Next Call',
			'SAVE' => 'Save',
			'APP_VIEWER' => 'App Viewer',
			'FULLNAME' => 'Full Name',
			'PHONE' => 'Phone',
			'EMAIL' => 'Email',
			'ADDRESS' => 'Address'
		);
		$spaList = array(
			'LOGOUT' => 'Cerrar sesión',
			'SEARCH' => 'Buscar',
			'CUSTOMER_INFORMATION' => 'Informacion al cliente',
			'DEVICE_INFORMATION' => 'Información del dispositivo',
			'PRODUCT_NAME' => 'Nombre de producto',
			'MODEL_NAME' => 'Marca',
			'SERIAL_NUMBER' => 'Serial Number',
			'IMEI' => 'IMEI',
			'FUNCTION_TEST' => 'Prueba de funcionamiento',
			'START_TIME' => 'Inicio',
			'END_TIME' => 'Finalización',
			'DIAGNOSTIC_FUNCTION' => 'Función de diagnóstico',
			'BEFORE' => 'Antes',
			'AFTER' => 'Después',
			'NOTE' => 'Nota',
			'METHOD' => 'Procedimiento',
			'IS' => 'es',
			'RUNNING' => 'corriendo',
			'WAITING' => 'esperando',
			'NEXTCALL' => 'Siguiente llamada',
			'SAVE' => 'Guardar',
			'APP_VIEWER' => 'App Viewer',
			'FULLNAME' => 'Nombre completo',
			'PHONE' => 'Teléfono',
			'EMAIL' => 'Email',
			'ADDRESS' => 'Dirección'
		);
		$langList = array(
			'en' => $engList,
			'es' => $spaList
		);
		return $langList;
	}
}

?>