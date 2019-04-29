<!DOCTYPE html>
<?php
require __DIR__ . '/vendor/autoload.php';

$log = new Monolog\Logger('test');
$log->pushHandler(new Monolog\Handler\StreamHandler('app.log', Monolog\Logger::WARNING));
$log->addInfo('this is also a test');

echo "Hello World!!"
?>
