import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [ 'James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy' ],
      userInput: '',
      filteredArray: [],
    };
  }
    handleChange(value) {
      this.setState({ userInput: value });
    }
  
    filterStringArray(userInput) {
      var unfiltered = this.state.unFilteredArray;
      var filtered = [];

      for ( var i = 0; i < unfiltered.length; i++ ) {
        if ( unfiltered[i].toUpperCase().includes(userInput.toUpperCase()) ) {
          filtered.push(unfiltered[i]);
        }
      }
      this.setState({
        filteredArray: filtered
      })
    }


  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: { JSON.stringify(this.state.unFilteredArray )}</span>
        <input className="inputLine" onChange={ e => { this.handleChange(e.target.value) } } />
        <button className="confirmationButton" onClick={ e => this.filterStringArray(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }
}
export default FilterString;