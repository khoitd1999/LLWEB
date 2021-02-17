var translateRepository = require('../repositories/TranslateRepository');

module.exports = {
    getText: (tx) => {
        return translateRepository.getText(tx);
    }
}