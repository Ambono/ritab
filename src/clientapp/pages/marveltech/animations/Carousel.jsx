import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import atgcarousel1 from "../../../img/atgcarousel1.png";
import atgcarousel2 from "../../../img/atgcarousel2.png";
import atgcarousel3 from "../../../img/atgcarousel3.png";
import atgcarousel4 from "../../../img/atgcarousel4.png";
// import { withTranslation } from "react-i18next";
import { useTranslation  } from "react-i18next";

const CarouselMarveltech = (props) => { 


  const { t } = useTranslation();
  const dimensions = {
    width:"100%",
    height:"800px",
  }
  const items = [      
    {   
      src: atgcarousel1,
      altText: "Slide 1",
      caption: "",
      text1: <p>{t("carousel.atgcarousel1.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel1.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel1.text3")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: atgcarousel2,
      altText: "Slide 2",
      caption: "",
      text1: <p>{t("carousel.atgcarousel2.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel2.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel2.text3")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: atgcarousel3,
      altText: "Slide 3",
      caption: "",
      text1: <p>{t("carousel.atgcarousel3.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel3.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel3.text3")}</p>,
      text4: <p>{t("carousel.atgcarousel3.text4")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: atgcarousel4,
      altText: "Slide 4",
      caption: "",
      text1: <p>{t("carousel.atgcarousel4.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel4.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel4.text3")}</p>,
      text4: <p>{t("carousel.atgcarousel4.text4")}</p>,
      width:dimensions.width,
      height:dimensions.height,    
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
 
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {     
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
     
        
     <CarouselCaption
          captionText={item.caption}         
        />

          <img src={item.src} alt={item.altText} width={item.width} height={item.height}/>
          <div className="carousel-text">
           <h1>{item.text1}</h1>
           <h1>{item.text2}</h1>
           <h1>{item.text3}</h1>
           <h1>{item.text4}</h1>
          </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default (CarouselMarveltech);
