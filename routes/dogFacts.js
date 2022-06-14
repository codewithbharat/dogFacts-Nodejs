const express = require('express');
const router = express.Router();

const { getFact, allFacts } = require("../controlers/dogFacts");

router.route('/newFact').get(getFact);
router.route('/showfacts').get(allFacts)

module.exports = router;