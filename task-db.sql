DROP DATABASE IF EXISTS `tasks`;
CREATE DATABASE `tasks`;
USE `tasks`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
	`id` int NOT NULL AUTO_INCREMENT,
    `email` varchar(100) NOT NULL UNIQUE,
    `password` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
	`id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `description` varchar(200) NOT NULL,
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
	`id` int NOT NULL AUTO_INCREMENT,
    `group_id` int NOT NULL,
    `name` varchar(100) NOT NULL,
    `content` varchar(200) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `group_id_FK_idx` (`group_id`),
    CONSTRAINT `task_group_FK` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `group_users`;
CREATE TABLE `group_users` (
	`group_id` int NOT NULL,
    `user_id` int NOT NULL,
    PRIMARY KEY (`group_id`, `user_id`),
    KEY `group_id_FK_idx` (`group_id`),
    KEY `user_id_FK_idx` (`user_id`),
    CONSTRAINT `group_users_group_FK` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `group_users_user_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `task_users`;
CREATE TABLE `task_users` (
	`task_id` int NOT NULL,
    `user_id` int NOT NULL,
    PRIMARY KEY (`task_id`, `user_id`),
    KEY `task_id_FK_idx` (`task_id`),
    KEY `user_id_FK_idx` (`user_id`),
    CONSTRAINT `task_users_task_FK` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `task_users_user_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* ----- INSERT DATA ----- */

LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES
	(1, 'jdoug344@students.bju.edu', 'password');
UNLOCK TABLES;

LOCK TABLES `groups` WRITE;
INSERT INTO  `groups` VALUES
	(1, 'GCU 391', 'Javascript Web Application Development'),
    (2, 'Chores', 'Just chores.');
UNLOCK TABLES;

LOCK TABLES `tasks` WRITE;
INSERT INTO `tasks` VALUES
	(1, 1, 'Activity 0', 'Tools Installation & Initial Applications'),
    (2, 1, 'Activity 1', 'Express API'),
    (3, 1, 'Activity 2', 'Angular Tools & First App'),
    (4, 2, 'Weedwhack Yard', ''),
    (5, 2, 'Pick Blueberries', '');
UNLOCK TABLES;

LOCK TABLES `group_users` WRITE;
INSERT INTO `group_users` VALUES
	(1, 1),
    (2, 1);
UNLOCK TABLES;

LOCK TABLES `task_users` WRITE;
INSERT INTO `task_users` VALUES
	(1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 1);
UNLOCK TABLES;
