import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import styles from "./CardsGrid.module.css";

const CardsGrid = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/books/")
      .then((response) => response.json())
      .then(setCardsData);
  }, []);

  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.newCard}>
            <h1>+</h1>
          </div>
        </div>
        {cardsData.map((book) => (
          <Card key={book.id} value={book}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
