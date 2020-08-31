const dotenv =require('dotenv').config();
const db = require('../public/db');
const sql = require('mssql');
const config = require('../public/dbConfig');
const jwt = require('jsonwebtoken');



exports.login =  (req, res, next) => {

    const username = req.body.username ;
    const password = req.body.password ;

    //query = 'select ID, Name from afw_SystemUsers Where username = N\''+username+'\' and loginPassword = N\''+password+'\' AND isActive = 1  AND isAdmin = 1 ' ;

    if (username && password){
        const result = [{
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJDQTFFNjAzMC1EQUEzLTQ5MEEtQUU4NS0xNjEwODZEOUMxNUMiLCJpYXQiOjE1OTczMDM2MzZ9.jYDRXv2QPPjrp5w62lKrZNQxlw8ZwEH0FsQeWbMT9z0' ,
            Name: 'ali'
        }]
        res.status(200).json({
            status: 1 ,
            errorMessage: null ,
            data: result
        })
    }else {
        res.status(404).json({
            status: 0 ,
            errorMessage: null ,
            data: 'err'
        })
    }




}
