const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

router.get('/', charactersCtrl.index);
router.get('/:id', charactersCtrl.show);

module.exports = router;