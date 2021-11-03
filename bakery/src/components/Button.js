import React, { Component } from 'react'

export default class Button extends Component {
    
    render() {
        
        const {handleClick} = this.props
        return (
            <div className='d-flex' >
                <button value='Add' onClick={() => handleClick("Add")} type="button" className="btn btn-outline-primary me-3">Add</button>
                <button value='List'onClick={() => handleClick("List")} type="button" className="btn btn-outline-primary me-3">List</button>
                <button value='Pay'onClick={() => handleClick("Pay")} type="button" className="btn btn-outline-primary me-3">Pay</button>
            </div>
        )
    }
}


