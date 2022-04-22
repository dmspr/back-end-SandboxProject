const db = require('../config/db')

// let createQuery = `
// CREATE TABLE IF NOT EXISTS user (
// 	id INT NOT NULL AUTO_INCREMENT,
// 	name VARCHAR(50) NULL DEFAULT NULL,
// 	password VARCHAR(50) NULL DEFAULT NULL,
// 	email VARCHAR(50) NULL DEFAULT NULL,
// 	PRIMARY KEY (id)
// )
// COLLATE='utf8mb4_general_ci'
// ;
// `



// db.query(createQuery, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log('Table has been created');
// });



let createQuery = `
	CREATE TABLE IF NOT EXISTS products (
		id INT NOT NULL AUTO_INCREMENT,
		nameEvent VARCHAR(250) NOT NULL,
		date date NOT NULL,
		location varchar(50) NOT NULL
		price int NOT NULL,
		ticket int NOT NULL,
		description varchar(255) NOT NULL,
		PRIMARY KEY (id)
	)
COLLATE='utf8mb4_general_ci'
;
`

db.query(createQuery, function (error, results, fields) {
	if (error) throw error;
	console.log('Table has been created');
});


// // let alterQuery = "ALTER TABLE `Admin` CHANGE COLUMN `Name` `Name` VARCHAR(100)";

// db.query(alterQuery, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log('Table has been altered ');
// });