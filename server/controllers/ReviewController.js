var express = require('express');
var router = express.Router();
var reviewService = require('../services/ReviewService');

router.post('', async (req, res) => {
    const obj = await reviewService.saveWordToReview(req.body);
    if (obj) {
        res.json(true);
    } else {
        res.json(false);
    }
});

module.exports = router;