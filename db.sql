CREATE DATABASE shop;

USE shop;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    author VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    rating INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

USE shop;

INSERT INTO products (name, image, price, description) VALUES
('Product 1', 'product1.jpg', 100.00, 'Description for Product 1'),
('Product 2', 'product2.jpg', 200.00, 'Description for Product 2'),
('Product 3', 'product3.jpg', 300.00, 'Description for Product 3'),
('Product 4', 'product4.jpg', 400.00, 'Description for Product 4'),
('Product 5', 'product5.jpg', 500.00, 'Description for Product 5');

USE shop;

INSERT INTO reviews (product_id, author, content, rating) VALUES
(1, 'Alice', 'Great product!', 5),
(1, 'Bob', 'Not bad, but could be better.', 3),
(2, 'Charlie', 'Excellent value for money.', 4),
(3, 'Dave', 'I did not like it.', 2),
(4, 'Eve', 'Amazing quality!', 5),
(5, 'Frank', 'Just okay.', 3);