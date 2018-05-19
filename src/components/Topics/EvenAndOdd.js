import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evensArray: [],
      oddsArray: [],
      userInput: '',
    }
  } 

    handleChange(value) {
      this.setState({ userInput: value });
    }


    splitEvensAndOdds(userInput) {
      var nums = userInput.split(',');
      var evens = [];
      var odds = [];

      for (var i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){
          evens.push(+nums[i])
        }
        else {
          // 1 + +nums[i];
          odds.push(+nums[i])
        }
      }
      this.setState({ 
        evensArray: evens,
        oddsArray: odds,
        });
    }
  


  render() {
    return (
      <div className="puzzleBox evenAndOddPB" >
          
        <h4>Evens And Odds</h4>
        <input className="inputLine" type="text" onChange={ e => this.handleChange(e.target.value) } />
        <button className="confirmationButton" onClick={ e => this.splitEvensAndOdds(this.state.userInput) } >Split</button>
        <span className="resultsBox" >Evens: { JSON.stringify(this.state.evensArray) }</span>
        <span className="resultsBox" >Odds: { JSON.stringify(this.state.oddsArray) }</span>
      </div>
    )
  }









}
export default EvenAndOdd;
