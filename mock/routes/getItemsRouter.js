var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/getitems", function (req, res, next) {
    res.json({
        list: [1, 2, 3]
    });
});

module.exports = router;