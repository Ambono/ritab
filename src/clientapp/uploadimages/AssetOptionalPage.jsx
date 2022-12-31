import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Row, Col } from "react-bootstrap";
import car11 from "../../clientapp/Auto/carpics/car1/car12.webp";
import car12 from "../../clientapp/Auto/carpics/car1/car12.webp";
import car13 from "../../clientapp/Auto/carpics/car1/car13.webp";
import car14 from "../../clientapp/Auto/carpics/car1/car14.webp";
import car15 from "../../clientapp/Auto/carpics/car1/car15.webp";
import car16 from "../../clientapp/Auto/carpics/car1/car16.webp";
//import car17 from "../carpics/car1/car17.webp";
// import { withTranslation } from "react-i18next";
import { useTranslation  } from "react-i18next";

const AssetOptionalPage = (props) => { 


  const { t } = useTranslation();
  const dimensions = {
    width:"100%",
    height:"",
  }
  const items = [      
    {   
      src: car11,
      altText: "Slide 1",
      caption: "",
      text1: <p>{t("carousel.atgcarousel1.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel1.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel1.text3")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: car12,
      altText: "Slide 2",
      caption: "",
      text1: <p>{t("carousel.atgcarousel2.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel2.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel2.text3")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: car13,
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
      src: car14,
      altText: "Slide 4",
      caption: "",
      text1: <p>{t("carousel.atgcarousel4.text1")}</p>,
      text2: <p>{t("carousel.atgcarousel4.text2")}</p>,
      text3: <p>{t("carousel.atgcarousel4.text3")}</p>,
      text4: <p>{t("carousel.atgcarousel4.text4")}</p>,
      width:dimensions.width,
      height:dimensions.height,    
    },
    {
      src: car15,
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
      src: car16,
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
    //   src: car16,
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
    <Col md={{ span: 8, offset: 0 }}>
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
    <Col md={{ span: 2, offset: 0 }}>
    <div className="car-description">
      <h1></h1>
      <h1>Suziki Vitara </h1> 
      <p>2020</p>
      <p>10000 km</p> 
      <p>cfa25000000</p>
     </div>
    </Col>
    </Row> 
    </div>  
  );
};

export default (AssetOptionalPage);
