var express = require('express');
var userService = require('../services/UserService');
var router = express.Router();

router.post('', async (req, res) => {
    const obj = await userService.createAccount(req.body);
    if (obj) {
        res.json({username: obj.username, role: obj.role});
    } else {
        res.json({message: 'Tài khoản đã tồn tại.Vui lòng tạo tài khoản khác!'});
    }
});

module.exports = router;