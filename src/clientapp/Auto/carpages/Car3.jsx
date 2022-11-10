import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Row, Col } from "react-bootstrap";
import car31 from "../carpics/car3/car3-1.webp";
import car32 from "../carpics/car3/car3-2.webp";
import car33 from "../carpics/car3/car3-3.webp";
import car34 from "../carpics/car3/car3-4.webp";
import car35 from "../carpics/car3/car3-5.webp";
import car36 from "../carpics/car3/car3-6.webp";
// import car37 from "../carpics/car3/car3-7.webp";
// import { withTranslation } from "react-i18next";
import { useTranslation  } from "react-i18next";

const Car3 = (props) => { 
  const { t } = useTranslation();
  const dimensions = {
    width:"100%",
    height:"",
  }
  const items = [      
    {   
      src: car31,
      altText: "Slide 1",
      caption: "",
      text1: "Ford",
      text2: "2008",
      text3: "120000km cfa1000000",
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: car32,
      altText: "Slide 2",
      caption: "",
      text1: "Ford",
      text2: "2008",
      text3: "120000km cfa1000000",
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: car33,
      altText: "Slide 3",
      caption: "",
      // text1: "{t("carousel.atgcarousel3.text1")}",
      // text2: "{t("carousel.atgcarousel3.text2")}",
      // text3: "{t("carousel.atgcarousel3.text3")}",
      // text4: "{t("carousel.atgcarousel3.text4")}",
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: car34,
      altText: "Slide 4",
      caption: "",
      // text1: "{t("carousel.atgcarousel4.text1")}",
      // text2: "{t("carousel.atgcarousel4.text2")}",
      // text3: "{t("carousel.atgcarousel4.text3")}",
      // text4: "{t("carousel.atgcarousel4.text4")}",
      width:dimensions.width,
      height:dimensions.height,    
    },
    {
      src: car35,
      altText: "Slide 5",
      caption: "",
      // text1: "{t("carousel.atgcarousel4.text1")}",
      // text2: "{t("carousel.atgcarousel4.text2")}",
      // text3: "{t("carousel.atgcarousel4.text3")}",
      // text4: "{t("carousel.atgcarousel4.text4")}",
      width:dimensions.width,
      height:dimensions.height,    
    },
    {
      src: car36,
      altText: "Slide 6",
      caption: "",
      // text1: "{t("carousel.atgcarousel4.text1")}",
      // text2: "{t("carousel.atgcarousel4.text2")}",
      // text3: "{t("carousel.atgcarousel4.text3")}",
      // text4: "{t("carousel.atgcarousel4.text4")}",
      width:dimensions.width,
      height:dimensions.height,    
    },
    // {
    //   src: car36,
    //   altText: "Slide 4",
    //   caption: "",
    //   // text1: "{t("carousel.atgcarousel4.text1")}",
    //   // text2: "{t("carousel.atgcarousel4.text2")}",
    //   // text3: "{t("carousel.atgcarousel4.text3")}",
    //   // text4: "{t("carousel.atgcarousel4.text4")}",
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
          </div>           */}
      </CarouselItem>
      
    );
  });

  return ( 
    <div>   
       <Row>    
    <Col md={{ span:6, offset: 0 }}>   
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
      <h1></h1>
    <h1>Ford </h1> 
     <p>2008</p>
     <p>220000 km</p> 
     <h1>cfa1000000</h1>
        </div>
    </Col>
    </Row> 
    </div>    
  );
};

export default (Car3);
