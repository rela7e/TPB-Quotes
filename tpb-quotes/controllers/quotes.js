const Character = require('../models/character');
const Quote = require('../models/quote');

async function index(req, res) {
    const quotes = await Quote.find({});
    res.render('quotes/index', {title: 'All Quotes', quotes });
}

async function show(req, res) {
    const quote = await Character.findById(req.params.id)
    res.render('quotes/show', { title: 'Quote', quote })
}

function newQuote(req, res) {
    res.render('quotes/new', { title: 'Add Quote', errorMsg: '' });
  }

async function create(req, res){
    try {
        const quote = await Quote.create(req.body);
        res.redirect(`/quotes/${quote._id}`);
    } catch (err) {
        console.log(err);
        res.render('quotes/new', {errorMsg: err.message})
    }
}

module.exports = {
    index,
    show,
    new: newQuote,
    create,
}