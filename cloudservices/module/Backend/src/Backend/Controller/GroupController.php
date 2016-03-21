<?php
namespace Backend\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Session\Container;

use Backend\Model\BaseModel;

class GroupController extends AbstractActionController
{
    public function indexAction()
    {
        //$sessionContainer = new Container('authentication');
        //$information = $sessionContainer->information;
        //print_r(json_encode($information)); exit;
        return new ViewModel();
    }
}
