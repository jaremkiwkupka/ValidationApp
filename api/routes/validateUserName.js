var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("validate user name");
});

module.exports = router;