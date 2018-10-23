import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";

import SingleSearchedResult from "../components/SingleSearchedResult";

class SearchResults extends Component {

  renderList() {

    return this.props.songsArray.map((result, index) => {
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
    songsArray: state.searchResult.results,
    error: state.filters.error

  };
}


export default connect(
  mapStateToProps
)(SearchResults);
