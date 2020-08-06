const sql = require('mssql');
const dbConfig = require('./dbConfig');


exports.executeSQL = function (query , callback) {


    sql.close();
    const conn = new sql.connection(dbConfig.config);
    console.log('okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    conn.connect().then(
        () =>{
            var req = new sql.Request(conn);
            req.query(query).then((recorded) =>{
                callback(recorded);
            }).catch((err) =>{
                callback(null , err);
            });
        })
        .catch(
        (err) =>{
            callback(null , err);
        });
}