const sql = require('mssql');
const config = require('../public/dbConfig');




exports.getAllReportStatus = (req, res, next) =>{

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

    sql.close();
    const query = `exec krf.GetManagersAppFirstPage '${userId}', '${dateFrom}', '${dateUntil}', ${organizationUnit}, ${systemUserId}, ${workShift}, ${organization}`;
    sql.connect(config.config, function (err) {
        if (err) {
            res.status(500).json({
                status: 0 ,
                errorMessage: err ,
                data: 'internal  connection'
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
                    if (recordset.recordsets[0]){
                        res.status(200).json({
                            status: 1 ,
                            errorMessage: null ,
                            data: recordset.recordsets[0]
                        })
                        sql.close();
                    }
                    else {
                        res.status(404).json({
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