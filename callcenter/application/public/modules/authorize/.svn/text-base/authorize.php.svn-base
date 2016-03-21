<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * @author sonnk
 * @copyright 2013
 */
class Authorize extends CI_Controller {

	// private $key = 'gdt$E@G@!Espt';
	private $key = '';
	private $url = 'http://cloud16.greystonedatatech.com/remote-diagnostic/service.php';
	//private $url = 'http://172.16.21.3:97/protocol/remote-diagnostic-test/service.php';
	private $remoteLink = '//cloud16.greystonedatatech.com/remote-diagnostic/service.php';
    function __construct() {
        parent::__construct();
		$this->route = $this->router->class;
    }
    function _remap($method, $params = array()) {
        if (method_exists($this, $method)) {
            return call_user_func_array(array($this, $method), $params);
        }
        $this->_view();
    }
    function _view() {
        $this->site->setTemplate('login');
        $data = new stdClass();
		$data->csrfName = $this->security->get_csrf_token_name();
		$data->csrfHash = $this->security->get_csrf_hash();
        $content = $this->load->view('view', $data, true);
        $this->site->write('content', $content, true);
        $this->site->render();
    }
	function confirmlogin(){
		$clientRequest = @file_get_contents('php://input');
		$this->load->model(array('base_model'));
		$result = $this->base_model->baseCurl($this->key, $this->url, $clientRequest, false, false);
		$approval = isset($result['RESULT']) ? $result['RESULT'] : 0;
		if($approval){
			$clientRequest = json_decode($clientRequest);
			$username = isset($clientRequest->username) ? $clientRequest->username : 'N/A';
			$this->site->SetSession('approval', $approval);
			$this->site->SetSession('username', $username);
		}
		print_r(json_encode($result)); exit;
	}
    function logout(){
        $this->site->deleteSession("approval");
        $this->site->deleteSession("username");
		redirect(base_url());
    }
}