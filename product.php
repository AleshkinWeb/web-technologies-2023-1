<?php
require 'db.php';

$id = $_GET['id'];
$statement = $pdo->prepare("SELECT * FROM products WHERE id = ?");
$statement->execute([$id]);
$product = $statement->fetch();

$reviewStmt = $pdo->prepare("SELECT * FROM reviews WHERE product_id = ? ORDER BY created_at DESC");
$reviewStmt->execute([$id]);
$reviews = $reviewStmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= $product['name'] ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1><?= $product['name'] ?></h1>
    <img src="images/<?= $product['image'] ?>" alt="<?= $product['name'] ?>">
    <p>Цена: <?= $product['price'] ?> руб.</p>
    <p><?= $product['description'] ?></p>

    <h2>Отзывы</h2>
    <div id="reviews">
        <?php foreach ($reviews as $review): ?>
            <div class="review">
                <p><strong><?= $review['author'] ?></strong> (оценка: <?= $review['rating'] ?>)</p>
                <p><?= $review['content'] ?></p>
                <p><small><?= $review['created_at'] ?></small></p>
            </div>
        <?php endforeach; ?>
    </div>

    <h3>Оставить отзыв</h3>
    <form id="reviewForm">
        <input type="hidden" name="product_id" value="<?= $product['id'] ?>">
        <p><input type="text" name="author" placeholder="Ваше имя"></p>
        <p><textarea name="content" placeholder="Ваш отзыв"></textarea></p>
        <p><input type="number" name="rating" min="1" max="5" placeholder="Оценка (1-5)"></p>
        <p><button type="button" onclick="doFeedbackAction('create')">Отправить</button></p>
    </form>

    <script src="script.js"></script>
</body>
</html>