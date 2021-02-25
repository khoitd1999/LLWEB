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
    const objResponse = {
        OriginText: '',
        TranslateText: '',
        PairCode: '',
        _id: ''
    };
    if (obj) {
        console.log(obj);
        objResponse._id = obj._id;
        objResponse.OriginText = req.query.tx;
        objResponse.PairCode = req.query.fromCode + '-' + req.query.toCode;
        if (obj.PairCode === pairCode) {
            objResponse.TranslateText = obj.TranslateText;
            res.json(objResponse);
        } else {
            objResponse.TranslateText = obj.OriginText;
            res.json(objResponse);
        }
    } else {
        // console.log('------------');
        setValueForAPI(req.query.toCode, req.query.tx);
        reqTranslate.end(async function (resTranslate) {
            if (resTranslate.error) {
                console.log(resTranslate.error);
            } else {
                console.log(resTranslate.body[0].translations[0]);
                const resultText = resTranslate.body[0].translations[0];
                // lưu ngầm
                const objSave = await translateService.saveText(req.query.tx, resultText.text, req.query.fromCode, req.query.toCode);
                res.json(objSave);
            }
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

router.post('/:id', async (req, res) => {
    // lưu để ôn => update lại trường IsSave
    const obj = await translateService.updateTextToReview(req.params.id);
    if (obj) {
        res.json(true);
    } else {
        res.json(false);
    }
});

module.exports = router;