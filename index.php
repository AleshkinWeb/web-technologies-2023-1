<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "menu_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function getMenuItems($parent_id = NULL) {
    global $conn;
    $sql = "SELECT * FROM menu_items WHERE parent_id " . ($parent_id === NULL ? "IS NULL" : "= $parent_id");
    $result = $conn->query($sql);
    $items = [];
    while ($row = $result->fetch_assoc()) {
        $items[] = $row;
    }
    return $items;
}

function renderMenu($parent_id = NULL) {
    $items = getMenuItems($parent_id);
    if (count($items) > 0) {
        echo '<ul>';
        foreach ($items as $item) {
            echo '<li>';
            echo '<a href="' . $item['url'] . '">' . $item['title'] . '</a>';
            renderMenu($item['id']);
            echo '</li>';
        }
        echo '</ul>';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
    <style>
        ul {
            list-style-type: none;
        }
        li {
            margin: 5px 0;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <nav>
        <?php renderMenu(); ?>
    </nav>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('nav a');
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    const nextElement = this.nextElementSibling;
                    if (nextElement && nextElement.tagName === 'UL') {
                        event.preventDefault();
                        nextElement.classList.toggle('hidden');
                    }
                });
            });
        });
    </script>
</body>
</html>