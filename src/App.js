
import React, { Component } from 'react';
import './App.css';

import { images } from './images.json';
//import Navigation from './components/Navigation'; 
//import Parallax from './components/background';



class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      images
    }
  }

  render() {
    const images = this.state.images.map ((images, i) => {
      console.log("calling ");
     
      return (
      <div className="col s4 l3">
      <div className="z-depth-5">
        <div className="card">
          
            <div className="card-image">
              <a class ="waves-effect waves-strong-effect" href ="test1">
              <img  src = { images } alt ="" ></img>
              </a>
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
              <img src="/assets/images/disneybg.jpg"></img>
                <div className="card-title">
                  <h2>Clicky Game !</h2>
                  <h4>Click on an image to earn points, but don't click on any more than once!</h4>
                </div>
            </div>
          </div>
        </div>
{/* 
              <div className="parallax-container">
                <div className="parallax">
                <img src="/assets/images/disneybg.jpg" alt="" className="responsive-img"/>
                </div>
              </div> */}

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
