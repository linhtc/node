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

namespace Application\Model;

class BaseModel {
    public function connect($host='', $db='', $col='', $username='', $password=''){
        // connect to mongodb
        $m = new \MongoClient();
        
        // select a database
        $db = $m->$db;
        
        // select a collection
        $collection = $db->$col;
        return $collection;
    }
}
