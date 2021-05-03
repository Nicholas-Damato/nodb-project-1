let videoGames = [
    {
        id: 1,
        image: 'http://via.placeholder.com/300',
        title: 'Placeholder',
        rating: 10,
        notes: 'Text goes here for notes'
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
