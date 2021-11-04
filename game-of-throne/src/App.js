import React from 'react'
import Character from './components/Character';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/Users/vins/Documents/konexio/react/games-of-throne/game-of-throne/src/main.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
	    characters: [],
      favorites : []
  }
  //bind
this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
  }
  //méthode
  componentDidMount(){
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json()) // on transforme la donnée reçue en JSON 
      .then(result => {this.setState({ characters : result})}); // on détaille l'action à exécuter sur ce JSON
  }
  handleFavoriteClick(){
      // const favCharacters = [...this.state.favorites]
      // favCharacters.id.favorites = "selected"

   
  }
	render() {
    console.log(this.state); 
    

    
		return(<>
			  <h1>Game of thrones</h1>
        {this.state.characters.map(character => <
          Character 
          FavoriteClick={this.handleFavoriteClick}
          name={character.fullName} 
          title ={character.title}
          image ={character.imageUrl}
          key={character.id}/>)}
        
      </>
		)
	}
}

export default App