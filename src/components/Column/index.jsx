import React from "react";
import PropTypes from "prop-types";
import { Card, AddForm } from "..";
import classNames from "classnames";

import closeIcon from "../../assets/close.svg";
import "./Column.scss";

const Column = ({
  ColumnIndex,
  title,
  cards,
  onAddColumn,
  onAddCard,
  onRemove
}) => {
  const removeColumn = () => {
    if(global.confirm("Вы действительно хотите удалить колонку ?")) {
      onRemove(ColumnIndex)
    }
  }
  return (
    <div className={classNames("column", { "column--empty": !cards })}>
      <div className="column__inner">
        {title && (
          <div className="column__title">
            <b>{title}</b>
            <div onClick={removeColumn} className="column__title--remove">
              <img src={closeIcon} alt="Clear svg icon" />
            </div>
          </div>
        )}
        {cards && (
          <div className="column__items">
            {cards.map((card, index) => (
              <Card key={index}>{card}</Card>
            ))}
          </div>
        )}
        <AddForm
          ColumnIndex={ColumnIndex}
          isEmptyColumn={!cards}
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
