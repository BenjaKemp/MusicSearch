import React, { Component } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  TwitterShareButton,
  TwitterIcon,
  GooglePlusIcon
} from "react-share";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ResponsivePlayer from "../components/ResponsivePlayer";
import bigFilter from "../selectors/filters";
class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props", this.props);
    const index = Number(this.props.match.params.id);
    const trackdetails = this.props.searchResult.map(el => {
      return el.trackId;
    });
    const thisTrackIndex = trackdetails.indexOf(index);
    const songDetail = this.props.searchResult[thisTrackIndex];
    const shareUrl = this.props.location.pathname;
    return (
      <div className="player" id="ap">
        <div className="player_body">
          <img src={songDetail.artworkUrl100} className="image" />
          <p className="track-info">
            the song is {songDetail.trackName} by the artist{" "}
            {songDetail.artistName}
          </p>
          <div className="controls">
            <ResponsivePlayer url={songDetail.previewUrl} index={index} />

            <button
              onClick={() => {
                this.props.history.push(
                  `/detail/${trackdetails[thisTrackIndex - 1]}`
                );
              }}
              disabled={thisTrackIndex === 0}
            >
              skip to prev track
            </button>
            <button
              onClick={() => {
                this.props.history.push(
                  `/detail/${trackdetails[thisTrackIndex + 1]}`
                );
              }}
              disabled={thisTrackIndex === trackdetails.length - 1}
            >
              skip to next track
            </button>
            <Link to={`/`}>
              <button>back to search</button>
            </Link>
          </div>
          <div className="media-icons">
            <FacebookShareButton
              url={shareUrl}
              quote="Bens app is the best"
              className="button"
            >
              <FacebookIcon size={32} round={false} />
            </FacebookShareButton>
            <GooglePlusShareButton
              url={shareUrl}
              quote="Bens app is the best"
              className="button"
            >
              <GooglePlusIcon size={32} round={false} />
            </GooglePlusShareButton>
            <TwitterShareButton
              url={shareUrl}
              quote="Bens app is the best"
              className="button"
            >
              <TwitterIcon size={32} round={false} />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchResult: bigFilter(state)
  };
}

export default connect(mapStateToProps)(Detail);
