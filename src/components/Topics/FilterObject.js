import React, { Component } from 'react';

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        { name: 'Jimmy Joe', title: 'Hack0r', age: 12 },
        { name: 'Jeremy Schrader', age: 24, hairColor: 'brown' },
        { name: 'Carly Armstrong', title: 'CEO' }
      ],
      userInput: '',
      filteredArray: '' 
    };
  }
    handleChange(value) {
      this.setState({ userInput: value });
    }

    filterArray(userInput) {
      var original = this.state.unfilteredArray;
      var filtered = [];

      for (var i = 0; i < original.length; i++) {
        if( original[i].hasOwnProperty(userInput) ) {
          filtered.push(original[i]);
        }
      }
      this.setState({
        filteredArray: filtered
      })
    }


  render() {
    return (
      <div className="puzzleBox filterObjectPB" >
        <h4>Filter Object</h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray )}</span>
        <input className="inputLine" onChange={ e => { this.handleChange(e.target.value) } } />
        <button className="confirmationButton" onClick={ e => this.filterArray(this.state.userInput) } >Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }
}
export default FilterObject;