var user = require('../model/UserModel');
var mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {
    createAccount: async (user) => {
        return new Promise(resolve => {
            User.collection.insertOne(user, (err, docs) => {
                if (err)
                    console.log(err);
                else {
                    console.log('create user successful');
                    resolve(docs.ops[0]);
                }
            });
        });
    },
    checkAccountExist: (name) => {
        return User.count(
            { username: { $regex: '^' + name + '$', $options: 'i' } }
        ).exec();
    }
}