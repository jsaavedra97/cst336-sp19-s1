<?php
$state = array();
$state["state"]   = "California";
$state["capital"] = "Sacamento";

echo json_encode($state);

$stateArray = array();
array_push($stateArray, $state);

$state["state"]   = "Illinois";
$state["capital"] = "Springfield";

array_push($stateArray, $state);

echo json_encode($stateArray[rand(0,1)]);

?>