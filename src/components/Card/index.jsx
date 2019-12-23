import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";
const Card = ({ text }) => {
  return <div className="card">{text}</div>;
};

Card.propTypes = {
  text: PropTypes.string.isRequired
};
export default Card;
