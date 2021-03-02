var review = require('../model/Review');
var mongoose = require('mongoose');
const Review = mongoose.model('Review');
module.exports = {
    saveWordToReview: (req) => {
        return new Promise(resolve => {
            Review.collection.insertOne({userID: req.userID, wordID: mongoose.mongo.ObjectId(req.wordID)}, (err, docs) => {
                if (!err) {
                    resolve(docs.ops[0]);
                } else {
                    resolve(null);
                }
            });
        });
    },
    countByUserAndWord: (req) => {
        return Review.count({userID: req.userID, wordID: mongoose.mongo.ObjectId(req.wordID)}).exec();
    }
}