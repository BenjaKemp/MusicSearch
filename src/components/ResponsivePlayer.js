
import React, { Component } from "react";
import ReactPlayer from 'react-player'


class ResponsivePlayer extends Component {
  render () {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={this.props.url}
          width='100%'
          height='50%'
          controls={true}
        />
      </div>
    )
  }
}


export default ResponsivePlayer
