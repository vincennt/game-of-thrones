import React, { Component } from 'react'

export class Character extends Component {
    render() {
        const { name, title, image } = this.props
        return (
            <>
              <div className='container'>
                  <div className='row bordering mb-3'>
                    <div className="col-sm"><h2>{name}</h2> </div>
                    <div className="col-sm"><h3>{title}</h3></div>
                    <div className="col-sm"><img src={image}/></div>
                    {/* <br></br> */}
                  </div>
               </div>  
            </>
        )
    }
}

export default Character
