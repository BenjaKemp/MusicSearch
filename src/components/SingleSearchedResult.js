import React, { Component } from "react";
import { Link } from "react-router-dom";

import millisToMinutesAndSeconds from "../helpers/timeEditor";
import releaseDateConverter from "../helpers/releaseDateConverter";
import priceConverter from "../helpers/priceConverter";

class SingleSearchedResult extends Component {
  render() {
    return (
      <div className="albums">
        <Link
          to={`/detail/${this.props.trackId}`}
          style={{ textDecoration: "none" }}
        >
          <div className="album">
            <img className="album__artwork" src={this.props.artworkUrl100} alt=""/>
            <div className="album__details">
              <h2>{this.props.collectionName}</h2>
              <p className="album__artist">{this.props.artistName}</p>

              <p className="album__desc">Track Title: {this.props.trackName}</p>

              <p className="album__desc">{this.props.primaryGenreName}</p>
              <p className="album__desc">
                Release Date: {releaseDateConverter(this.props.releaseDate)}
              </p>
              <p className="album__desc">
                Price: {priceConverter(this.props.trackPrice)} Time:{" "}
                {millisToMinutesAndSeconds(this.props.trackTimeMillis)}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default SingleSearchedResult;
