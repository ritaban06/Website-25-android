import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

Videos.propTypes = {
  data: PropTypes.array,
};

function Videos(props) {
  const { data } = props;

  return (
    <div className=" videos ">
      {data.map((obj) => (
        <div className="video-container" key={obj.id}>
          <div className="video-box">
            <a target="_blank" href={obj.url}>
              <img className="video-box" src={obj.thumbnail} alt="1" />
            </a>
          </div>
          <div className="video-title">
            <a target="_blank" href={obj.url}>
              <p>{obj.title}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videos;
