import React, { Component } from 'react'
import Button from './components/Button' 
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {
  constructor(){
    super()
    this.state = {

      activeTab: "",
      items: []
}
// bind
this.handleButtonClick = this.handleButtonClick.bind(this)

  }

  handleButtonClick(str){
    this.setState({activeTab : str})
  }
  
  render() {
    console.log(this.state.activeTab);
    
    return (
      <div>
        <h1>hi</h1>
        <Button 
        handleClick={this.handleButtonClick}
        isSelected={this.state.activeTab}
        />
        {this.state.activeTab === "Add" && <Add/> }
        {this.state.activeTab === "List" && <List/> }
        {this.state.activeTab === "Pay" && <Pay/> }
      </div>
    )
  }
}

export default App
