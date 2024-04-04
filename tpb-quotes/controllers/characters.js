const Character = require('../models/character');
const Quote = require('../models/quote');

async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', {title: 'All Characters', characters });
}

async function show(req, res) {
    const character = await Character.findById(req.params.id)
    res.render('characters/show', { title: 'Character Detail', character })
}

function newCharacter(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('characters/new', { title: 'Add Character', errorMsg: '' });
  }

module.exports = {
    index,
    show,
    newCharacter,
}