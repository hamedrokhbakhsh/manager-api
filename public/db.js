const sql = require('mssql');
const dbConfig = require('./dbConfig');


exports.executeSql = (query , callback) => {
    const conn = new sql.connection(dbConfig.config);


};