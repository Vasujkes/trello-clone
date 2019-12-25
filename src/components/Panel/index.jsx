import React from "react";
import PropTypes from "prop-types";
import { Card, AddForm } from "../";
import classNames from "classnames";

import closeIcon from "../../assets/close.svg";
import "./Panel.scss";

const Panel = ({ panelIndex, title, cards, onAddPanel, onAddCard }) => {
  return (
    <div className={classNames("panel", { "panel--empty": !cards })}>
      <div className="panel__inner">
        {title && (
          <div className="panel__title">
            <b>{title}</b>
            <img src={closeIcon} alt="Clear svg icon" />
          </div>
        )}
        {cards && (
          <div className="panel__items">
            {cards.map((card, index) => (
              <Card key={index}>{card}</Card>
            ))}
          </div>
        )}
        <AddForm
          panelIndex={panelIndex}
          isEmptyPanel={!cards}
          onAddPanel={onAddPanel}
          onAddCard={onAddCard}
        />
      </div>
    </div>
  );
};

Panel.propTypes = {
  cards: PropTypes.node,
  title: PropTypes.string
};
export default Panel;
