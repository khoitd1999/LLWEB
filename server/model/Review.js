var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    word: {
        type: Schema.Types.ObjectId,
        ref: 'TranslatedWord'
    }
});

mongoose.model('Review', reviewSchema);