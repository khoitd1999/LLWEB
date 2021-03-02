var translatedWord = require('../model/TranslatedWordModel');
var mongoose = require('mongoose');
const { Db } = require('mongodb');
const TranslateWord = mongoose.model('TranslatedWord');
module.exports = {
    saveText: (OriginText, TranslateText, PairCode) => {
        console.log('vào repository');
        var translate = new TranslateWord();
        var req = {OriginText: OriginText, TranslateText: TranslateText, PairCode: PairCode, IsSave: false};
        return new Promise((resolve) => {
            translate.collection.insertOne(req,function(err, docs) {
                if (err)
                    console.log(err);
                else {
                    console.log('save translate word successful');
                    resolve(docs.ops[0]);
                }   
            });
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
                                                        { OriginText: { $regex: '^' + originText + '$', $options: 'i' } },
                                                        { TranslateText: { $regex: '^' + originText + '$', $options: 'i' } }
                                                    ]
                                                },
                                                {
                                                    $or: [
                                                        { PairCode: { $regex: '^' + pairCode + '$', $options: 'i' } },
                                                        { PairCode: { $regex: '^' + pairCodeRevert + '$', $options: 'i' } },
                                                    ]
                                                }  
                                            ]
                                    }).exec();
    },
    updateTextToReview: (id) => {
        return TranslateWord.updateOne({_id: id}, { IsSave : true}).exec();
    }
}