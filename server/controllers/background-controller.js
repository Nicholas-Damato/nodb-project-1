let background = [
    {
        url: ''
    }
]

module.exports = {
    getBack: (res, req) => {
        res.status(200).send(background)
    }
}