-- MySQL Script generated by MySQL Workbench
-- Thu Jan  2 13:57:58 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema restaurant_review
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema restaurant_review
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `restaurant_review` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `restaurant_review` ;

-- -----------------------------------------------------
-- Table `restaurant_review`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurant_review`.`category` (
  `category_id` INT NOT NULL,
  `category_name` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE INDEX `category_name_UNIQUE` (`category_name` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurant_review`.`category_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurant_review`.`category_list` (
  `category_list_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`category_list_id`),
  INDEX `category_id_idx` (`category_id` ASC) ,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `restaurant_review`.`category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurant_review`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurant_review`.`address` (
  `address_id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(128) NOT NULL,
  `postal_code` VARCHAR(6) NOT NULL,
  `phone` VARCHAR(16) NULL,
  `restaurant_googlemap_url` VARCHAR(2048) NULL,
  PRIMARY KEY (`address_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurant_review`.`list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurant_review`.`list` (
  `list_id` INT NOT NULL AUTO_INCREMENT,
  `restaurant_id` INT NULL,
  `list_name` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`list_id`),
  INDEX `restaurant_id_idx` (`restaurant_id` ASC) ,
  CONSTRAINT `restaurant_id`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `restaurant_review`.`restaurant` (`restaurant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurant_review`.`user_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurant_review`.`user_address` (
  `user_address_id` INT NOT NULL AUTO_INCREMENT,
  `user_address` VARCHAR(128) NOT NULL,
  `user_postal_code` VARCHAR(6) NOT NULL,
  `user_phone` VARCHAR(16) NULL,
  PRIMARY KEY (`user_address_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurant_review`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurant_review`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `list_id` INT NULL,
  `user_address_id` INT NOT NULL,
  `username` VARCHAR(32) NOT NULL,
  `user_profile` MEDIUMBLOB NULL,
  `user_password` VARCHAR(32) NOT NULL,
  `user_email` VARCHAR(320) NOT NULL,
  `user_gender` ENUM('M', 'F', 'O') NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) ,
  INDEX `list_id_idx` (`list_id` ASC) ,
  INDEX `user_address_id_idx` (`user_address_id` ASC) ,
  CONSTRAINT `list_id`
    FOREIGN KEY (`list_id`)
    REFERENCES `restaurant_review`.`list` (`list_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_address_id`
    FOREIGN KEY (`user_address_id`)
    REFERENCES `restaurant_review`.`user_address` (`user_address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurant_review`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurant_review`.`review` (
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `review_rating` TINYINT NOT NULL,
  `review_comment` VARCHAR(1024) NULL,
  `review_timestamp` DATETIME NOT NULL,
  PRIMARY KEY (`review_id`),
  INDEX `user_id_idx` (`user_id` ASC) ,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `restaurant_review`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurant_review`.`restaurant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurant_review`.`restaurant` (
  `restaurant_id` INT NOT NULL AUTO_INCREMENT,
  `category_list_id` INT NOT NULL,
  `address_id` INT NOT NULL,
  `review_id` INT NULL,
  `restaurant_name` VARCHAR(64) NOT NULL,
  `restaurant_description` VARCHAR(1024) NOT NULL,
  `restaurant_average_rating` FLOAT NOT NULL,
  `restaurant_image` MEDIUMBLOB NOT NULL,
  `restaurant_open_hours` VARCHAR(128) NOT NULL,
  `restaurant_website_url` VARCHAR(2048) NULL,
  `restaurant_price_range` TINYINT NULL,
  `restaurant_googleimage_url` VARCHAR(2048) NULL,
  PRIMARY KEY (`restaurant_id`),
  INDEX `category_list_id_idx` (`category_list_id` ASC) ,
  INDEX `review_id_idx` (`review_id` ASC) ,
  INDEX `address_id_idx` (`address_id` ASC) ,
  CONSTRAINT `category_list_id`
    FOREIGN KEY (`category_list_id`)
    REFERENCES `restaurant_review`.`category_list` (`category_list_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `restaurant_review`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `review_id`
    FOREIGN KEY (`review_id`)
    REFERENCES `restaurant_review`.`review` (`review_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
