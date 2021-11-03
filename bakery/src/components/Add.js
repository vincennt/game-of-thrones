import React, { Component } from 'react'

export class Add extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            price: 0
}
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)

    }

    handleNameChange(e){
        this.setState({ name : e.target.value})
    }
    handlePriceChange(e){
        this.setState({ price : e.target.value})
    }

    render() {
        console.log(this.state.name);
        console.log(this.state.price);
        return (
            <div>
                <input onChange={this.handleNameChange} type='text' />
                <input onChange={this.handlePriceChange} type="range" min="1" max="10"/>
                {this.state.price !== 0 && <span>{this.state.price}</span>}
                <h1>ADD</h1>
            </div>
        )
    }
}

export default Add
