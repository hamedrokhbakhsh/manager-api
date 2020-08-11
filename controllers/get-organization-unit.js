
const sql = require('mssql');
const config = require('../public/dbConfig');
exports.getOrganizationUnit = (req, res, next) =>{

    const userId = req.userData.userID

    const queries ={
         organizationUint : `select ID, Name from cmn_OrganizationInformations where ID in ( select OrganizationUnit from afw_SystemUserOrganizationUnits where SystemUser = \'${userId}\')`,
         systemUser : 'select ID , Name from afw_SystemUsers' ,
         organization : `select ID, Title from cmn_Organizations Org where Org.ID in ( select OrgUnitRel.Organization from afw_SystemUserOrganizationUnits UserOrgUnit left join cmn_OrganizationUnitRelations OrgUnitRel on OrgUnitRel.OrganizationUnit = UserOrgUnit.OrganizationUnit where SystemUser = '${userId}');`,
         workShift : 'select ID , Name from krf_WorkShifts'
    }

    sql.close();

    sql.connect(config.config).then(() => {
        return sql.query(queries.organizationUint)
    }).then(organizationUnit => {
        const organizationUnits = organizationUnit.recordsets[0] ;
         sql.query(queries.organization).then(organization => {
            const organizations = organization.recordsets[0] ;
             sql.query(queries.systemUser).then(systemUser => {
                const systemUsers = systemUser.recordsets[0] ;
                 sql.query(queries.workShift).then(workshift => {
                    const workshifts = workshift.recordsets[0] ;
                    sql.close();
                    res.status(200).json({
                        status: 1 ,
                        errorMessage: null ,
                        data: [
                            {
                                orgarnization: organizations ,
                                organizationUnit : organizationUnits ,
                                systemUser : systemUsers ,
                                workshift : workshifts

                            }
                        ]
                    })


                }).catch(err => {
                    res.status(500).json({
                        status: 0 ,
                        errorMessage: err ,
                        data: 'internal  connection'
                    })
                })



            }).catch(err => {
                res.status(500).json({
                    status: 0 ,
                    errorMessage: err ,
                    data: 'internal  connection'
                })
            })




        }).catch(err => {
            res.status(500).json({
                status: 0 ,
                errorMessage: err ,
                data: 'internal  connection'
            })
        })




    }).catch(err => {
        res.status(500).json({
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