
const db = require('../config/db')
const jwt = require('jsonwebtoken')

function LoginUser(req, res) {
    let param = [req.body.email, req.body.password]
    let selectQuery = `SELECT * FROM user where email = ? and password = ?`

    db.query(selectQuery, param, function (error, results, fields) {

        if (results.length == 0) {
            return res.status(400).send({ message: 'Data not found', data: results })
        } else {
            if (req.body.password == results[0].password) {
                if (error) throw error;
                // Information about users saved to payload
                const payload = {
                    id: results.id,
                    email: results.email,
                }

                const token = jwt.sign(payload, 'secret', { expiresIn: '7d' })

                return res.send({ token: token })
            }
        }

    });
}

function GetUser(req, res) {
    let param = [req.params.id]
    let selectQuery = `SELECT name, email FROM user where id = ?`

    db.query(selectQuery, param, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: `Product ${req.params.username} is found`, data: results })
    });
}


module.exports = {
    LoginUser,
    GetUser
}
