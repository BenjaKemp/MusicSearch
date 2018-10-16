import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import "./Detail.css";
import ResponsivePlayer from "./ResponsivePlayer";
import bigFilter from '../selectors/filters'
class Detail extends Component {

  constructor(props){
    super(props)
  }

  render() {
    console.log('this.props', this.props)
    const songDetail = this.props.location.state;
const trackdetails = this.props.searchResult.map(el => {
  return el.trackId
})
const thisTrackIndex = trackdetails.indexOf(songDetail.trackId)
console.log('thisTrackIndex', thisTrackIndex)
console.log(trackdetails, 'trackdetails')
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

           <button onClick={(e)=>{}} disabled={thisTrackIndex===0}>skip to prev track</button>
           <button onClick={this.skip} disabled={thisTrackIndex===trackdetails.length-1}>skip to next track</button>

        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    searchResult: bigFilter(state),
  };
}

export default connect(mapStateToProps)(Detail);
