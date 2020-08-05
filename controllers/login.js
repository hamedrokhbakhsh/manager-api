const dotenv =require('dotenv').config();
const db = require('../public/db');
const sql = require('mssql');
const config = require('../public/dbConfig');
const jwt = require('jsonwebtoken');



exports.login =  (req, res, next) => {

    const username = req.body.username ;
    const password = req.body.password ;

    query = 'select ID, Name from afw_SystemUsers Where username = N\''+username+'\' and loginPassword = N\''+password+'\' AND isActive = 1  AND isAdmin = 1 ' ;

    if (username && password){
        sql.connect(config.config, function (err) {
            if (err) {
                res.status(500).json({
                    status: 0 ,
                    errorMessage: err ,
                    data: 'internull  connection'
                })

            }

            var request = new sql.Request();
            request.query(query,
                function (err, recordset) {
                    try{
                        if (err) {
                            res.status(500).json({
                                status: 0 ,
                                errorMessage: err ,
                                data: 'can not connection to sql server'
                            })
                        }
                        if (recordset.recordsets[0][0]){
                            const result = {
                                token: '' ,
                                Name: ''
                            }
                            result.token = jwt.sign({userID: recordset.recordsets[0][0].ID } , process.env["PRIVATE_KEY"]);
                            result.Name = recordset.recordsets[0][0].Name;
                            res.status(200).json({
                                status: 1 ,
                                errorMessage: null ,
                                data: result
                            })
                            sql.close();
                        }
                        else {
                            res.status(204).json({
                                status: 0 ,
                                errorMessage: 'user not found' ,
                                data: null
                            })
                            sql.close();
                        }
                        sql.close();
                    }catch (e) {
                        res.status(500).json({
                            status: 0 ,
                            errorMessage: e ,
                            data: 'internull  connection'
                        })
                    }

                });
        });
    }
    else {
        res.status(404).json({
            status: 0 ,
            errorMessage: 'invalid ' ,
            data: null
        })
    }





}
