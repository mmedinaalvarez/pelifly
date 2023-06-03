import React, { Component } from 'react';
import "./App.css";


// Components
import Header from "./components/Header/Header";
import CardUser from './components/CardUser/CardUser';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Header title="Soy el titulo a partir de una prop" 
          subtitle="Soy el subtitulo a partir de la prop"
        />
        <div className='UserSection'>
          <CardUser 
            name="Manuel Medina"
            date="Se unio en Enero de 2023"
            description="Front-end Developer e intento de hacer algo productivo en React.js"
            img="http://react.semantic-ui.com/images/avatar/large/matthew.png"  
          />
          <CardUser 
            name="Robertito Medina"
            date="Se unio en Enero de 2023"
            description="Front-end Developer e intento de hacer algo productivo en React.js"
            img="http://react.semantic-ui.com/images/avatar/large/matthew.png"  
          />
          <CardUser 
            name="Gervasito Medina"
            date="Se unio en Enero de 2023"
            description="Front-end Developer e intento de hacer algo productivo en React.js"
            img="http://react.semantic-ui.com/images/avatar/large/matthew.png"  
          />
        </div>
        {/* <Header title="sadaaaaa partir de una prop" subtitle="bbbbbde la prop"/> 
        <Header title="ddsdsdsa una prop" subtitle="aaaaaa de la prop"/> 
        <Header title="Soy el asdsaadsdsa a partir de una prop" subtitle="asdsadsa prop"/>  */}
        
      </div>
    );
  }
}

export default App;