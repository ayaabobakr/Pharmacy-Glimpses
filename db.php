<?php

$serverName = "mssql-132712-0.cloudclusters.net,10130"; //serverName\instanceName

// Since UID and PWD are not specified in the $connectionInfo array,
// The connection will be attempted using Windows Authentication.
$connectionInfo = array( "Database"=>"Gimpses", "UID"=>"admin", "PWD"=>"#Sahar2023");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( !$conn ) {
     
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));

}



?>



