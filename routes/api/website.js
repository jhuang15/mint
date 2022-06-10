const express = require('express');
const router = express.Router();
const websiteCtrl = require('../../controllers/api/website');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, websiteCtrl.create);
router.get('/', websiteCtrl.getAll); 
router.delete('/:id', ensureLoggedIn, websiteCtrl.delete);

module.exports = router;
