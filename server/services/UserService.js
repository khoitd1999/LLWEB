var userRepository = require('../repositories/UserRepository')
module.exports = {
    createAccount: async (user) => {
        const count = await userRepository.checkAccountExist(user.username);
        let obj = null;
        if (count > 0) {
            console.log('User đã tồn tại');
        } else {
            obj = await userRepository.createAccount(user);
        }
        return obj;
    }
}