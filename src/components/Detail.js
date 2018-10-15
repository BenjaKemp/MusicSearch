import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import "./Detail.css";
import ResponsivePlayer from "./ResponsivePlayer";

class Detail extends Component {
  render() {
    console.log("this.props in detail", this.props.location.state.result);

    //     Each result should navigate to a second page in which, with a similar design to current music players,
    //      allows us to see the cover detail, basic information about the song and the basic controls to listen
    //      the song, play and pause, and skip to the previous and next song in the list of search results.
    // Furthermore, this detail page should have a button that allow us to share what we are listening in
    // our favourite social networks.

    const songDetail = this.props.location.state.result;
    return (
      <div className="player" id="ap">
        <div className="player_body">
          <img src={songDetail.artworkUrl100} className="image" />
          <ResponsivePlayer url={songDetail.previewUrl} />
          <p>
            the song is {songDetail.trackName} by the artist{" "}
            {songDetail.artistName}
          </p>
          <FacebookIcon size={32} round={true} />
          <FacebookShareButton quote="this songis the bollocks"  hashtag="#BensAppTune"/>
        </div>
      </div>
    );
  }
}

export default Detail;
