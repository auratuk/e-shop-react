import React, { useState } from "react";
import editButton from "../res/edit-button.svg";
import styles from "./Card.module.css";
import EditableCard from "./EditableCard";
import PresentationalCard from "./PresentationalCard";

const Card = (props) => {
  const [isCardEditable, setIsCardEditable] = useState(props.value.isDraftCard);
  const [book, setBook] = useState(props.value);

  const handleSaving = (updatedBook) => {
    setIsCardEditable(false);
    setBook(updatedBook);
  };

  return (
    <div className={styles.card}>
      <button className={styles.cardDeleteBtn}>&times;</button>
      <button
        className={styles.editCardBtn}
        onClick={() => setIsCardEditable(true)}
      >
        <img alt="edit" src={editButton} />
      </button>
      {isCardEditable ? (
        <EditableCard book={book} handleSaving={handleSaving} />
      ) : (
        <PresentationalCard value={book} />
      )}
    </div>
  );
};

export default Card;
