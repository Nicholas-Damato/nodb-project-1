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
            <div className='form'>
                <h2> Title: </h2>
                <textarea className='inputs' value={this.state.title} onChange={(e) => this.handleTitle(e.target.value)} placeholder='Title of Game!' />
                <h2> URL: </h2>
                <textarea className='inputs' value={this.state.image} onChange={(e) => this.handleImage(e.target.value)} placeholder='Image URL' />
                <h2> Rating: </h2>
                <div className='more-list'>
                    <button className='buttons' onClick={() => this.increaseRating(this.state.rating)}> Increase</button>
                    {" "} Rating: {this.state.rating} {" "}
                    <button className='buttons' onClick={() => this.decreaseRating(this.state.rating)}> Decrease </button>
                </div>
                <h2> Add Notes: </h2>
                <textarea className='inputs' value={this.state.notes} onChange={(e) => this.handleNotes(e.target.value)} placeholder='Additional Notes!' />
                <button className='buttons' onClick={() => this.props.addGame(this.state.title, this.state.image, this.state.rating, this.state.notes,
                    this.setState({ title: '', image: '', rating: 0, notes: '' }))}> Add game to list! </button>

            </div>
        )
    }
}

export default AddGame