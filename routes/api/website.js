const express = require('express');
const router = express.Router();
const websiteCtrl = require('../../controllers/api/website');

router.post('/', websiteCtrl.create)
//router.get('/', websiteCtrl.setWebsite )

module.exports = router;
