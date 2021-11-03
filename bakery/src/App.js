import React, { Component } from 'react'
import Button from './components/Button' 
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {
  constructor(){
    super()
    this.state = {

      activeTab: "add",
      items: []
}
// bind
this.handleButtonClick = this.handleButtonClick.bind(this)

  }

  handleButtonClick(str){
    this.setState({activeTab : str})
  }
  
  render() {
    
    return (
      <div>
        <h1>hi</h1>
        <Button handleClick={this.handleButtonClick}/>
      </div>
    )
  }
}

export default App
