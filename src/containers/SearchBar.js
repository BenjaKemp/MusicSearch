import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchSongs, sortBy} from '../actions'

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
    this.props.dispatch(fetchSongs(searchTerm));
  }
  handleClick = (e) => {
let filterName = e.target.value;
this.props.dispatch(sortBy(filterName))


  }

  render() {
    return (
      <div className="search-container">
        <div className="searchbar">
        <form onSubmit={this.onHandleSubmit}>

            <input
              className="search-input"
              value={this.state.searched}
              onChange={this.onDescriptionChange}
              placeholder="Please enter Artist, Song or Album to start......"
            />
        </form>
      </div>
      <div className="one-line-flex">
        <button value="length" onClick={this.handleClick} className="select-me ">Length</button>
        <button  value="genre" onClick={this.handleClick} className="select-me ">Genre</button>
        <button value="price" onClick={this.handleClick} className="select-me ">Price</button>
      </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapDispatchToProps)(SearchBar);
