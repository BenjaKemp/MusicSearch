import React, { Component } from "react";
import { connect } from "react-redux";
import {setSearchResults, sortBy} from '../actions'

class SearchBar extends Component {
  constructor(props) {
  super(props);

  this.state = {
    searched: ''
  };
}
onDescriptionChange = (e) => {
  const searched = e.target.value;
  this.setState(() => ({ searched }));
};
  onHandleSubmit = (e) => {
    e.preventDefault();
    let searchTerm = this.state.searched.replace(/ /g, '+');

    fetch(`https://itunes.apple.com/search?term=${searchTerm}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.props.dispatch(setSearchResults(result));
      })
      .catch(e => console.log(e));
  }
  handleClick = (e) => {
let filterName = e.target.value;
this.props.dispatch(sortBy(filterName))


  }

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name:
            <input
              value={this.state.searched}
              onChange={this.onDescriptionChange}
              className="search-field-input"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <button value="length" onClick={this.handleClick} className="button">Length</button>

        <button  value="genre" onClick={this.handleClick} className="button">Genre</button>

        <button value="price" onClick={this.handleClick} className="button">Price</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapDispatchToProps)(SearchBar);
