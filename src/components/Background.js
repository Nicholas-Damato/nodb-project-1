import React, { Component } from 'react'
import reactDom from 'react-dom'
import axios from 'axios'

class Background extends Component {
    constructor() {
        super()
        this.state = {
            url: [],
            inputVal: ''
        }

    }

    componentDidMount() {
        axios.get(`/api/background`)
            .then((res) => this.setState({ url: res.data }))
            .catch(err => console.log(err))
    }

    handleChange = (inputVal) => {
        this.setState({ inputVal: inputVal })
    }

    changeBackground = () => {
        this.setState({ url: this.state.inputVal })
    }

    render() {
        return (
            <div>
                <input value={this.state.inputVal} onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.changeBackground()}> Change Background</button>
                <style>
                    {`body {background-image: url(${this.state.url}) }`}
                    {`body {background-repeat: no-repeat}`}
                    {`body {background-attachment: fixed}`}
                </style>
            </div>

        )
    }
}

export default Background