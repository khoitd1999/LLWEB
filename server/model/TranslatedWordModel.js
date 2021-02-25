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
    },
    IsSave: {
        type: Schema.Types.Boolean
    }
});

mongoose.model("TranslatedWord", translatedWordSchema);
