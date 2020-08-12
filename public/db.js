const sql = require('mssql');
const config = require('./dbConfig');

const query = 'select * from krf_WorkShifts'
exports.executeSQL = function (callback) {




    var conn = new sql.connection(config.config);
    console.log('okkkkkkkkkkkkkkkkkkkkkkkkk');
    conn.connect().then(
        () =>{
            var req = new sql.Request(conn);
            req.query(query).then((recorded) =>{
                callback(recorded);
                sql.close();
            }).catch((err) =>{
                callback(null , err);
                sql.close();
            });
        })
        .catch(
        (err) =>{
            callback(null , err);
            sql.close();
        });
}