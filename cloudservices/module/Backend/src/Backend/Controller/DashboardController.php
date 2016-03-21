<?php
namespace Backend\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Session\Container;

use Backend\Model\BaseModel;

class DashboardController extends AbstractActionController
{
    public function indexAction()
    {
        #region check permission
        //$baseModel = new BaseModel();
        //$checking = $baseModel->checkPermission(get_class());
        //if(!$checking){ return $this->redirect()->toRoute('backend_login'); }
        #end region check permission
        
        return new ViewModel();
    }
}
