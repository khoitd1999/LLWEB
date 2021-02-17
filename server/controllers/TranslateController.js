var express = require("express");
// HTTP libraries
var unirest = require("unirest");
var reqTranslate = unirest("POST", "https://microsoft-translator-text.p.rapidapi.com/translate");
var translateService = require('../services/TranslateService');
var router = express.Router();

router.get('/', (req, res) => {
    // translateService.getText(req.query.tx);
    // res.json(translateService.getText(req.query.tx));

    reqTranslate.query({
        "to": "vi",
        "api-version": "3.0",
        "profanityAction": "NoAction",
        "textType": "plain"
    });

    // console.log(req);
    reqTranslate.headers({
        "content-type": "application/json",
        "x-rapidapi-key": "178a6156a2msh235324da30fff1bp1ad24djsnb9776ea5ff92",
        "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
        "useQueryString": true
    });


    reqTranslate.type("json");
    reqTranslate.send([
        {
            "Text": req.query.tx
        }
    ]);
    
    // console.log(req);

    reqTranslate.end(function (resTranslate) {
        if (resTranslate.error) console.log(resTranslate.error);
        console.log(resTranslate.body[0].translations[0]);

        const resultText = resTranslate.body[0].translations[0];
        
        res.json(resultText);
    });
});

module.exports = router;