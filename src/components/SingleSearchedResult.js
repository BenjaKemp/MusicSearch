import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";


class SingleSearchedResult extends Component {
  render() {
    return (
      <div className="fullscreen">
<Link to={`/detail/${this.props.trackId}`}>More detail</Link> 
<p>{this.props.artistName}</p>
<p>{this.props.trackName}</p>
<p>{this.props.collectionName}</p>
<p>{this.props.releaseDate}</p>
<p>{this.props.trackPrice}</p>
<p>{this.props.trackTimeMillis}</p>
<img src={this.props.artworkUrl30}/>
        </div>
    );
  }
}

export default SingleSearchedResult;
