import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "../";

import addIcon from "../../assets/add.svg";
import closeIcon from "../../assets/close.svg";

import "./Panel.scss";

const AddForm = () => {
  return (
    <Fragment>
      <div className="add-form">
        <div className="add-form__input">
          <Card>
            <textarea rows="3"></textarea>
          </Card>

          <div className="add-form__button">
            <Button>Добавить карточку</Button>
            <img src={closeIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="panel__button">
        <div className="panel__button-add-btn">
          <img src={addIcon} alt="add icon" />
          <span>Добавить еще одну карточку</span>
        </div>
      </div>
    </Fragment>
  );
};

const Panel = ({ items }) => {
  return (
    <div className="panel">
      <div className="panel__items">
        {items.map(card => (
          <Card {...card} />
        ))}
      </div>
      <AddForm />
    </div>
  );
};

Panel.propTypes = {
  text: PropTypes.string.isRequired
};
export default Panel;
