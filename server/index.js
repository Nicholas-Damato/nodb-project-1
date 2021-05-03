const express = require('express')

const app = express();
const PORT = 3077;

const gameCtrl = require('./controllers/game-controller')
const backCtrl = require('./controllers/background-controller')

app.use(express.json())

app.get('/api/games', gameCtrl.display)
app.post('/api/games', gameCtrl.addGame)
app.put('/api/games/:id', gameCtrl.editGame)
app.delete('/api/games/:id', gameCtrl.delete)
app.get('api/background', backCtrl.getBack)


app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`))