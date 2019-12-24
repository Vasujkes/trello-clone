import React, { Fragment, useState, useRef, useEffect } from "react";
import { Button, Card } from "../";

import addIcon from "../../assets/add.svg";
import closeIcon from "../../assets/close.svg";

import "./AddForm.scss";

const AddForm = ({ children, isEmptyPanel }) => {
  const [showForm, setShowForm] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  return (
    <Fragment>
      {showForm ? (
        <div className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea
                placeholder={
                  isEmptyPanel
                    ? "Введите заголовок для этой карточки"
                    : "Введите заголовок для этой колонки"
                }
                ref={textareaRef}
                rows="3"
              />
            </Card>
            <div className="add-form__button">
              <Button>
                {isEmptyPanel
                  ? "Добавить еще одну карточку"
                  : "Добавить еще одну колонку"}
              </Button>
              <img
                onClick={setShowForm.bind(this, false)}
                className="add-form__button-close"
                src={closeIcon}
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="add-form__button">
          <div
            onClick={setShowForm.bind(this, true)}
            className="add-form__button-add-btn"
          >
            <img src={addIcon} alt="add icon" />
            <span>
              {isEmptyPanel
                ? "Добавить еще одну карточку"
                : "Добавить еще одну колонку"}
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddForm;
