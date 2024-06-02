<?php

//Запускал, писал, тестировал через xamml

$dirs = array("original/", "small/", "logs/");

function galleryUpdate($dirs) {
    
    foreach($dirs as $dir){
        if (!is_dir($dir)) {
            mkdir($dir);
        }
    }
    
    if(!file_exists("logs/log.txt")) { file_put_contents("logs/log.txt", ""); };

    foreach (array_slice(scandir($dirs[0]), 2) as $image) {
        echo '<a target="_blank" href="' . $dirs[0] . $image . '">
        <img src="' . $dirs[1] . $image . '" alt="\'$image\'"></a>';
    }

};

function loging(){

    if(!file_exists("logs/log.txt")) exit("Файл не найден"); 
    $file_arr = file("logs/log.txt"); 
    $lines = count($file_arr); 

    $dir = opendir("logs/");
    $count = 0;
    while($file = readdir($dir))
    {
        if($file == '.' || $file == '..' || is_dir("logs/log.txt")) continue;
        $count++;
    }

    $logTime = date('H:i:s');

    if ($lines < 10){
        file_put_contents("logs/log.txt", $logTime . PHP_EOL, FILE_APPEND);
    }
    else {
        copy("logs/log.txt", "logs/log".($count+1).".txt");
        unlink("logs/log.txt");
        file_put_contents("logs/log.txt", $logTime . PHP_EOL, FILE_APPEND);
    }
}

function check_files() {
    $file = "original/". basename($_FILES['img']['name']);

    if (file_exists($file)) {
        echo "Файл уже существует!";
        return false;
    }

    if ($_FILES['img']['type']  != 'image/png') {
        echo "Не допустимое расширение файла" ;
        return false;
    }

    if ($_FILES['img']['size'] > 1234561) {
        echo "Размер файла выше допустимого";
        return false;
    }

    return true;
}

if (!empty($_FILES)) {
    if (check_files()) {
        $path = "original/" . $_FILES["img"]["name"];
        if (move_uploaded_file($_FILES['img']['tmp_name'], $path)) {
            $img = imagecreatefrompng($path);
            $imgScale = imagescale($img , 100);
            imagepng($imgScale, "small/" . $_FILES["img"]["name"]);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Галерея фотографий</title>
  </head>
    <body>
        <?php galleryUpdate($dirs);?>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="img">
            <input type="submit" value="Загрузить">
        </form>
    </body>
</html>

<?php 
loging();
?>