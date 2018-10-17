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
      <div class="albums">
        <div class="album">
          <img class="album__artwork" src={this.props.artworkUrl100} />
          <div class="album__details">
            <h2>{this.props.collectionName}</h2>
            <p class="album__artist">{this.props.artistName}</p>
            <p class="album__desc">Track Title: {this.props.trackName}</p>
             <Link to={`/detail/${this.props.trackId}`}><button>Play</button>
             </Link>

            <p class="album__desc">
              Release Date: {this.timerConverter(this.props.releaseDate)}
            </p>
            <p class="album__desc">
              Price: {this.priceConverter(this.props.trackPrice)} Time:{" "}
              {this.millisToMinutesAndSeconds(this.props.trackTimeMillis)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleSearchedResult;
