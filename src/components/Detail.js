import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import "./Detail.css";
import ResponsivePlayer from "./ResponsivePlayer";
import bigFilter from '../selectors/filters'
import { withRouter } from "react-router";
class Detail extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const index = Number(this.props.match.params.id)
    const trackdetails = this.props.searchResult.map(el => {
      return el.trackId
    })
    const thisTrackIndex = trackdetails.indexOf(index)
    const songDetail = this.props.searchResult[thisTrackIndex];
    return (
      <div className="player" id="ap">
        <div className="player_body">
          <img src={songDetail.artworkUrl100} className="image" />
          <ResponsivePlayer url={songDetail.previewUrl} />
          <p>
            the song is {songDetail.trackName} by the artist{" "}
            {songDetail.artistName}
          </p>
          <FacebookShareButton
             url="http://localhost:3000/"
             quote="Bens app is the best"
             className="button"
             >


             <FacebookIcon
               size={32}
               round={false} />
           </FacebookShareButton>

           <button onClick={()=>{this.props.history.push(`/detail/${trackdetails[thisTrackIndex-1]}`) }} disabled={thisTrackIndex===0}>skip to prev track</button>
           <button onClick={()=>{this.props.history.push(`/detail/${trackdetails[thisTrackIndex+1]}`) }} disabled={thisTrackIndex===trackdetails.length-1}>skip to next track</button>

        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchResult: bigFilter(state),
  };
}

export default withRouter(connect(mapStateToProps)(Detail));
