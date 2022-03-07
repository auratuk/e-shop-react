import React, {useEffect, useState} from "react";
import './Carousel.css';

const Carousel = () => {
    const [carouselData, setCarouselData] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);

    const transformSlides = (newIndex) => {
        if(newIndex < 0) {
            newIndex = carouselData.length-1;
        } else if(newIndex >= carouselData.length) {
            newIndex = 0;
        }

        setCurrentItem(newIndex);
    }
 
    useEffect(()=> {
        fetch('https://my-json-server.typicode.com/auratuk/e-shop/carousel')
            .then(response => response.json())
            .then(setCarouselData);
    }, []);

    return (
        <div className="carousel-wrapper">
            <div className="carousel">
                {carouselData.map((carouselItem, index)=>(
                    <a key={carouselItem.id} href={carouselItem.redirectUrl} target="_blank" rel="noreferrer">
                        <div className={index === currentItem ? 'carousel-item' : 'carousel-item--hidden'} >
                            <img src={carouselItem.imgSrc} alt="Carousel item"/>
                            <h1>{carouselItem.desc}</h1>
                        </div>
                    </a>))}
                <div className="carousel-buttons hide">
                    <button className="carousel-btn carousel-btn-left" onClick={() => transformSlides(currentItem-1)}>&larr;</button>
                    <button className="carousel-btn carousel-btn-right" onClick={() => transformSlides(currentItem+1)}>&rarr;</button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;