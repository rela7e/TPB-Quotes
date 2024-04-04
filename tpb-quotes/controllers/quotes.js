const Character = require('../models/character');
const Quote = require('../models/quote');

async function index(req, res) {
    const quotes = await Quote.find({});
    res.render('quotes/index', {title: 'All Quotes', quotes });
}

