<?php
namespace Backend\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Session\Container;

use Backend\Model\BaseModel;

class KioskController extends AbstractActionController
{
    public function indexAction()
    {
        #region check permission
        $baseModel = new BaseModel();
        $permissionSet = $baseModel->checkPermission($this, get_class());
        $permission = $permissionSet->permission;
        $isadmin = $permissionSet->isadmin;
        #end region check permission
        
        $renderSet = array('permission' => $permission, 'isadmin'=>$isadmin);
        return new ViewModel($renderSet);
    }
    
    public function viewKioskAction(){
        $sessionContainer = new Container('authentication');
        $information = $sessionContainer->information;
        //print_r(json_encode($information)); exit;
        /*$uri = $this->getRequest()->getUri();
        print_r($uri->getPath());
        
        exit;
        
        
        $class = get_class(); echo $class; exit;*/
        $kiosk = $this->params()->fromRoute('kiosk_friendly');
        $baseModel = new BaseModel();
        $kioskInformation = $baseModel->getKioskInformation($kiosk);
        unset($kiosk);
        $kioskObject = new \stdClass();
        foreach($kioskInformation as $item){
            $kioskObject = (object)$item;
        }
        unset($kioskInformation);
        $renderList = array('kioskInformation'=>$kioskObject);
        unset($kioskObject);
        return new ViewModel($renderList);
    }
}
