<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of BaseModel
 *
 * @author linhtc
 */

namespace Backend\Model;

use Zend\Session\Container;

class BaseModel {
    private $host = 'localhost';
    private $post = '27017';
    private $database = 'cloudservices';
    private $username = '';
    private $password = '';
    
    public function connect($col=''){
        // connect to mongodb
        $m = new \MongoClient();
        
        // select a database
        $database=$this->database;
        $db = $m->$database;
        
        // select a collection
        return $db->$col;
    }
    
    public function checkPermission($control, $class, $permissionType='menu_view'){
        $sessionContainer = new Container('authentication');
        $information = $sessionContainer->information;
        if(empty($information)){ return $control->redirect()->toRoute('backend_login'); }
        if(empty($information->permission_control)){ return $control->redirect()->toRoute('backend_permission_deny'); }
        $class = str_replace('\\', '_', $class);
        $permission = $information->permission_control;
        $permission = $permission->$class;
        if(!isset($permission->$permissionType)){ return $control->redirect()->toRoute('backend_permission_deny'); }
        $resultPermission = new \stdClass();
        $resultPermission->permission = $permission;
        $resultPermission->isadmin = $information->group_information->group_admin;
        return $resultPermission;
    }
    
    public function getKioskInformation($kioskFriendly){
        $collection = $this->connect('cs_kiosk');
        $kioskInformation = $collection->find(array('kiosk_friendly'=>$kioskFriendly));
        return $kioskInformation;
    }
    
    public function authentication($username, $password){
        $collection = 'cs_user';
        $projection = array( '_id'=>0, 'user_unique'=>1, 'user_group'=>1, 'user_phone'=>1, 'user_email'=>1, 'user_address'=>1 );
        $criteria = array('user_username'=>$username, 'user_password'=>$password, 'deleted'=>0);
        $document = $this->mongoFindOne($collection, $criteria, $projection);
        return $document;
    }
    
    public function mongoFindOne($collection, $criteria=array(), $projection=array()){
        // connect to mongodb
        $m = new \MongoClient();
        
        // select a database
        $database=$this->database;
        $db = $m->$database;
        
        // select a collection
        $collection = $db->$collection;
        
        // find document
        $document = $collection->findOne($criteria, $projection);
        
        // close connection
        $m->close();
        
        return (object)$document;
    }
    
    public function mongoFind($collection, $criteria=array(), $projection=array(), $skip=0, $limit=0){
        // connect to mongodb
        $m = new \MongoClient();
        
        // select a database
        $database=$this->database;
        $db = $m->$database;
        
        // select a collection
        $collection = $db->$collection;
        
        // find document
        $document = $collection->find($criteria, $projection);
        if($skip){ $document->skip($skip); }
        if($limit){ $document->limit($limit); }
        
        // close connection
        $m->close();
        
        return $document;
    }
}
