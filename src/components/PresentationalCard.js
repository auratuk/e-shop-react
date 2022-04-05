import React from "react";
import styles from "./PresentationalCard.module.css";

const PresentationalCard = (props) => {
  return (
    <div className={styles.presentationalCard}>
      <img className={styles.imgSrc} alt="book" src={props.value.imgSrc} />
      <div className={styles.bookDetails}>
        <h1 className={styles.bookName}>{props.value.name}</h1>
        <h2 className={styles.bookAuthor}>{props.value.author}</h2>
      </div>
    </div>
  );
};

export default PresentationalCard;
