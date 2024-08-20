// controllers/homeController.js
function loadHomePage(req, res) {
    const cards = [
        { title: 'iPhone 15', image: 'images/iphone15.png', link: '#', description: 'Description for Card 1' },
        { title: 'iPhone 15 Pro Max', image: 'images/iphone15promax.png', link: '#', description: 'Description for Card 2' },
        { title: 'Samsung S24 Ultra', image: 'images/samsungs24ultra.png', link: '#', description: 'Description for Card 3' },
        // Add more cards as needed
    ];
    res.render('index', { cards });
}

module.exports = { loadHomePage };