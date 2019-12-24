import React from "react";
import PropTypes from "prop-types";
import { Card, AddForm } from "../";

import "./Panel.scss";

const Panel = ({ items }) => {
  return (
    <div className="panel">
    {items &&  <div className="panel__items">
        {items && items.map(card => <Card>{card.text}</Card>)}
      </div>}
      <AddForm />
    </div>
  );
};

Panel.propTypes = {
  text: PropTypes.string.isRequired
};
export default Panel;
