<?php
//Задание 1

function printWhile(){
    $iterator = 0;
    $max = 10;
    do{
        if ($iterator == 0) {
            echo $iterator . " - это ноль.\n";
        }
        else if($iterator % 2 == 0){
            echo $iterator . " - это четное число.\n";
        } else{
            echo $iterator . " - это нечетное число.\n";
        }
        $iterator++;
    }while($iterator <= $max);
    
}

//Задание 2

$array = array("Московская область" => array("Москва", "Зеленоград", "Клин"),
    "Ленинградская область" => array("Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"),
    "Рязанская область" => array("Рязань", "Скопин", "Сасово"));

foreach ($array as $city => $cities) {
    echo ($city .":\n");
    foreach ($cities as $town){
        echo ($town .", ");
    }
    echo ("\n");
}


//Задание 3


function transmorph($text) {
    
    $alphabet = array(
        'а' => 'a',
        'б' => 'b', 
        'в' => 'v', 
        'г' => 'g', 
        'д' => 'd',
        'е' => 'e', 
        'ё' => 'yo', 
        'ж' => 'zh', 
        'з' => 'z', 
        'и' => 'i',
        'й' => 'y', 
        'к' => 'k', 
        'л' => 'l', 
        'м' => 'm', 
        'н' => 'n',
        'о' => 'o', 
        'п' => 'p', 
        'р' => 'r', 
        'с' => 's', 
        'т' => 't',
        'у' => 'u', 
        'ф' => 'f', 
        'х' => 'h', 
        'ц' => 'ts', 
        'ч' => 'ch',
        'ш' => 'sh', 
        'щ' => 'sch', 
        'ъ' => '', 
        'ы' => 'y', 
        'ь' => '',
        'э' => 'e', 
        'ю' => 'yu', 
        'я' => 'ya',
    );

    $result = '';
    $text = mb_strtolower($text); 

    
    for ($i = 0; $i < mb_strlen($text); $i++) {
        $char = mb_substr($text, $i, 1);
        
        if (array_key_exists($char, $alphabet)) {
            $result .= $alphabet[$char];
        } else {
            $result .= $char; 
        }
    }
    return $result;
}

echo ("\n");

//Задание 5

echo ("\n");

$menu =  [
    ['name' => 'Меню', 'children' => 
        [
            [
                'name' => 'Верхний уровень', 'children' => 
                [
                    [
                        'name' => 'Средний уровень', 'children' => 
                        [
                            [
                                'name' => 'Нижний уровень'
                            ],
                        ]
                    ]
                ]
            ]
        ],
    ],
];

function createMenu($menu) {
    echo ("<ul>");
    foreach ($menu as $value) {
        echo ("<li>");
        echo  ("{$value['name']}");
        if (isset($value['children'])) {
            createMenu($value['children']);
        }
        echo ("</li>");
    }
    echo ("</ul>");
}
createMenu($menu);

//Задание 6
echo ("\n");
foreach ($array as $city => $cities) {
    echo ($city .":\n");
    foreach ($cities as $town){
        $str_town = mb_strtolower($town);
        if (mb_substr($str_town, 0, 1) == 'к') {
            echo ($str_town .", ");
        }
    }
    echo ("\n");
}

?>

<!DOCTYPE html>
  <html lang="ru">
  <head>
    <title>title</title>
    <link rel="stylesheet" href="css/style.css">
    <p>Год метод первый: <?=date("Y")?></p>
    <p>Год метод второй: <?echo(date("Y"))?></p>
    <p>Год метод третий: <?print(date("Y"))?></p>
  </head>
  <body>
  </body>
</html>