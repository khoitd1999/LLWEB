var translateRepository = require('../repositories/TranslateRepository');

module.exports = {
    saveText: (OriginText, TranslateText, fromCode, toCode) => {
        const pairCode = fromCode + "-" + toCode;
        console.log('Vào service');
        translateRepository.saveText(OriginText, TranslateText, pairCode);
    },
    findText: async (originText, pairCode, pairCodeRevert) => {
        const obj = await translateRepository.findText(originText, pairCode, pairCodeRevert);
        return obj;
    }
}