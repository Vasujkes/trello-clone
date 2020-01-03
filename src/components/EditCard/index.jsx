import React, { useState } from "react";
import Button from "../Button";

import "./EditCard.scss";

const EditCard = ({ cardIndex, columnIndex, children, onEditText, onSave }) => {
  const [value, setValue] = useState("");

  const editCard = () => {
      if(value != '') {
        onEditText(columnIndex, cardIndex, value);
        onSave(false)
      } else {
        window.confirm("Введите название карточки")
      } 
  };
 

  return (
    <div className="edit-card">
      <textarea
        onChange={e => setValue(e.target.value)}
        placeholder={children}
        value={value}
        rows="3"
      />
      <Button onClick={editCard}>Сохранить</Button>
    </div>
  );
};

export default EditCard;
