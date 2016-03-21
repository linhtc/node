<?php
/**
 * @author Sonnk
 * @copyright 2011
 */
 
class incModelBreadcrumb extends CI_Model{
	function __construct(){
		parent::__construct();
	}
	function getBreadCrumb($controller) {
		$sql = "SELECT parent, name 
		FROM gds_stock_menus 
		WHERE route = '$controller' 
		AND isdelete = 0 ";
		$pid = $this->model->query($sql)->execute();
		$arr = array();
		$breadcrumb = '';
		$this->getParent($pid[0]->parent, $arr);
		$c = count($arr) - 1;
		for ($i = $c; $i >= 0; $i--) {
			$breadcrumb .= $arr[$i];
		}
		//print_r($arr);
		$breadcrumb .= '<li ><a href="javascript:;" style="color:#3399FF">'.$pid[0]->name.'</a></li>';
		return $breadcrumb;
	}

	function getParent($id, &$arr) {
		$sql = " SELECT id, route, name, parent 
					FROM gds_stock_menus 
					WHERE id = '$id'
					AND isdelete = 0  ";
		$parent = $this->model->query($sql)->execute();
		if (!$parent) return;
		$pid = $parent[0]->parent;
		$pagename = $parent[0]->name;
		$route = $parent[0]->route;
		$breadcrumb = '<li><a href="'.$route.'">'.$pagename.'</a><i class="fa fa-angle-right"></i></li>';
		array_push($arr, $breadcrumb);
		$this->getParent($pid, $arr);
	}
}