import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Title from "./components/Title";
import Footer from "./components/Footer";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
    message: 'Click an Image to Begin.'
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(`High Score: ${this.state.highScore}`);
      });
    }
    this.state.FriendCard.forEach(friend => {
      friend.clicked = false;
    });
    this.setState({score: 0, message: 'You Guessed Wrong. Game Over!'});
    return true;
  }

clickCount = (id) => {
  var success = false;
  
  this.state.friends.forEach(function(friend) {
    friends.clicked === true;
    if (friend.id === id) {
      if (friends.clicked === true) {
          this.gameOver();
        } else {
          success = true;
        }
      }
    });
  this.state.friends.sort(() => Math.random() - 0.5)

  if (success) {
    this.setState({score : this.state.score + 1, message : 'You guessed correctly.'}, function(){
      console.log(`Score: ${this.state.score}`);
    });
    this.setState({highScore : this.state.highScore + 1}, function(){
      console.log(`High Score: ${this.state.highScore}`);
    });
  }
}

  // Map over this.state.friends and render a friendsCard component for each friends object
  render() {
    return (
      <Wrapper>
      <Navbar score={this.state.score} highScore={this.state.highScore} />
      <Title />
      <Main message={this.state.message}>
        {this.state.friends.map(friend => (
          <FriendCard
          clickCount={this.clickCount}
          id={friend.id}
          key={friend.id}
          image={friend.image}
          clicked={friend.clicked}
          />
        ))}
      </Main>
      <Footer />
      </Wrapper>
    );
  }
}

export default App;
