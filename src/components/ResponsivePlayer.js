
import React, { Component } from "react";
import ReactPlayer from 'react-player'


export const  ResponsivePlayer = (props) =>  {

    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={props.url}
          width='100%'
          height='50%'
          controls={true}
        />
      </div>
    )

}


export default ResponsivePlayer
