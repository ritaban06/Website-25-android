import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

Websites.propTypes = {
  data: PropTypes.array,
};

function Websites(props) {
  const { data } = props;

  return (
    <div className="website-section">
      {data.map((obj) => (
        <a
          class="website-container"
          key={obj.id}
          target="_blank"
          href={obj.url}
        >
          <div class="website-conti">
            <div className="website-name">{obj.title}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Websites;
