const routesDevice = require('./Devices');
const routesUser = require('./Users');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.use("/devices", routesDevice);
router.use("/users", routesUser);
router.get('/check/:token', (req, res, next) => {
    // try {
        const decode = jwt.verify(req.params.token, process.env.SECRET_KEY);
        const d = new Date(0);
        d.setUTCSeconds(decode.exp);
        if(d > Date.now ) {
            console.log(d);
            console.log(Date.now);
            return res.status(200).json({'state' : true});
        }
        return res.status(403).json({'state' : false, 'error' : decode}); 
})
module.exports = router;

