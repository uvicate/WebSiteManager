<?php
$r = __DIR__.'/../../../';
require_once ($r.'init.php');


$r = array(
		'success' => true, 
		'message' => 'Welcome', 
		'redirect' => $wbsm['redirect_url']
	);

echo json_encode($r);
?>