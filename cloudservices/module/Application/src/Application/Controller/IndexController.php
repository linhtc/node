<?php
namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

// use Application\Model\BaseModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        /*
         * 
            $baseModel = new BaseModel();
            $collection = $baseModel->connect('', 'cloudservices', 'cs_user');
            $resultSet = $collection->find();
            foreach($resultSet as $item){
                print_r($item);
            } exit;
        */
        return new ViewModel();
    }
}
