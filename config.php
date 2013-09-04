<?php

require __DIR__.'/vendor/autoload.php';
use Cabinet\DBAL\Db;

$wbsm = array(
	'connection' => '',
	'img_path' => '/',
	'redirect_url' => '/'
);

$wbsm['connection'] = Db::connection(array(
	'driver' => 'mysql',
	'username' => 'root',
	'password' => isset($_SERVER['DB']) ? '' : 'root',
	'database' => 'test_database',
));

?>