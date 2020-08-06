const jwt = require('jsonwebtoken');
const dotenv =require('dotenv').config();

module.exports = (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env["PRIVATE_KEY"]) ;
        req.userData = decoded ;
        next()
    }catch (e) {
        res.status(401).json({
            status: 0 ,
            errorMessage: 'failed auth' ,
            data: null
        })
    }
    
    
}