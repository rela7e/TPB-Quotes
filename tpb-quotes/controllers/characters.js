const Character = require('../models/character');
const Quote = require('../models/quote');

async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', {title: 'All Characters', characters });
}

