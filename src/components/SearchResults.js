import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "../containers/SearchBar";

import SingleSearchedResult from "./SingleSearchedResult";
import {sortByLength, sortByPrice, sortByGenre } from '../actions'
import bigFilter from '../selectors/filters'

class SearchResults extends Component {
  renderList() {
    return this.props.searchResult.map((result, index) => {
      return (
          <SingleSearchedResult key={result.trackId} {...result}/>
      );
    });
  }
  render() {
    return (
      <div className="entire-container">

          <SearchBar />
          <div className="container">{this.renderList()}</div>
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: bigFilter(state),
      filters: state.filters
  };
}


export default connect(
  mapStateToProps
)(SearchResults);
