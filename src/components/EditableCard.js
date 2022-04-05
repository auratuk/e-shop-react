import React, { useState } from "react";
import styles from "./EditableCard.module.css";

const URL = "http://localhost:3004/books/";

const EditableCard = (props) => {
  //TODO: redo to use one object for all those properties
  const [imageSource, setImageSource] = useState(props.book.imgSrc);
  const [bookName, setBookName] = useState(props.book.name);
  const [bookAuthor, setBookAuthor] = useState(props.book.author);

  const saveBookUpdates = async (e) => {
    e.preventDefault();

    const bookToUpdate = {
      id: props.book.id,
      imgSrc: imageSource,
      name: bookName,
      author: bookAuthor,
    };

    if (props.book.isDraftCard) {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(bookToUpdate),
      });
    } else {
      await fetch(URL + props.book.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(bookToUpdate),
      });
    }

    props.handleSaving(bookToUpdate);
  };

  return (
    <form className={styles.editableCard} onSubmit={saveBookUpdates}>
      <h1>Edit a book</h1>
      <input
        type="text"
        placeholder="Image link..."
        value={imageSource}
        onChange={(e) => setImageSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author name..."
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book name..."
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button className={styles.saveBtn} type="submit">
        Save me, please
      </button>
    </form>
  );
};

export default EditableCard;
