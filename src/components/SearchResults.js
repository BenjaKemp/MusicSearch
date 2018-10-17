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
      <div>
        <div>
          <SearchBar />
          <div className="container">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    searchResult: bigFilter(state),
      filters: state.filters
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
