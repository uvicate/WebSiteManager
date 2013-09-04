<?php
$r = __DIR__.'/../../';
require_once ($r.'config.php');

class Verify {
	private $db;

	public function __construct(){
		$this->initializeDB();
	}

	public function __set($p, $v){
		$this->{$p} = $v;
	}

	public function __get($p){
		return $this->{$p};
	}

	private function initializeDB(){
		global $wbsm;
		$this->db = $wbsm['connection'];
	}

	public function validate(){
		return true; // For testing purposes only!
	}
}

?>