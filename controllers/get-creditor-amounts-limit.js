
const sql = require('mssql');
const db = require('../public/db');

exports.getCreditorAmounts = (req, res, next) =>{


    const userId = req.userData.userID
    db.executeSQL("select * from afw_SystemUsers" , function (data , err) {
        if (err){
            res.status(404).json({
                status: 0,
                data: err
            })
        }
        else {
            res.status(200).json({
                status: 1,
                data: data
            })
        }
    })
}