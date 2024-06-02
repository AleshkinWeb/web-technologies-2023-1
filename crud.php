<?php
require 'db.php';

function doFeedbackAction() {
    global $pdo;
    $action = $_POST['action'];
    
    switch ($action) {
        case 'create':
            $stmt = $pdo->prepare("INSERT INTO reviews (product_id, author, content, rating) VALUES (?, ?, ?, ?)");
            $stmt->execute([$_POST['product_id'], $_POST['author'], $_POST['content'], $_POST['rating']]);
            break;
        case 'read':
            $stmt = $pdo->prepare("SELECT * FROM reviews WHERE product_id = ? ORDER BY created_at DESC");
            $stmt->execute([$_POST['product_id']]);
            $reviews = $stmt->fetchAll();
            echo json_encode($reviews);
            break;
        case 'update':
            $stmt = $pdo->prepare("UPDATE reviews SET author = ?, content = ?, rating = ? WHERE id = ?");
            $stmt->execute([$_POST['author'], $_POST['content'], $_POST['rating'], $_POST['id']]);
            break;
        case 'delete':
            $stmt = $pdo->prepare("DELETE FROM reviews WHERE id = ?");
            $stmt->execute([$_POST['id']]);
            break;
    }
}

doFeedbackAction();
?>