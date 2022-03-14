import React, {useEffect, useState} from "react";
import './CardsGrid.css';
import editButton from '../res/edit-button.svg';

const CardsGrid = () => {
    const [cardsData, setCardsData] = useState([]);
 
    useEffect(()=> {
        fetch('https://my-json-server.typicode.com/auratuk/e-shop/books')
            .then(response => response.json())
            .then(setCardsData);
    }, []);

    return (
        <div className="cards-wrapper">
            <div className="cards">
                <div className="card">
                    <div className="new-card">
                        <h1>+</h1>
                    </div>
                </div>
                {cardsData.map((book)=>(
                    <div key={book.id} className="card">
                        <button className="card-delete-btn">&times;</button>
                        <button className="edit-card-btn">
                            <img alt="edit" src={editButton}/> 
                        </button>
                        <img className="img-src" alt="book" src={book.imgSrc}/>
                        <div className="book-details">
                            <h1 className="book-name">{book.name}</h1>
                            <h2 className="book-author">{book.author}</h2>
                        </div>
                    </div>))}
            </div>
        </div>
    );
};

export default CardsGrid;