const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

router.get('/', charactersCtrl.index);
router.get('/new', charactersCtrl.new);
router.get('/:id', charactersCtrl.show);
router.post('/', charactersCtrl.create);

module.exports = router;