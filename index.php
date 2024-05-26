<?php
date_default_timezone_set('UTC');
$title = 'title для шестьнадцатой лабораторной';
$h1  = 'h1 для шестьнадцатой лабораторной';
$dateYear = date("Y");

function GetDeclensions() {
    $dateHour = (int)date('H');
    $dateMinutes = (int)date('m');
    $result = (string)$dateHour;

    if ($dateHour == 1 or $dateHour == 21 ) {

        $result .= ' час ';

    }else if ($dateHour >= 5 and $dateHour <= 20) {
        
        $result .= ' часов ';

    } else {
        
        $result .= ' часа ';

    }

    $result .= (string)$dateMinutes;

    if ($dateMinutes != 11 and substr(((string)$dateMinutes),-1) == "1") {
        
        $result .= ' минута';

    } else if ((substr(((string)$dateMinutes), -1) == "2" or substr(((string)$dateMinutes), -1) == "3" or substr(((string)$dateMinutes), -1) == "4") and $dateMinutes < 12 and $dateMinutes > 14) {
        
        $result .= ' минуты';

    } else {
        
        $result .= ' минут';

    }

    return $result;
}
?>

<!DOCTYPE html>
  <html lang="ru">
  <head>
    <title><?= $title; ?></title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1><?= $h1; ?></h1>
    <p>Год: <?= $dateYear;?></p>
    <p>Время: <?= GetDeclensions(); ?></p>
  </body>
</html>