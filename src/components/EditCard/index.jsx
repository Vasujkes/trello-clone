import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";

import "./EditCard.scss";

const EditCard = ({ cardIndex, columnIndex, children, onEditText, onSave }) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const editCard = () => {
    if (value !== "") {
      onEditText(columnIndex, cardIndex, value);
      onSave(false);
    } else {
      window.confirm("Введите название карточки");
    }
  };

  const outsideClick = event => {
    const domNode = document.getElementsByClassName("edit-card__wrapper")[0];
    if (!domNode || !domNode.contains(event.target)) {
      onSave();
    }
  };

  useEffect(() => {
    if (textareaRef.current.value) {
      textareaRef.current.focus();
    }
  }, [onSave]);
  return (
    <div onClick={outsideClick} className="edit-card">
      <div className="edit-card__wrapper">
        <div className="list-card">
          <div className="list-card__details">
            <textarea
              onChange={e => setValue(e.target.value)}
              placeholder={children}
              ref={textareaRef}
              value={value}
              rows="3"
            />
          </div>
        </div>

        <Button onClick={editCard}>Сохранить</Button>
      </div>
    </div>
  );
};

export default EditCard;
