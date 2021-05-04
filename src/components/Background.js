import React, { Component } from 'react'
import axios from 'axios'

class Background extends Component {
    constructor() {
        super()
        this.state = {
            url: {},
            inputVal: ''
        }

    }

    componentDidMount() {
        axios.get(`/api/background`)
            .then((res) => this.setState({ url: res.data }))
            .catch(err => console.log(err))
    }

    editBackground = (id, image) => {
        axios.put(`/api/background/${id}`, { image })
            .then((res) => this.setState({ url: res.data }))
            .catch(err => console.log(err))
    }

    handleChange = (inputVal) => {
        this.setState({ inputVal: inputVal })
    }


    render() {
        console.log(this.state.url)
        return (
            <div>
                <input value={this.state.inputVal} onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.editBackground(this.state.url.id, this.state.inputVal)}> Change Background</button>
                <style>
                    {`body {background-image: url(${this.state.url.image}) }`}
                    {`body {background-repeat: no-repeat}`}
                    {`body {background-attachment: fixed}`}
                </style>
            </div>

        )
    }
}

export default Background