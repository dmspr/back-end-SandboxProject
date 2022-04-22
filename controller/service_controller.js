const db = require('../config/db')
// const mysql = require('mysql');

// function CreateUser (req, res) {

//     let data = { 
//         password:req.body.password,  
//         name:req.body.name,
//         email :req.body.email,
//     };

//     let searchQuery = "SELECT * FROM user WHERE name = ?"
//     let insertQuery = "INSERT INTO user SET ?";

//     db.query(searchQuery, req.body.Username,function (error, results, fields) {
//         if (results.length != 0) {
//             res.send({ message: 'User already exists'}) 
//         }else{    
//                 db.query(insertQuery, data,function (error, results, fields) {
//                 if (error) throw error;
//                 res.send({ message: 'New User has been inserted'})
//             });
//         } 
//     });
// }

function CreateUser(req, res) {
    let data = [req.body.name, req.body.email, req.body.password]

    let insertQuery = `INSERT INTO user (name, email, password) VALUES (?,?,?);`

    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error

    });

    res.send({ message: 'User registered successfully' })
}


function DeleteUser(req, res) {
    let deleteQuery = "DELETE FROM user WHERE id=" + req.params.id + "";
    db.query(deleteQuery, function (err, deleted) {
        if (err) throw err;
        res.send({ message: 'Data has been deleted' })
    });
}

function AddEvent(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO products (nameEvent,organized,date,katagori,location,price,ticket,description) VALUES (?);`

    db.query(insertQuery, [[data.nameEvent, data.organized, data.date, data.katagori, data.location, data.price, data.ticket, data.description]], function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Product has been inserted' })
}

function DeleteEvent(req, res) {
    let deleteQuery = "DELETE FROM products WHERE id= ?";
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
        res.send({ message: 'Product has been deleted' })
    });
}

function updateEvent(req, res) {
    let updateQuery = "UPDATE event SET Event_name = '" + req.body.Event_name + "',lokasi='" + req.body.lokasi + "',Date='" + req.body.Date + "',Deskripsi='" + req.body.Deskripsi + "' WHERE id =" + req.params.id;


    db.query(updateQuery, function (error, result, updated) {
        if (error) throw error;
        res.send({ message: 'Data has been updated', updated })
    });
}


function listEvent(req, res) {
    let selectQuery = `SELECT * FROM products`;

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ results })
    });
}

function listEventId(req, res) {
    let selectQuery = `SELECT * FROM products where id = ?`;
    let data = [req.params.id]
    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ results })
    });
}



module.exports = {
    CreateUser,
    DeleteUser,
    AddEvent,
    DeleteEvent,
    updateEvent,
    listEvent,
    listEventId
}

