import React, { Fragment, useState, useRef, useEffect } from "react";
import { Button, Card } from "../";

import addIcon from "../../assets/add.svg";
import closeIcon from "../../assets/close.svg";

import "./AddForm.scss";
const AddForm = () => {
  const [showForm, setShowForm] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if(textareaRef.current) {
      textareaRef.current.focus();
    }
   
  }, [showForm]);

  return (
    <Fragment>
      {showForm ? (
        <div className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea placeholder="Введите заголовок для этой карточки" ref={textareaRef} rows="3" />
            </Card>
            <div className="add-form__button">
              <Button>Добавить карточку</Button>
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
            <span>Добавить еще одну карточку</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddForm;
