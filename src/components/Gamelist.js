import axios from 'axios'
import React, { Component } from 'react'
import Addgame from './Addgame'
import Game from './Game'


class Gamelist extends Component {
    constructor() {
        super()
        this.state = {
            gameList: []
        }
    }

    componentDidMount() {
        axios.get('/api/games')
            .then((res) => this.setState({ gameList: res.data }))
            .catch(err => console.log(err))
    }

    compon

    deleteGame = (id) => {
        axios.delete(`/api/games/${id}`)
            .then((res) => this.setState({ gameList: res.data }))
            .catch(err => console.log(err))
    }

    addGame = (title, image, rating, notes) => {
        axios.post(`/api/games`, { title, image, rating, notes })
            .then((res) => this.setState({ gameList: res.data }))
            .catch(err => console.log(err))
    }

    editGame = (id, rating, notes) => {
        axios.put(`/api/games/${id}`, { rating, notes })
            .then((res) => this.setState({ gameList: res.data }))
            .catch(err => console.log(err))
    }



    render() {
        const mappedArray = this.state.gameList.map(game => {
            return <Game key={game.id} game={game} editGame={this.editGame} deleteGame={this.deleteGame} />
        })
        return (
            <div className='parent'>
                <Addgame addGame={this.addGame} />
                <div className='list'>
                    {mappedArray}
                </div>
            </div>
        )
    }
}

export default Gamelist