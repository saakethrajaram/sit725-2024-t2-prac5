const { getCards } = require('../models/cardModel');

const loadHomePage = (req, res) => {
    const cards = getCards();
    res.render('index', { cards });
}

module.exports = { loadHomePage };