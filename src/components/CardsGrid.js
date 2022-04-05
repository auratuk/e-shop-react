import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card.js";
import styles from "./CardsGrid.module.css";

const CardsGrid = () => {
  const [cardsData, setCardsData] = useState([]);
  const [draftCards, setDraftCards] = useState([]);

  const addNewCard = () => {
    const cards = draftCards;

    cards.push({
      id: uuidv4(),
      imgSrc: "",
      name: "",
      author: "",
      isDraftCard: true,
    });

    setDraftCards([...cards]);
  };

  useEffect(() => {
    fetch("http://localhost:3004/books/")
      .then((response) => response.json())
      .then(setCardsData);
  }, []);

  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cards}>
        <div className={styles.card} onClick={() => addNewCard()}>
          <div className={styles.newCard}>
            <h1>+</h1>
          </div>
        </div>
        {draftCards.map((draftCard) => (
          <Card key={draftCard.id} value={draftCard}></Card>
        ))}
        {cardsData.map((book) => (
          <Card key={book.id} value={book}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
