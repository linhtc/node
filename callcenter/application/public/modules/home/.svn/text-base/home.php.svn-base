<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
/**
 * @author sonnk
 * @copyright 2011
 */
     
class home extends CI_Controller {
    // private $key = 'gdt$E@G@!Espt';
	private $key = '';
	private $url = 'http://cloud16.greystonedatatech.com/remote-diagnostic/service.php';
	//private $url = 'http://172.16.21.3:97/protocol/remote-diagnostic-test/service.php';
	private $remoteLink = '//cloud16.greystonedatatech.com/remote-diagnostic/service.php';
	
    function __construct(){
        parent::__construct();			
        $this->load->model();
        $this->site->setTemplate('home');
    }
    function  _remap($method, $params = array()){
        if(method_exists($this, $method)){ return call_user_func_array(array($this, $method), $params); }
        $this->_view();
    }
    function _view(){
		$approval = $this->site->getSession("approval");
		if(!$approval){ redirect(base_url() . "authorize.html"); }
        $data = new stdClass();
        $data->site =   "home";
		$lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';
		$this->load->model(array('base_model'));
		$username = $this->site->getSession("username");
		$langList = $this->base_model->baseGetLang();
		$langList = isset($langList[$lang]) ? $langList[$lang] : $langList['en'];
		$data = array('remoteLink'=>$this->remoteLink, 'langList' => $langList, 'lang' => $lang, 'username' => $username);
        $content = $this->load->view('view', $data, true);
        $this->site->write('content', $content, true);
        $this->site->render();
    }
}