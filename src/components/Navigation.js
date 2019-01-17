import React, { Component } from 'react';



class Navigation extends Component {
    render(){
        return (
            <nav className ="navbar navbar-dark bg-dark">
                {this.props.title}
                {this.props.text}
                {/* <ul>
                <li className="brand"><a href="/">Clicky Game</a></li>
                <li className="">Click an image to begin!</li>
                <li>Score: 0 | Top Score: 0</li>
                </ul> */}
          </nav>
        )
    }
}

export default Navigation;
