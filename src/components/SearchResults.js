import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "../containers/SearchBar";
import { Link } from "react-router-dom";
import SingleSearchedResult from "./SingleSearchedResult";
import {sortByLength, sortByPrice, sortByGenre } from '../actions'
import bigFilter from '../selectors/filters'

class SearchResults extends Component {
  renderList() {
    return this.props.searchResult.map((result, index) => {
      return (
        <div>
          <Link
            to={{
              pathname: `/detail/${result.trackId}`,
              state: { index, result }
            }}
            key={index}
          >
            <button type="button">more detail</button>
          </Link>
          <SingleSearchedResult key={result} {...result} />

        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          <SearchBar />
          <div>{this.renderList()}</div>
        </div>
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
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
