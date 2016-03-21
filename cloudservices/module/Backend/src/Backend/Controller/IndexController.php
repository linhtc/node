<?php
namespace Backend\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Backend\Model\BaseModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        return new ViewModel();
    }
    
    public function viewKioskAction(){
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
