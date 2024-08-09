<?php
$myfile = fopen("output.txt", "w") or die("Unable to open file!");
date_default_timezone_set('Europe/Warsaw');
$date = date('d-m-y h:i:s');
fwrite($myfile, $date);
fclose($myfile);
?>