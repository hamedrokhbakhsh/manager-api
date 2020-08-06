
const sql = require('mssql');
const config = require('../public/dbConfig');
exports.getOrganizationUnit = (req, res, next) =>{

    const userId = req.userData.userID


    const query = 'select ID, Name from cmn_OrganizationInformations where ID in ( select OrganizationUnit from afw_SystemUserOrganizationUnits where SystemUser = \''+userId+'\')'

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
                        res.status(200).json({
                            status: 1 ,
                            errorMessage: null ,
                            data: recordset.recordsets[0]
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