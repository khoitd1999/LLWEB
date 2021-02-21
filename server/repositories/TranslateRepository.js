var translatedWord = require('../model/TranslatedWordModel');
var mongoose = require('mongoose');
const TranslateWord = mongoose.model('TranslatedWord');
module.exports = {
    saveText: (OriginText, TranslateText, PairCode) => {
        console.log('vào repository');
        var translate = new TranslateWord();
        var req = {OriginText: OriginText, TranslateText: TranslateText, PairCode: PairCode};
        translate.collection.insertOne(req,function(err) {
            if (err)
                console.log(err);
            else
                console.log('save translate word successful')
        });
    },
    findText: (originText, pairCode, pairCodeRevert) => {
        /*
            options:
            - i : Case-Insensitive
            - x: ingorne white space 
        */
        return TranslateWord.findOne({  $and: [ 
                                                {
                                                    $or: [
                                                        { OriginText: { $regex: '^' + originText + '$', $options: 'ix' } },
                                                        { TranslateText: { $regex: '^' + originText + '$', $options: 'ix' } }
                                                    ]
                                                },
                                                {
                                                    $or: [
                                                        { PairCode: { $regex: '^' + pairCode + '$', $options: 'ix' } },
                                                        { PairCode: { $regex: '^' + pairCodeRevert + '$', $options: 'ix' } },
                                                    ]
                                                }  
                                            ]
                                    }).exec();
    }
}