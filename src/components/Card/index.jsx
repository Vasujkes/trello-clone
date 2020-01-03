import React, { useState } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import EditCard from "../EditCard";

import editSvg from "../../assets/edit.svg";
import "./Card.scss";

const Card = ({ cardIndex, columnIndex, children, onRemove, onEditText }) => {
  const [showField, setShowField] = useState(false);
  const onSave = () => {
    setShowField(false)
  };
  return typeof cardIndex !== "undefined" ? (
    <Draggable
      draggableId={`card-${columnIndex}-${cardIndex}`}
      index={cardIndex}
    >
      {(provided, snapshot) => (
        <div
          //onClick={editCard}
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {showField ? (
            <EditCard
              children={children}
              columnIndex={columnIndex}
              cardIndex={cardIndex}
              onEditText={onEditText}
              onSave={onSave}
            />
          ) : (
            <div className="card-view">
              <span>{children}</span>
              <img
                src={editSvg}
                onClick={setShowField.bind(this, true)}
                alt="edit card text"
              />
            </div>
          )}
        </div>
      )}
    </Draggable>
  ) : (
    <div className="card">{children}</div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};
export default Card;
