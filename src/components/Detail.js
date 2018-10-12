import React, { Component } from 'react';


class Detail extends Component {
  render() {
    console.log('this.props in detail', this.props.location.state.result)

//     Each result should navigate to a second page in which, with a similar design to current music players,
//      allows us to see the cover detail, basic information about the song and the basic controls to listen
//      the song, play and pause, and skip to the previous and next song in the list of search results.
// Furthermore, this detail page should have a button that allow us to share what we are listening in
// our favourite social networks.


    const songDetail = this.props.location.state.result
    return (

        <div className="fullscreen">
<h1>this is the detail</h1>
        </div>
    );
  }
}

export default Detail;
