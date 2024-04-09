// controllers/quotesCtrl.js

const Character = require('../models/character');
const Quote = require('../models/quote');


const create = async (req, res) => {
    try {
        const { content, characterId } = req.body;
        await Quote.create({ content, character: characterId });
        res.redirect('characters');
    } catch (err) {
        console.log(err);
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
    }
}
module.exports = {
    new: newQuote,
    create,
    delete: deleteQuote,
};

