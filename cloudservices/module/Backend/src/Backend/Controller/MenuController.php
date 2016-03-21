<?php
namespace Backend\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Session\Container;

use Backend\Model\BaseModel;

class MenuController extends AbstractActionController
{
    public function indexAction()
    {
        #region check permission
        $baseModel = new BaseModel();
        $permission = $baseModel->checkPermission($this, get_class());
        if(!is_object($permission)){ $this->redirect()->toRoute('backend_login'); }
        #end region check permission
        
        $renderSet = array('permission'=>$permission, 'isadmin'=>0);
        return new ViewModel($renderSet);
    }
}
