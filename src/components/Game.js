import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            rating: this.props.game.rating,
            notes: this.props.game.notes
        }
    }

    handleNotes = (notes) => {
        this.setState({ notes: notes })
    }

    editMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    delete = (id) => {
        this.props.deleteGame(id)
    }

    saveChanges = () => {
        this.props.editGame(this.props.game.id, this.state.rating, this.state.notes)
        this.editMode()
        this.setState({ rating: 0, notes: '' })
    }

    increaseRating = (rating) => {
        if (rating < 10) {
            this.setState({ rating: rating + 1 })
        }
    }

    decreaseRating = (rating) => {
        if (rating > 0) {
            this.setState({ rating: rating - 1 })
        }
    }


    render() {
        const { game } = this.props
        return this.state.editMode ? (
            <div className='item'>
                <h2> {game.title} </h2>
                <img className='image' alt={game.title} src={game.image} />
                <h3> {this.state.rating}/10 </h3>
                <br />
                <button onClick={() => this.increaseRating(this.state.rating)}> Increase Rating </button>
                <button onClick={() => this.decreaseRating(this.state.rating)}> Decrease Rating </button>
                <br />
                <input value={this.state.notes} onChange={(e) => this.handleNotes(e.target.value)} />
                <br />
                <button onClick={() => this.saveChanges()}> Save Changes </button>
            </div>
        ) : (

            <div className='item'>
                <h2 className='test'>{game.title} </h2>
                <img className='image' alt={game.title} src={game.image} />
                <h3 className='test'> {game.rating}/10 </h3>
                <p className='test text'> {game.notes} </p>
                <button className='test' onClick={() => this.editMode()}> Edit </button>
                <button className='test' onClick={() => this.delete(game.id)}> Delete </button>
            </div>
        )
    }
}

export default Game