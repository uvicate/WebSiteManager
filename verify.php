<?php
require_once __DIR__.'core/verify.class.php';

$v = new Verify();

echo json_encode($v->validate());
?>