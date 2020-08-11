
const sql = require('mssql');
const db = require('../public/db');
const config = require('../public/dbConfig');

exports.getDebtorAmounts = (req, res, next) =>{
    const userId = req.userData.userID ;
    const dateFrom = req.body.dateFrom ;
    const dateUntil = req.body.dateUntil ;
    let organizationUnit =  null;
    if (req.body.organizationUnit){
        organizationUnit = "'"+req.body.organizationUnit+"'" ;
    }
    let systemUserId = null ;
    if (req.body.systemUserId){
        systemUserId = "'"+req.body.systemUserId+"'" ;
    }

    let workShift = null ;
    if (req.body.workShift){
        workShift = "'"+req.body.workShift+"'" ;
    }

    let organization = null ;
    if (req.body.organization){
        organization = "'"+req.body.organization+"'" ;
    }

    const query = `exec krf.GetManagersDayDebtorAmountsReport '${userId}', '${dateFrom}', '${dateUntil}', ${organizationUnit}, ${systemUserId}, ${workShift}, ${organization}`



    sql.close();
    sql.connect(config.config).then(() => {
        return sql.query(query)
    }).then(result => {
        res.status(200).json({
            status: 1 ,
            errorMessage: query ,
            data: result.recordsets[0]
        })
    }).catch(err => {
        res.status(404).json({
            status: 0 ,
            errorMessage: err ,
            data: 'internal  connection'
        })
    })


    sql.on('error', err => {
        res.status(400).json({
            status: 0 ,
            errorMessage: err ,
            data: 'internal  connection'
        })
    });

}