const Character = require('../models/character');
const Quote = require('../models/quote');

async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', {title: 'All Characters', characters });
}

async function show(req, res) {
    try {
        const character = await Character.findById(req.params.id).populate('quotes');
        res.render('characters/show', { title: character.name, character });
    } catch (err) {
        console.log(err);
        res.redirect('characters/index');
    }
}

function newCharacter(req, res) {
    res.render('characters/new', { title: 'Add Character', errorMsg: '' });
  }

async function create(req, res) {
    try {
        const { name, description } = req.body;
        const character = new Character({
            name: name,
            description: description
        });
        await character.save();
        res.redirect(`/characters/${character._id}`);
    } catch (err) {
        console.error(err);
        res.render('characters/new', { title: 'Add Character', errorMsg: err.message });
    }
}


async function deleteCharacter(req, res){
    try{
        await Character.findByIdAndDelete(req.params.id);
        res.redirect('/characters');
    } catch (err) {
        console.log(err);
        res.render('characters/index', {errorMsg: err.message});
    }
}

module.exports = {
    index,
    show,
    new: newCharacter,
    create,
    delete: deleteCharacter,
}