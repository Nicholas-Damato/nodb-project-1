import React, { Component } from 'react'

class AddGame extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            image: '',
            rating: 0,
            notes: ''
        }
    }

    handleTitle = (title) => {
        this.setState({ title: title })
    }

    handleImage = (image) => {
        this.setState({ image: image })
    }

    handleNotes = (notes) => {
        this.setState({ notes: notes })
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
        return (
            <div>
                <input value={this.state.title} onChange={(e) => this.handleTitle(e.target.value)} placeholder='Title of Game!' />
                <input value={this.state.image} onChange={(e) => this.handleImage(e.target.value)} placeholder='Image URL' />
                <button onClick={() => { this.decreaseRating(this.state.rating) }}> Decrease </button>
                Rating: {this.state.rating}
                <button onClick={() => this.increaseRating(this.state.rating)}> Increase</button>
                <input value={this.state.notes} onChange={(e) => this.handleNotes(e.target.value)} placeholder='Additional Notes!' />
                <button onClick={() => this.props.addGame(this.state.title, this.state.image, this.state.rating, this.state.notes)}> Add game to list! </button>

            </div>
        )
    }
}

export default AddGame