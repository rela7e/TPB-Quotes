// controllers/quotesCtrl.js

const Character = require('../models/character');
const Quote = require('../models/quote');


async function create(req, res) {
    try {
        const { content, characterId } = req.body;
        const character = await Character.findById(characterId);
        if (!character) {
            return res.redirect('/characters');
        }
        const quote = new Quote({ content });
        character.quotes.push(quote);
        await character.save();
        res.redirect('/'); 
    } catch (err) {
        console.error(err);
        res.render('quotes/new', { title: 'Add Quote', errorMsg: err.message });
    }
}

async function newQuote(req, res) {
    try {
        const characters = await Character.find({}, '_id name');
        res.render('quotes/new', { title: 'Add Quote', errorMsg: '', characters });
    } catch (err) {
        console.error(err);
        res.render('quotes/new', { errorMsg: err.message });
    }
}


async function deleteQuote(req, res) {
    try {
        const character = await Character.findOneAndUpdate(
            { "quotes._id": req.params.id }, 
            { $pull: { quotes: { _id: req.params.id } } }, 
            { new: true } 
        );
        if (!character) {
            return res.redirect('/characters');
        }
        res.redirect(`/characters/${character._id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting quote');
    }
}
module.exports = {
    new: newQuote,
    create,
    delete: deleteQuote,
};

