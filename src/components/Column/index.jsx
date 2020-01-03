import React from "react";
import PropTypes from "prop-types";
import { Card, AddForm } from "..";

import { Droppable } from "react-beautiful-dnd";

import closeIcon from "../../assets/close.svg";
import "./Column.scss";

const Column = ({
  columnIndex,
  title,
  cards,
  onAddColumn,
  onAddCard,
  onRemove,
  onEditText,
  onReorder
}) => {
  const removeColumn = () => {
    if (global.confirm("Вы действительно хотите удалить колонку ?")) {
    onRemove(columnIndex);
    }
  };

  return cards ? (
    <Droppable type="CARDS" droppableId={`column-${columnIndex}`}>
      {provided => (
        <div
          className="column"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="column__inner">
            {title && (
              <div className="column__title">
                <b>{title}</b>
                <div onClick={removeColumn} className="column__title--remove">
                  <img src={closeIcon} alt="Clear svg icon" />
                </div>
              </div>
            )}
            <div className="column__items">
              {cards.map((card, index) => (
                <Card key={index} onEditText={onEditText} columnIndex={columnIndex} cardIndex={index}>
                  {card}
                </Card>
              ))}
              {provided.placeholder}
            </div>
            <AddForm
              isEmptyColumn={false}
              columnIndex={columnIndex}
              onAddColumn={onAddColumn}
              onAddCard={onAddCard}
            />
          </div>
        </div>
      )}
    </Droppable>
  ) : (
    <div className={"column column--empty"}>
      <div className="column__inner">
        <AddForm
          isEmptyColumn={true}
          columnIndex={columnIndex}
          onAddColumn={onAddColumn}
          onAddCard={onAddCard}
        />
      </div>
    </div>
  );
};

Column.propTypes = {
  cards: PropTypes.node,
  title: PropTypes.string
};
export default Column;
