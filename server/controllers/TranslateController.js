var express = require("express");
// HTTP libraries
var unirest = require("unirest");
var reqTranslate = unirest("POST", "https://microsoft-translator-text.p.rapidapi.com/translate");
var translateService = require('../services/TranslateService');
var router = express.Router();

router.get('/', async (req, res) => {
    const pairCode = req.query.fromCode + '-' + req.query.toCode;
    const pairCodeRevert = req.query.toCode + '-' + req.query.fromCode;
    const obj = await translateService.findText(req.query.tx, pairCode, pairCodeRevert);
    if (obj) {
        console.log(obj);
        if (obj.PairCode === pairCode) {
            res.json(obj.TranslateText);
        } else {
            res.json(obj.OriginText);
        }
    } else {
        // console.log('------------');
        setValueForAPI(req.query.toCode, req.query.tx);
        reqTranslate.end(function (resTranslate) {
            if (resTranslate.error) console.log(resTranslate.error);
            console.log(resTranslate.body[0].translations[0]);
            const resultText = resTranslate.body[0].translations[0];
            translateService.saveText(req.query.tx, resultText.text, req.query.fromCode, req.query.toCode);
            res.json(resultText.text);
        });
    }
});

function setValueForAPI(toCode, text) {
    reqTranslate.query({
        "to": toCode,
        "api-version": "3.0",
        "profanityAction": "NoAction",
        "textType": "plain"
    });
    reqTranslate.headers({
        "content-type": "application/json",
        "x-rapidapi-key": "178a6156a2msh235324da30fff1bp1ad24djsnb9776ea5ff92",
        "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
        "useQueryString": true
    });
    reqTranslate.type("json");
    reqTranslate.send([
        {
            "Text": text
        }
    ]);
}

module.exports = router;