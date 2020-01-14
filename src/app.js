import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import boxing from "./boxing.json";
import update from "immutability-helper";
import "./App.css";

const reactCard = (cardArr, clickHandler) => {
  return cardArr.map(card => (
    <Card
      name={card.name}
      image={card.image}
      key={card.id}
      id={card.id}
      cardClick={clickHandler}
    />
  ));
};

class App extends React.Component {
  state = {
    topScore: 0,
    score: 0,
    headerText: "Select a new image each time.",
    boxing
  };

  cardClick = cardId => {
    console.log(cardId);
    let cardArr = this.state.boxing;

    for (let i = 0; i < cardArr.length; i++) {
      if (cardId === cardArr[i].id) {
        if (cardArr[i].clicked === false) {
          this.setState({
            score: this.state.score + 1,
            headerText: "Correct!",
            boxing: update(this.state.boxing, {
              [i]: { clicked: { $set: true } }
            })
            //GLEN COME BACK TO THIS LINE OF CODE FOR THE LOVE OF GOD
          });
        } else {
          //New top Score
          if (this.state.score > this.state.topScore) {
            this.setState({
              topScore: this.state.score,
              score: 0,
              headerText: "Incorrect, try again.",
              boxing
            });
          }
          //Did not beat top score
          if (this.state.score <= this.state.topScore) {
            this.setState({
              score: 0,
              headerText: "Incorrect, try again.",
              boxing
            });
          }
        }
      }
    }
  };

  mixCards = arr => {
    let i = arr.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  render() {
    let mixCard = reactCard(this.mixCards(boxing), this.cardClick);

    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          headerText={this.state.headerText}
        />
        <Wrapper>{mixCard}</Wrapper>
        <Footer />
      </div>
    );
  }
}
export default App;
