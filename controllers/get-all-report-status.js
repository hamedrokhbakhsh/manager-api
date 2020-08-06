const sql = require('mssql');
const config = require('../public/dbConfig');




exports.getAllReportStatus = (req, res, next) =>{


    sql.close();
    const query = "exec krf.GetManagersAppFirstPage '"+ req.userData.userID +"'";
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