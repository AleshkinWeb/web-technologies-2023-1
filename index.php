<?php
require 'db.php';

$statement = $pdo->query("SELECT * FROM products");
$products = $statement->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Каталог товаров</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Каталог товаров</h1>
    <div class="catalog">
        <?php foreach ($products as $product): ?>
            <div class="product">
                <a href="product.php?id=<?= $product['id'] ?>">
                    <img src="images/<?= $product['image'] ?>" alt="<?= $product['name'] ?>">
                    <h2><?= $product['name'] ?></h2>
                </a>
                <p>Цена: <?= $product['price'] ?> руб.</p>
            </div>
        <?php endforeach; ?>
    </div>
</body>
</html>