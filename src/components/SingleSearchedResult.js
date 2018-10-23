import React, { Component } from "react";
import { Link } from "react-router-dom";

import millisToMinutesAndSeconds from "../helpers/timeEditor";
import releaseDateConverter from "../helpers/releaseDateConverter";
import priceConverter from "../helpers/priceConverter";

export const SingleSearchedResult = (props) => {
    return (
      <div className="albums">
        <Link
          to={`/detail/${props.trackId}`}
          style={{ textDecoration: "none" }}
        >
          <div className="album">
            <img className="album__artwork" src={props.artworkUrl100} alt=""/>
            <div className="album__details">
              <h2>{props.collectionName}</h2>
              <p className="album__artist">{props.artistName}</p>

              <p className="album__desc">Track Title: {props.trackName}</p>

              <p className="album__desc">{props.primaryGenreName}</p>
              <p className="album__desc">
                Release Date: {releaseDateConverter(props.releaseDate)}
              </p>
              <p className="album__desc">
                Price: {priceConverter(props.trackPrice)} Time:{" "}
                {millisToMinutesAndSeconds(props.trackTimeMillis)}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );

}

export default SingleSearchedResult;
