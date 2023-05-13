CREATE TABLE `db_products`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `price` DOUBLE NOT NULL,
  `photoUrl` VARCHAR(255) NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`));
