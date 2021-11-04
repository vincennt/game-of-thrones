import React, { Component } from 'react'

export class Character extends Component {
    render() {
        const { name, title, image } = this.props
        return (
            <>
              <div>
                  <h1>{name}</h1> 
                  <h2>{title}</h2>
                  <img src={image}/>
                  <br></br>
               </div>  
            </>
        )
    }
}

export default Character
