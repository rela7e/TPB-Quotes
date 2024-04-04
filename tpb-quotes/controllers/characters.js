const Character = require('../models/character');
const Quote = require('../models/quote');

async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', {title: 'All Characters', characters });
}

async function show(req, res) {
    const character = await Character.findById(req.params.id)
    res.render('movies/show', { title: 'Character Detail', character })
}

module.exports = {
    index,
    show,
}