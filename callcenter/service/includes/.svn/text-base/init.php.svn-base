<?php
//error_reporting(E_ALL | E_STRICT);
//ini_set("display_errors", 0);
$dirName = dirname(__FILE__);
$dirName = substr($dirName, 0, strlen($dirName) - strlen('includes/'));
require_once($dirName .'/configs/config.php' );
require_once($dirName .'/define/define.php' );
require_once($dirName .'/libs/pear/db.php');

if ( !isset( $db ) ) {
	$dsn = DB_TYPE . '://' . DB_USER . ':' . DB_PASS . '@' . DB_HOST . '/' . DB_NAME;
	$db_options = array('persistent' => FALSE );

	$db = @db::connect( $dsn, $db_options );	
	
	function errhndl1 ( $err ) {		
		//echo '<pre>' . $err->message;
        //echo '<pre>'; print_r( $err );
		//die();
	}
	
	PEAR::setErrorHandling( PEAR_ERROR_CALLBACK, 'errhndl1' );
	if (PEAR::isError($db)) {		
	    die($db->getMessage());	    
	}
	$db->setFetchMode( DB_FETCHMODE_ASSOC );

	$db->querydata("SET NAMES 'utf8'");
}
