var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: Schema.Types.String,
    },
    password: {
        type: Schema.Types.String
    },
    role: {
        type: Schema.Types.Number
    }
});

mongoose.model("User", userSchema);