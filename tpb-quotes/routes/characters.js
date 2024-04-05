const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

router.get('/new', charactersCtrl.new);
router.get('/:id', charactersCtrl.show);
router.get('/', charactersCtrl.index);
router.post('/', charactersCtrl.create);
router.delete('/:id', charactersCtrl.delete);

module.exports = router;