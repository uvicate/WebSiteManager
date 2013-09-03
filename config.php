<?php

require __DIR__.'/vendor/autoload.php';
use Cabinet\DBAL\Db;

$connection = Db::connection(array(
	'driver' => 'mysql',
	'username' => 'root',
	'password' => isset($_SERVER['DB']) ? '' : 'root',
	'database' => 'test_database',
));

?>