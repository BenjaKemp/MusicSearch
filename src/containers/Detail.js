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
import bigFilter from "../helpers/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Detail extends Component {
  render() {
    const index = Number(this.props.match.params.id);
    const trackdetails = this.props.searchResult.map(el => {
      return el.trackId;
    });
    const thisTrackIndex = trackdetails.indexOf(index);
    const songDetail = this.props.searchResult[thisTrackIndex];
    const shareUrl = this.props.location.pathname;
    return (
      <div className="player" id="ap">
        <div className="player-body">

          <div className="go-back">
            <Link to={`/`}>
              <FontAwesomeIcon icon="undo" />
            </Link>
          </div>

          <div className="player-content">

            <div className="detail-top-nav">
              <button className="fa-btn"
                onClick={() => {
                  this.props.history.push(
                    `/detail/${trackdetails[thisTrackIndex - 1]}`
                  );
                }}
                disabled={thisTrackIndex === 0}
              >
                <FontAwesomeIcon className="big" icon="step-backward" />
              </button>
              <img src={songDetail.artworkUrl100} className="image" alt=""/>
              <button className="fa-btn"
                onClick={() => {
                  this.props.history.push(
                    `/detail/${trackdetails[thisTrackIndex + 1]}`
                  );
                }}
                disabled={thisTrackIndex === trackdetails.length - 1}
              >
                <FontAwesomeIcon className="big" icon="step-forward" />
              </button>
            </div>

            <p className="track-info">
              The song is {songDetail.trackName} by the artist{" "}
              {songDetail.artistName}
            </p>
            <div className="controls">
              <ResponsivePlayer url={songDetail.previewUrl} index={index} />
            </div>
            <div className="social-media-div">
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
