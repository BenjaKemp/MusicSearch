import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from '../containers/SearchBar'
import { Link } from "react-router-dom";
import SingleSearchedResult from './SingleSearchedResult'


class SearchResults extends Component {



  renderList() {
      return this.props.searchResult.results.map((result, index) => {
        return (

            <SingleSearchedResult

              key={index}
            {...result}
            />
        );
      });
    }
  render() {
    return (
      <div >
        <div >
          <SearchBar/>
          <div>{this.renderList()}</div>
        </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
searchResult: state.searchResult
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
