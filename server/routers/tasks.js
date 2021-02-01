var express = require('express');
var router = express.Router();

// fix CORS between client and server
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

router.get('/text', (req, res, next) => {
    console.log(req.query.tx);
    res.json('khoitd' + req.query.tx);
});

module.exports = router;