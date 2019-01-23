
import React, { Component } from 'react';
import './App.css';
import { images } from './images.json';
const shuffle = require('shuffle-array');

//import Navigation from './components/Navigation'; 

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      images
    }
  }

  imageClick =() => {
    console.log("click Image");
    shuffle(this.state.images);
    this.forceUpdate();
  
  }

  render() {
    const images = this.state.images.map ((image, i) => {
      console.log("calling ");
     
      return (
      <div className="col s4 l3" key={i}>
      <div className="z-depth-5">
        <div className="card">
            <div className="card-image waves-effect waves-strong-effect" >
              <img className="arrow" src = { image } 
               onClick = {this.imageClick} alt =""></img>
            </div>
          </div>
        </div>
      </div>        
        )
      })
      
    
    return (

      <div className = "App">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper black">
              <div className="nav-content">
                <ul className="tabs tabs-transparent">       
                  <p className ="tab"><a className= "red-text darken-4" href="#test1">Clicky Game</a></p>
                  <p className ="tab"><a className="active" href="#test2">Click an Image to Begin!</a></p>
                  <p className ="tab"><a className= "active red-text darken-4" href="#test4">Score</a></p>          
                </ul>
              </div>
            </div>   
          </nav>
        </div>
   
        <div className="row">
          <div className="card">
            <div className="card-image">
              <img src="/assets/images/disneybg.jpg" alt=""></img>
                <div className="card-title">
                  <h2>Clicky Game !</h2>
                  <h4>Click on an image to earn points, but don't click on any more than once!</h4>
                </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
          { images }
          </div>
        </div>      

      </div>
      
    );
  }
}

export default App;
