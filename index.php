<?php

//Задание 1

$a = 9;
$b = 10;

if ($a >= 0 and $b >= 0) {
    echo($a - $b);
} else if ($a < 0 and $b < 0) {
    echo($a * $b);
}
else{
    echo($a + $b);
}

//Задание 2
echo("\n");
$a = 7;

switch ($a) {
    case 0:
        echo(" 0");
    case 1:
        echo(" 1");

    case 2:
        echo(" 2");
    case 3:
        echo(" 3");
    case 4:
        echo(" 4");
    case 5:
        echo (" 5");
    case 6:
        echo(" 6");
    case 7:
        echo(" 7");
    case 8:
        echo(" 8");
    case 9:
        echo(" 9");
    case 10:
        echo(" 10");
    case 11:
        echo(" 11");
    case 12:
        echo(" 12");
    case 13:
        echo(" 13");
    case 14:
        echo(" 14");
    case 15:
        echo(" 15");
        break;
    default:
        echo("Выходит за рамки массива!");
}        

//Задание 3

function summation($a, $b){
    return $a + $b;
}

function subtraction($a, $b){
    return $a - $b;
}

function multiplication($a, $b){
    return $a * $b;
}

function division($a, $b){
    if($b != 0) {
        return $a / $b;
    }  
}

//Задание 4

function mathOperation($arg1, $arg2, $operation){
    switch($operation){
        case "Умножение":
            return multiplication($arg1, $arg2);
            break;
        case "Сложение":
            return summation($arg1, $arg2);
            break;
        case "Вычетание":
            return subtraction($arg1, $arg2);
            break;
        case "Деление":
            return division($arg1, $arg2);
            break;
        default:
            echo("Заданная функция ещё не реализована!");
            break;
    }
}

//Задание 5


//Задание 6

function power($val, $pow){
    if ($pow == 0) {
        return 1;
    }else if ($pow > 0) {
        return $val * power($val, $pow - 1);
    }else if ($pow < 0) {
        return power($val, $pow + 1) / $val;
    }
}

?>

<!DOCTYPE html>
  <html lang="ru">
  <head>
    <title>title</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
  </body>
</html>