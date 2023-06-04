import React, { Component } from 'react';
import "./App.css";


// Components
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import ItemListcontainer from './components/ItemListContainer/ItemListcontainer';



class App extends Component{
  render(){
    return(
      <div className='App'>
        <Header title="Pelifly" 
        />
        <NavBar />
        <ItemListcontainer />
      </div>
    );
  }
}

export default App;