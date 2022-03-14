import React, {useEffect, useState} from "react";
import './CardsGrid.css';
import Card from './Card.js';

const CardsGrid = () => {
    const [cardsData, setCardsData] = useState([]);
 
    useEffect(()=> {
        fetch('http://localhost:3004/books/')
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
                    <Card key={book.id} value={book}></Card>    
                ))}
            </div>
        </div>
    );
};

export default CardsGrid;