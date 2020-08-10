
const sql = require('mssql');
const db = require('../public/db');

exports.getCreditorAmounts = (req, res, next) =>{

    const query1 = `exec krf.GetManagersDayCreditorAmountsReport '807bda65-190a-4c00-94bd-1ba2f20043c3', '2020/01/01', '2020/12/01', null, null, null, null`
    const userId = req.userData.userID
    const query = `${userId}`;
    sql.close();



}