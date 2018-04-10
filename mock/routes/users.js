var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/users", function (req, res, next) {
    res.json({
        id: 2
    });
});

module.exports = router;
