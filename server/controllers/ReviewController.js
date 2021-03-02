var express = require('express');
var router = express.Router();
var reviewService = require('../services/ReviewService');

router.post('', async (req, res) => {
    const obj = await reviewService.saveWordToReview(req.body);
    if (obj) {
        if (obj.message) {
            res.json({status: false, message: obj.message});
        } else {
            res.json({status: true});
        }
    } else {
        res.json({status: false, message: 'Lưu từ thất bại'});
    }
});

module.exports = router;