var translateRepository = require('../repositories/TranslateRepository');

module.exports = {
    saveText: async (OriginText, TranslateText, fromCode, toCode) => {
        const pairCode = fromCode + "-" + toCode;
        console.log('Vào service');
        const obj = await translateRepository.saveText(OriginText, TranslateText, pairCode);
        return obj;
    },
    findText: async (originText, pairCode, pairCodeRevert) => {
        const obj = await translateRepository.findText(originText, pairCode, pairCodeRevert);
        return obj;
    },
    updateTextToReview: async (id) => {
        const obj = await translateRepository.updateTextToReview(id);
        return obj;
    }
}