<?php
/**
 * @author Sonnk
 * @copyright 2011
 */
 
class incModelMenu extends CI_Model{
	function __construct(){
		parent::__construct();
	}
	function getMenu($groupid){	
		#region Phan quyen
		#end 
		$lang = $this->site->GetSession("language");
		$right = '';
		$sql = "
				select gm.`name` as menuName, gm.keylang, gm.ordering, gm.route as controller, gm.classicon, gm.id as pageid
				from gds_stock_menus gm
				where gm.parent = 0
				and gm.isdelete = 0
				order by gm.ordering asc
		";
		$parent_menu = $this->model->query($sql)->execute();
		$menu = '';
		foreach($parent_menu as $item){
			$asub = $this->getChildren($item->pageid,$groupid,$right,$lang);
            if($asub){
				$menuName = $item->menuName;
				if(isset($lang['menu'][$item->keylang])){
					$menuName = $lang['menu'][$item->keylang];
				}
				$menu.= '<li class="classic-menu-dropdown">';
				$menu.= '<a data-toggle="dropdown" data-hover="dropdown" data-close-others="true" href="">';
				$menu.= '<i class="fa '.($item->classicon).'"></i>'.$menuName.'<i class="fa fa-angle-down"></i>';
				$menu.= '</a>';
				$menu.= '<ul class="dropdown-menu">';
				$menu.= $asub;
				$menu.= '</ul></li>';
			}
			else{
				//$menu.='<li><a href="'.base_url().($item->controller).'.html"><span class="'.($item->classs).'"></span><span class="text">'.($item->pagename).'</span></a></li>';  
			}
		}
		return $menu;	
    }
    private function getChildren($id,$groupid,$right,$lang){
		$controller = 'route';
		$sql = "
				select gm.`name` as menuName, gm.keylang, gm.ordering, gm.route as controller, gm.classicon, gm.id as pageid
				from gds_stock_menus gm
				where gm.parent = $id
				order by gm.ordering asc
		";
		/*and gm.id in ($right)*/
		$children = $this->model->query($sql)->execute();
							
        $menu = '';
		foreach($children as $item){
			 $asub = $this->getChildren($item->pageid,$groupid,$right,$lang);   
			 if($asub){
				$menuName = $item->menuName;
				if(isset($lang['menu'][$item->keylang])){
					$menuName = $lang['menu'][$item->keylang];
				}
				$menu.= '<li class="dropdown-submenu">';
				$menu.= '<a href="javascript:;">'.$menuName.'</a>';
				$menu.= '<ul class="dropdown-menu">';
				$menu.=$asub;
				$menu.='</ul></li>';
			 }
			 else{
				$menu.='<li><a href="'.($item->controller).'">'.($item->menuName).'</a></li>'; 
			 }
		}
		return $menu;
    } 
}