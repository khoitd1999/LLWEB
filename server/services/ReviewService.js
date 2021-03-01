const userRepository = require('../repositories/UserRepository');
const reviewRepository = require('../repositories/RevievRepository');

module.exports = {
    saveWordToReview: async (request) => {
        const user = await userRepository.findIDByUserName(request.user);
        const objRequest = { userID: user._id, wordID: request.word };
        const objReponse = await reviewRepository.saveWordToReview(objRequest);
        return objReponse;
    }
}