import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Row, Col } from "react-bootstrap";
import car41 from "../carpics/car4/car4-1.jpeg";
import car42 from "../carpics/car4/car4-2.jpeg";
import car43 from "../carpics/car4/car4-3.jpeg";
import car44 from "../carpics/car4/car4-4.jpeg";
import car45 from "../carpics/car4/car4-5.jpeg";
import car46 from "../carpics/car4/car4-6.jpeg";
// import car47 from "../carpics/car4/car4-7.jpeg";
// import { withTranslation } from "react-i18next";
import { useTranslation  } from "react-i18next";

const Car4 = (props) => { 
  const { t } = useTranslation();
  const dimensions = {
    width:"100%",
    height:"",
  }
  const items = [      
    {   
      src: car41,
      altText: "Slide 1",
      caption: "",
      text1: <p>{t("carousel.atgcarousel1.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel1.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel1.text3")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: car42,
      altText: "Slide 2",
      caption: "",
      // text1: <p>{t("carousel.atgcarousel2.text1")}</p>,
      // text2: <p>{t("carousel.atgcarousel2.text2")}</p>,
      // text3: <p>{t("carousel.atgcarousel2.text3")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: car43,
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
      src: car44,
      altText: "Slide 4",
      caption: "",
      // text1: <p>{t("carousel.atgcarousel4.text1")}</p>,
      // text2: <p>{t("carousel.atgcarousel4.text2")}</p>,
      // text3: <p>{t("carousel.atgcarousel4.text3")}</p>,
      // text4: <p>{t("carousel.atgcarousel4.text4")}</p>,
      width:dimensions.width,
      height:dimensions.height,    
    },
    {
      src: car45,
      altText: "Slide 5",
      caption: "",
      text1: <p>{t("carousel.atgcarousel4.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel4.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel4.text3")}</p>,
      text4: <p>{t("carousel.atgcarousel4.text4")}</p>,
      width:dimensions.width,
      height:dimensions.height,    
    },
    {
      src: car46,
      altText: "Slide 6",
      caption: "",
      text1: <p>{t("carousel.atgcarousel4.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel4.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel4.text3")}</p>,
      text4: <p>{t("carousel.atgcarousel4.text4")}</p>,
      width:dimensions.width,
      height:dimensions.height,    
    },
    // {
    //   src: car46,
    //   altText: "Slide 4",
    //   caption: "",
    //   // text1: <p>{t("carousel.atgcarousel4.text1")}</p>,
    //   // text2: <p>{t("carousel.atgcarousel4.text2")}</p>,
    //   // text3: <p>{t("carousel.atgcarousel4.text3")}</p>,
    //   // text4: <p>{t("carousel.atgcarousel4.text4")}</p>,
    //   width:dimensions.width,
    //   height:dimensions.height,    
    // }
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
          {/* <div className="carousel-text">
           <h1>{item.text1}</h1>
           <h1>{item.text2}</h1>
           <h1>{item.text3}</h1>
           <h1>{item.text4}</h1>
          </div> */}
      </CarouselItem>
    );
  });

  return (
    <div>
          <Row>    
    <Col md={{ span: 6, offset: 0 }}>   
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
    </Col>
    <Col md={{ span: 2, offset: 2 }}>
    <div className="car-description">
          <h1>BMW</h1>
          <p>2002</p>
          <p>220000 km</p> 
          <h1>CFA1000000</h1>
          <h1></h1>
        </div>
    </Col>
    </Row> 
    </div>
  );
};

export default (Car4);
