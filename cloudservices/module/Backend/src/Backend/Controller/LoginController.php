<?php
namespace Backend\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Session\Container;

use Backend\Model\BaseModel;

class LoginController extends AbstractActionController
{
    public function indexAction()
    {
        // Retrieve username from session
        $sessionContainer = new Container('authentication');
        //$information = $sessionContainer->information;
        $message = $sessionContainer->message;
        $renderSet = array();
        if(!empty($message)){ $renderSet['message'] = $message; $sessionContainer->message = null; }
        unset($message);
	//$sessionContainer->getManager()->destroy();
        $this->layout('backend/layoutlogin');
        return new ViewModel($renderSet);
    }
    
    public function generateChildObject(&$parentObj, $childObj, $mapObj){
        foreach($childObj as $item=>$dontCare){
            $parentObj->$item = new \stdClass();
            if(isset($mapObj->$item)){
                $this->generateChildObject($parentObj->$item, $mapObj->$item, $mapObj);
            }
        }
    }
    
    public function authenticationAction(){
        #region variables
        $sessionContainer = new Container('authentication');
        $username = $this->getRequest()->getPost('username');
        $password = $this->getRequest()->getPost('password');
        $baseModel = new BaseModel();
        $authenticationSet = new \stdClass();
        $menuObj = new \stdClass();
        $menuObjParent = new \stdClass();
        $menuObjParentChild = new \stdClass();
        $permissionControl = new \stdClass();
        #end region variables
        
        #region find user
        $userObj = $baseModel->authentication($username, $password); //print_r($userObj); exit;
        $userGroup = isset($userObj->user_group) ? $userObj->user_group : null;
        if(empty($userGroup)){
            $sessionContainer->message = 'Username or password is invalid.';
            return $this->redirect()->toRoute('backend_login');
        }
        
        $authenticationSet->user_information = $userObj;
        unset($username);
        unset($password);
        unset($userObj);
        #end region find user
        
        #region find group
        $collection = 'cs_group';
        $criteria = array('group_unique'=>$userGroup);
        $projection = array( '_id'=>0, 'group_unique'=>1, 'group_name'=>1, 'group_admin'=>1, 'group_kiosk'=>1, 'group_control'=>1 );
        $groupObj =  $baseModel->mongoFindOne($collection, $criteria, $projection);
        $groupKiosk = isset($groupObj->group_kiosk) ? $groupObj->group_kiosk : null;
        $groupAdmin = isset($groupObj->group_admin) ? $groupObj->group_admin : 0;
        if(empty($groupKiosk) && !$groupAdmin){
            $sessionContainer->message = 'Group is unnable.';
            return $this->redirect()->toRoute('backend_login'); 
        }
        $groupControl = isset($groupObj->group_control) ? $groupObj->group_control : null;
        $authenticationSet->group_information = $groupObj;
        unset($userGroup);
        unset($groupObj);
        //unset($groupAdmin);
        #end region find group
        
        #region find kiosk
        $collection = 'cs_kiosk';
        $criteria = array('kiosk_unique'=>$groupKiosk);
        $projection = array('_id'=>0);
        $kioskObj = $baseModel->mongoFindOne($collection, $criteria, $projection);
        $kioskFriendly = isset($kioskObj->kiosk_friendly) ? $kioskObj->kiosk_friendly : null;
        $authenticationSet->kiosk_information = $kioskObj;
        unset($groupKiosk);
        unset($kioskObj);
        //unset($collection);
        //unset($criteria);
        //unset($projection);
        //unset($baseModel);
        #end region find kiosk
        
        #region menu list
        $collection = 'cs_menu';
        $criteria = array('deleted'=>0);
        $projection = array( '_id'=>0, 'menu_unique'=>1, 'menu_name'=>1, 'menu_type'=>1, 'menu_parent'=>1, 'menu_class'=>1, 'menu_url'=>1, 'menu_uri'=>1, 'menu_control'=>1, 'menu_order'=>1, 'menu_icon'=>1 );
        $menuList = $baseModel->mongoFind($collection, $criteria, $projection);
        #end region menu list
        // print_r($menuList);
        foreach($menuList as $menuItem){
            $menuUnique = $menuItem['menu_unique'];
            if(!isset($groupControl[$menuUnique])){ continue; } // permission control
            $menuUniqueParent = $menuItem['menu_parent'];
            if(!isset($menuObj->$menuUnique)){ $menuObj->$menuUnique = $menuItem; }
            if(!empty($menuUniqueParent)){
                if(!isset($menuObjParentChild->$menuUniqueParent)){
                    $menuObjParentChild->$menuUniqueParent = new \stdClass();
                    $menuObjParentChild->$menuUniqueParent->$menuUnique = new \stdClass();
                } else{
                    $menuObjParentChild->$menuUniqueParent->$menuUnique = new \stdClass();
                }
            } else{
                $menuObjParent->$menuUnique = new \stdClass();
            }
        }
        foreach($menuObjParent as $menuItem=>$dontCare){
            if(isset($menuObjParentChild->$menuItem)){
                $this->generateChildObject($menuObjParent->$menuItem, $menuObjParentChild->$menuItem, $menuObjParentChild);
            }
        }
        $authenticationSet->menu_object = $menuObj;
        $authenticationSet->menu_control = $menuObjParent;
        
        #region generate menu
        $menuHtml = '';
        $this->generateMenuHtml($menuObjParent, $menuObj, $menuHtml); //print_r($menuHtml); exit;
        $sessionContainer->menu_html = $menuHtml;
        $sessionContainer->logout_url = $this->url()->fromRoute('backend_logout');
        #end region generate menu
        
        #region permission
        foreach($groupControl as $itemKey=>$itemPermission){
            if(!isset($menuObj->$itemKey)){ continue; }
            $itemMenu = (object)$menuObj->$itemKey; 
            if(empty($itemMenu->menu_class)){ continue; }
            $itemClass = $itemMenu->menu_class;
            if(!isset($permissionControl->$itemClass)){ $permissionControl->$itemClass = (object)$itemPermission; }
        }
        $authenticationSet->permission_control = $permissionControl;
        #end region permission
        
        // Store username in session
        $sessionContainer->information = $authenticationSet;
        return $this->redirect()->toRoute('backend_kiosk');
    }
    
    public function generateMenuHtml($menuControl, $menuObject, &$menuHtml){
        foreach($menuControl as $menuItem=>$menuChild){
            $menuItemObject = (object)$menuObject->$menuItem;
            $menuItemName = $menuItemObject->menu_name;
            $menuItemUrl = $menuItemObject->menu_url;
            $menuItemUri = (object)$menuItemObject->menu_uri;
            $menuItemUriKey = isset($menuItemUri->menu_key) ? $menuItemUri->menu_key : null;
            $menuItemUriValue = isset($menuItemUri->menu_value) ? $menuItemUri->menu_value : null;
            $menuItemIcon = $menuItemObject->menu_icon;
            $menuItemRoute = 'javascript:;';
            $menuItemUri = array();
            if(!empty($menuItemUriKey)){ $menuItemUri = array($menuItemUriKey=>$menuItemUriValue);  }
            if(!empty($menuItemUrl)){ $menuItemRoute = $this->url()->fromRoute($menuItemUrl, $menuItemUri, array(), true); }
            if(empty((array)$menuChild)){
                $menuHtml .= '
                    <li class="class_'.  str_replace('/', '_', $menuItemRoute).'">
                        <a href="'.$menuItemRoute.'">
                            <i class="'.$menuItemIcon.'"></i> '.$menuItemName.'
                        </a>
                    </li>
                ';
            } else{
                $menuHtml .= '
                    <li>
                        <a href="javascript:;">
                        <i class="'.$menuItemIcon.'"></i>
                        <span class="title">'.$menuItemName.'</span>
                        <span class="arrow "></span>
                        </a>
                        <ul class="sub-menu">
                ';
                $this->generateMenuHtml($menuChild, $menuObject, $menuHtml);
                $menuHtml .= '
                        </ul>
                    </li>
                ';
            }
        }
    }
    
    public function logoutAction(){
        $session = new Container('authentication');
	$session->getManager()->destroy();
        return $this->redirect()->toRoute('backend_login');
        /*
         To destroy particular session variable   
        $session->getManager()->getStorage()->clear('session_variable_name'); 
        */
    }
}
