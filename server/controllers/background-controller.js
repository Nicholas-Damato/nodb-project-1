let background = {
    image: 'https://steamcommunity-a.akamaihd.net/economy/profilebackground/items/460790/66bd9d7c5a6c8a209493b57506b6b8956b72dbae.jpg',
    id: 1
}



id = 2;

module.exports = {
    getBack: (req, res) => {
        res.status(200).send(background)
    },
    newBack: (req, res) => {
        const { image } = req.body
        background = {
            ...background,
            image
        }
        res.status(200).send(background)
    }
}