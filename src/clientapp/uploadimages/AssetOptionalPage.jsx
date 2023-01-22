import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Row, Col } from "react-bootstrap";
import { useTranslation  } from "react-i18next";
import { createBrowserHistory } from 'history';


//https://codesandbox.io/s/c53q2?file=/src/App.js:58-172

const AssetOptionalPage = (props) => { 
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [imageextension, setImageextension] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [firstOpt, setFirstOpt] = useState('');
  const [secondOpt, setSecondOpt] = useState('');
  const [thirdOpt, setThirdOpt] = useState('');
  const [assetNote, setAssetNote] = useState('');
  const [assetName, setAssetName] = useState('');
  const [assetPrice, setAssetPrice] = useState('');
  const [assetDescription, setAssetDescription] = useState('');
  const [replyerName, setReplyerName] = useState('');
  const [reply, setReply] = useState('');
  const [mainImagesrc, setMainImagesrc] = useState();
  const [firstOptsrc, setFirstOptsrc] = useState();
  const [secondOptsrc, setSecondOptsrc] = useState();
  const [thirdOptsrc, setThirdOptsrc] = useState();
 
  const mainimagepath = props.location.state;

  const { t } = useTranslation();

  useEffect(() => {
    setImageSource();
  }, [])

  const setImageSource = () =>  {    
    const imagepaths = props.location.state;  
    if(imagepaths){
    const mainimage = imagepaths.mainimage;
    const opt1image = imagepaths.opt1image;
    const opt2image = imagepaths.opt2image;
    const opt3image = imagepaths.opt3image;
    const assetName = imagepaths.assetName;
    const assetPrice = imagepaths.assetPrice;
    const assetNote = imagepaths.assetNote;
    const assetDescription = imagepaths.assetDescription;
    const replyerName = imagepaths.replyerName;
    const reply = imagepaths.reply;
    
   setMainImagesrc(mainimage);
   
   setFirstOptsrc(opt1image);

   setSecondOptsrc(opt2image);
  
   setThirdOptsrc(opt3image); 
   setAssetNote(assetNote);
   setAssetName(assetName);
   setAssetPrice(assetPrice);
   setAssetDescription(assetDescription); 
   setReplyerName(replyerName);
   setReply(reply);
    }   
   }
  
  const dimensions = {
    width:"500px",
    height:"500px",
  }
  const items = [      
    {   
      src: mainImagesrc,
     // src:mainimage,
      altText: "Slide 1",
      caption: "",
      // text1: <p>{t("carousel.atgcarousel1.text1")}</p>,
      // text2: <p>{t("carousel.atgcarousel1.text2")}</p>,
      // text3: <p>{t("carousel.atgcarousel1.text3")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: firstOptsrc,
      altText: "Slide 2",
      caption: "",
      // text1: <p>{t("carousel.atgcarousel2.text1")}</p>,
      // text2: <p>{t("carousel.atgcarousel2.text2")}</p>,
      // text3: <p>{t("carousel.atgcarousel2.text3")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: secondOptsrc,
      altText: "Slide 3",
      caption: "",
      // text1: <p>{t("carousel.atgcarousel3.text1")}</p>,
      // text2: <p>{t("carousel.atgcarousel3.text2")}</p>,
      // text3: <p>{t("carousel.atgcarousel3.text3")}</p>,
      // text4: <p>{t("carousel.atgcarousel3.text4")}</p>,
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: thirdOptsrc,
      altText: "Slide 4",
      caption: "",
      // text1: <p>{t("carousel.atgcarousel4.text1")}</p>,
      // text2: <p>{t("carousel.atgcarousel4.text2")}</p>,
      // text3: <p>{t("carousel.atgcarousel4.text3")}</p>,
      // text4: <p>{t("carousel.atgcarousel4.text4")}</p>,
      width:dimensions.width,
      height:dimensions.height,    
    }
  ];
  
  
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
    <Col md={{ span: 6, offset: 0 }}>
    <div className="car-description">
      {/* <h1>{assetName}</h1>
      <p>{assetDescription}</p> 
      <p>{assetNote}</p>
      <h1>{assetPrice}</h1> */}  
      <h3> {replyerName} hits back with: </h3>
    
        <p>{reply}</p>
     </div>
    </Col>
    </Row> 
    </div>  
  );
};

export default (AssetOptionalPage);
