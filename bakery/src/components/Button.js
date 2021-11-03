import React, { Component } from 'react'

export default class Button extends Component {
    
    render() {
        
        const {handleClick , isSelected} = this.props
        return (
            <div className='d-flex' >
                <button value='Add' 
                onClick={() => handleClick("Add")} 
                type="button" 
                className={`btn btn-outline-primary me-3 ${isSelected === "Add" && 'bg-success '}`}
                >Add
                </button>
                <button 
                value='List'
                onClick={() => handleClick("List")} 
                type="button" 
                className={`btn btn-outline-primary me-3 ${isSelected === "List" && 'bg-success '}`}
                >List</button>
                <button 
                value='Pay'
                onClick={() => handleClick("Pay")} 
                type="button" 
                className={`btn btn-outline-primary me-3 ${isSelected === "Pay" && 'bg-success '}`}
                >Pay</button>
            </div>
        )
    }
}


