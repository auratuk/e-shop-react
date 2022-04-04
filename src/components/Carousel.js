import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const transformSlides = (newIndex) => {
    if (newIndex < 0) {
      newIndex = carouselData.length - 1;
    } else if (newIndex >= carouselData.length) {
      newIndex = 0;
    }

    setCurrentItem(newIndex);
  };

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/auratuk/e-shop/carousel")
      .then((response) => response.json())
      .then(setCarouselData);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {carouselData.map((carouselItem, index) => (
          <a
            key={carouselItem.id}
            href={carouselItem.redirectUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={
                index === currentItem
                  ? styles.carouselItem
                  : styles.carouselItemHidden
              }
            >
              <img src={carouselItem.imgSrc} alt="Carousel item" />
              <h1>{carouselItem.desc}</h1>
            </div>
          </a>
        ))}
        <div className={`${styles.carouselButtons} hide`}>
          <button
            className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
            onClick={() => transformSlides(currentItem - 1)}
          >
            &larr;
          </button>
          <button
            className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
            onClick={() => transformSlides(currentItem + 1)}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
