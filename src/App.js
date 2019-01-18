import React, { Component } from 'react';
import './App.css';

import { images } from './images.json';
import Navigation from './components/Navigation'; 
console.log(images);

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
          <div className="col-md-3  d-flex align-items-stretch ">
            <div className="card mt-3">
              <div className="card-header" >
                  <img class="card-img-top" src = { images }></img>
              </div>

            </div>
          </div>
        )
      })
      
    
    return (
      <div className = "App">
        <nav>
          <Navigation title ="Clicky Game" />
          <Navigation text = "Click an image to begin!" />
          <Navigation score = "Score: 0 | Top Score: 0" />
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
