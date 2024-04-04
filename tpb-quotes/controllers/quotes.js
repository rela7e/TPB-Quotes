const Character = require('../models/character');
const Quote = require('../models/quote');

async function index(req, res) {
    const quotes = await Quote.find({});
    res.render('quotes/index', {title: 'All Quotes', quotes });
}

async function show(req, res) {
    const character = await Character.findById(req.params.id)
    res.render('quotes/show', { title: 'Quote', quote })
}

