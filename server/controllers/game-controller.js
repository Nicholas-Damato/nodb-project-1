let videoGames = [
    {
        id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Xenogears_box.jpg/220px-Xenogears_box.jpg',
        title: 'Xenogears',
        rating: 10,
        notes: 'stuff goes here'
    }
]
let id = 2

module.exports = {
    display: (req, res) => {
        res.status(200).send(videoGames)
    },
    delete: (req, res) => {
        const { id } = req.params
        index = videoGames.findIndex(e => e.id === +id)
        videoGames.splice(index, 1)
        res.status(200).send(videoGames)
    },
    addGame: (req, res) => {
        const { image, title, rating, notes } = req.body
        const newGame = {
            id,
            image,
            title,
            rating,
            notes
        }
        id++
        videoGames = [newGame, ...videoGames]
        res.status(200).send(videoGames)
    },
    editGame: (req, res) => {
        const { id } = req.params
        const { rating, notes } = req.body
        index = videoGames.findIndex(e => e.id === +id)
        videoGames.splice(index, 1, {
            ...videoGames[index],
            rating,
            notes
        })
        res.status(200).send(videoGames)
    }
}
