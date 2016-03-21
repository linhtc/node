<?php
/**
 * @author Sonnk
 * @copyright 2013
 */

class AuthorizeModel extends CI_Model
{
	function __construct(){
		parent::__construct('');
	}
	public function getListProcess(){
		$process = $this->model->table("gce_process")
								->select('processid,processname')
								->where("isdelete",0)
								->order_by("order")
								->find_all();
		return $process;
	}
}