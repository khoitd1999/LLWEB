var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var translatedWordSchema = new Schema({
    OriginText: {
        type: Schema.Types.String,
        trim: true
    },
    TranslateText: {
        type: Schema.Types.String,
        trim: true
    },
    PairCode: {
        type: Schema.Types.String,
        trim: true
    }
});

mongoose.model("TranslatedWord", translatedWordSchema);
