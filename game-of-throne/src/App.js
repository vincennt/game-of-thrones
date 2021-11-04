import React from 'react'
import Character from './components/Character';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
	    characters: []
  }
  //bind

  }
  //méthode
  componentDidMount(){
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => {this.setState({ characters : result})}); // on détaille l'action à exécuter sur ce JSON
  }
	render() {
    console.log(this.state); 
    

    
		return(<>
			  <h1>Game of thrones</h1>
        {this.state.characters.map(character => <
          Character 
          name={character.fullName} 
          title ={character.title}
          image ={character.imageUrl}
          key={character.id}/>)}
        
      </>
		)
	}
}

export default App