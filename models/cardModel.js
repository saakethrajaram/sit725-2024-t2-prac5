const cardList = [
    {
        title: "Kitten 1",
        image: "images/iphone15.png",
        link: "About Kitten 1",
        description: "Demo description about kitten 1"
    },
    {
        title: "Kitten 2",
        image: "images/iphone15promax.png",
        link: "About Kitten 2",
        description: "Demo description about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "/images/samsungs24ultra.png",  // Updated image path for Card 3
        link: "About Kitten 3",
        description: "Demo description about kitten 3"
    }
];

const getCards = () => {
    return cardList;
}

module.exports = { getCards };