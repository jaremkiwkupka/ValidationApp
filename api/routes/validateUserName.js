var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    let regex = new RegExp('^[a-zA-Z]{2}\\d{2}[a-zA-Z]{2}$');

    if (regex.test(userName)) {
        res.send(console.log("ok"));
    } else {
        res.send(console.log("wrong"));
    }
});

module.exports = router;