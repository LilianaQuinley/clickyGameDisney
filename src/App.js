
import React, { Component } from 'react';

import './App.css';
import { images } from './images.json';
const shuffle = require('shuffle-array');


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      images,
      clickedTwiceImages: [],
      topScore: 0,
      score:0,
      title: "Click an Image to Begin!"     
    }
  }

  imageClick =(clickedImage) => {

      shuffle(this.state.images);
      this.forceUpdate();

    if (this.state.clickedTwiceImages.includes(clickedImage))  {
      console.log (" YOU LOOSE");     
        var newState = {
          score: 0,
          clickedTwiceImages: [],
          title: "You guessed incorrectly!"
        }
        this.setState(
          newState
        );
      } else {
        console.log ("you win")
          this.state.clickedTwiceImages.push(clickedImage);
          
           newState = {
              score: this.state.score+1,
              title: "You guessed correctly!"
            }
            if (newState.score > this.state.topScore) {
              newState.topScore = newState.score

            }      
            this.setState(
                    newState
            );
      }
  }

  render() {
    const images = this.state.images.map ((image, i) => {
     
      return (
      <div className="col s4 l3" key={i}>
      <div className="z-depth-5">
        <div className="card">
            <div className="card-image waves-effect waves-strong-effect" >
              <img className="arrow" value={ image } src = { image } 
               onClick = {() => this.imageClick(image)} alt =""></img>
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
              <div className="row">
                <ul className="tabs  tabs-transparent">
                  <li className="tab col s4  red-text darken-4"><h5>Clicky Game</h5></li>
                  <li className="tab col s4"><h5>{this.state.title}</h5></li>
                  <li className="tab col s1 red-text darken-4">Score: {this.state.score}</li>
                  <li className="tab col s1"> Top Score: {this.state.topScore}</li>
                </ul>
               </div>
            </div>   
         
        </nav>
        </div>
   
        <div className="row">
          <div className="card ">
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
