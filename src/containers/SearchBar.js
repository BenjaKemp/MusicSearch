import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="fullscreen">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

          <button onClick={this.handleClick}>Length</button>


         <button onClick={this.handleClick}>Genre</button>


          <button onClick={this.handleClick}>Price</button>
      </div>
    );
  }
}

export default SearchBar;
