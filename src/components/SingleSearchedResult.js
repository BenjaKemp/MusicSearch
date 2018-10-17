import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

class SingleSearchedResult extends Component {
  millisToMinutesAndSeconds = millis => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + " mins " + (seconds < 10 ? "0" : "") + seconds;
  };

  timerConverter = time => {
    let newString = moment(time)
      ._d.toString()
      .substring(0, 15);
    return newString;
  };
  priceConverter = price => {
    return `£${price}`;
  };
  render() {
    return (
      <div className="albums">
        <Link to={`/detail/${this.props.trackId}`} style={{ textDecoration: 'none'}}>
        <div className="album">
          <img className="album__artwork" src={this.props.artworkUrl100} />
          <div className="album__details">
            <h2>{this.props.collectionName}</h2>
            <p className="album__artist">{this.props.artistName}</p>
            <p className="album__desc">Track Title: {this.props.trackName}</p>

            <p className="album__desc">
              Release Date: {this.timerConverter(this.props.releaseDate)}
            </p>
            <p className="album__desc">
              Price: {this.priceConverter(this.props.trackPrice)} Time:{" "}
              {this.millisToMinutesAndSeconds(this.props.trackTimeMillis)}
            </p>
          </div>
        </div>
      </Link>
      </div>
    );
  }
}

export default SingleSearchedResult;
