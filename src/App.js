import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation'; 

class App extends Component {

  constructor (props){
    super(props);
    this.state ={
      images:[
        "/assets/images/ChipDale.jpg", 
        "/assets/images/Cow.jpg",
        "/assets/images/Daisy.jpg",
        "/assets/images/Donald.jpg",
        "/assets/images/goofy.jpg",
        "/assets/images/HueyDewyLouie.jpg",
        "/assets/images/Max_goof.jpg",
        "/assets/images/McDuck.jpg",
        "/assets/images/Minnie.jpg",
        "/assets/images/Pete.jpg",
        "/assets/images/Pinocchio.jpg",
        "/assets/images/Pluto.jpg",

      ]
    }
    // for (i=0 ; i < 12; i++) {
    //   this.state.images[i] = "/images/" + i + ".png";
    // }
  }

  render() {

    const images = this.state.images.map ((images, i) => {
      console.log("calling ");
      console.log(images) 
      return (
          <div className="col-md-3">
            <div className="card mt-3">
              <div className="card-header" >
                  <img class="card-img-top" src = { images }></img>
              </div>
              <div className="card-body">
                <p>description</p>
              </div>
            </div>
          </div>
        )
      })
      
    
    return (

      <div className = "app">
        <nav>
          <Navigation title ="Clicky Game" />
          <Navigation text = "Click an image to begin!" />
        </nav>

        <div className="container">
          <div className="row mt-4">
          { images }
          </div>
        </div>      

      </div>
      
    );
  }
}

export default App;
