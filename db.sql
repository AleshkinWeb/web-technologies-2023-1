CREATE DATABASE menu_db;

USE menu_db;

CREATE TABLE menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_id INT DEFAULT NULL,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255) DEFAULT NULL,
    FOREIGN KEY (parent_id) REFERENCES menu_items(id)
);

INSERT INTO menu_items (parent_id, title, url) VALUES (NULL, 'Уровень 1', '/level1');
INSERT INTO menu_items (parent_id, title, url) VALUES (NULL, 'Уровень 2', '/level2');
INSERT INTO menu_items (parent_id, title, url) VALUES (NULL, 'Уровень 3', '/level3');
INSERT INTO menu_items (parent_id, title, url) VALUES (NULL, 'Уровень 4', '/level4');

INSERT INTO menu_items (parent_id, title, url) VALUES (3, 'Уровень 3.1', '/level3/level1');
INSERT INTO menu_items (parent_id, title, url) VALUES (3, 'Уровень 3.2', '/level3/level2');
INSERT INTO menu_items (parent_id, title, url) VALUES (3, 'Уровень 3.3', '/level3/level3');

INSERT INTO menu_items (parent_id, title, url) VALUES (6, 'Уровень 3.2.1', '/level3/level2/level1');
INSERT INTO menu_items (parent_id, title, url) VALUES (6, 'Уровень 3.2.2', '/level3/level2/level2');