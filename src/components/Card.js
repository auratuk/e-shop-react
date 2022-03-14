import React, {useState} from "react";
import editButton from '../res/edit-button.svg';
import './Card.css';

const URL = 'http://localhost:3004/books/';

const Card = (props) => {
    const [isCardEditable, setIsCardEditable] = useState(false);
    const [imageSource, setImageSource] = useState(props.value.imgSrc);
    const [bookName, setBookName] = useState(props.value.name);
    const [bookAuthor, setBookAuthor] = useState(props.value.author);

    const saveBookUpdates = async (e) => {
        e.preventDefault();

        const bookToUpdate = {
            id: props.value.id,
            imgSrc: imageSource,
            name: bookName,
            author: bookAuthor
        }
        
        await fetch(URL + props.value.id, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookToUpdate)
        });

        setIsCardEditable(false);
    }

    const editableCard = (
        <form className="editable-card" onSubmit={saveBookUpdates}>
            <h1>Edit a book</h1>
            <input type="text" placeholder="Image link..." value={imageSource} onChange={(e) => setImageSource(e.target.value)}/>
            <input type="text" placeholder="Author name..." value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)}/>
            <input type="text" placeholder="Book name..." value={bookName} onChange={(e) => setBookName(e.target.value)}/>
            <button className="save-btn" type="submit">Save me, please</button>
        </form>
    );

    const presentationalCard = (
        <div className="presentational-card">        
            <img className="img-src" alt="book" src={imageSource}/>
            <div className="book-details">
                <h1 className="book-name">{bookName}</h1>
                <h2 className="book-author">{bookAuthor}</h2>
            </div>
        </div>
    );

    return (
        <div className="card">
            <button className="card-delete-btn">&times;</button>
            <button className="edit-card-btn" onClick={() => setIsCardEditable(true)}>
                <img alt="edit" src={editButton}/> 
            </button>
            {isCardEditable ? editableCard : presentationalCard}
        </div>
    );
};

export default Card;