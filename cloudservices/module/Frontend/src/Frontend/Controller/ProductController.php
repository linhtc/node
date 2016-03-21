<?php
namespace Frontend\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class ProductController extends AbstractActionController
{
    public function indexAction()
    {
        echo 1; exit;
        return new ViewModel();
    }
    
    public function viewInformationAction(){
        
        echo 1; exit;
    }
}
