import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

function Button(props) {
  const { link, title } = props;

  // Function to check if the link is an external link
  const isExternalLink = (link) => {
    return link.startsWith('http://') || link.startsWith('https://');
  };

  return (
    <>
      {isExternalLink(link) ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="action-btn">
          <span>{title}</span>
        </a>
      ) : (
        <a href={link} className="action-btn">
          <span>{title}</span>
        </a>
      )}
    </>
  );
}

export default Button;
