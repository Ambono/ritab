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
import AssetOptionalVideos from './AssetOptionalVideos' ;

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
  const [contactEmail, setContactEmail] = useState();
 const [videoPath, setVideoPath] = useState();
  const mainimagepath = props.location.state;

  const { t } = useTranslation();

  useEffect(() => {
    setImageSource();
  }, [])

  const setImageSource = () =>  {    
    const imagepaths = props.location.state;  
    const mainimage = localStorage.getItem('mainimage')==null?imagepaths.mainimage:localStorage.getItem('mainimage');//this.props.prop_mainimage;//  
    const opt1image = localStorage.getItem('opt1image')==null?imagepaths.opt1image:localStorage.getItem('opt1image');//this.props.prop_opt1image;//
    const opt2image = localStorage.getItem('opt2image')==null?imagepaths.opt2image:localStorage.getItem('opt2image'); //this.props.prop_opt2image;//
    const opt3image = localStorage.getItem('opt3image')==null?imagepaths.opt3image:localStorage.getItem('opt3image');//this.props.prop_opt2image;//
    const assetName = localStorage.getItem('assetName')==null?imagepaths.assetName:localStorage.getItem('assetName'); //this.props.prop_assetName;//
    const assetPrice = localStorage.getItem('assetPrice')==null?imagepaths.assetPrice:localStorage.getItem('assetPrice');//this.props.prop_assetPrice;//
    const assetNote = localStorage.getItem('assetNote')==null?imagepaths.assetNote:localStorage.getItem('assetNote');//this.props.prop_assetNote;//
    const assetDescription = localStorage.getItem('assetDescription')==null?imagepaths.assetDescription:localStorage.getItem('assetDescription');//this.props.prop_assetDescription;//
    const replyerName = localStorage.getItem('replyerName')==null?imagepaths.replyerName:localStorage.getItem('replyerName');//this.props.prop_replyerName;//
    const reply = localStorage.getItem('reply')==null?imagepaths.reply:localStorage.getItem('reply'); //this.props.prop_reply;//
    const videoPath = localStorage.getItem('video')==null?imagepaths.video:localStorage.getItem('video');
   
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
   setVideoPath(videoPath);
   
   }
  
  const dimensions = {
    width:"500px",
    height:"500px",
  }
  const items = [      
    {   
      src: mainImagesrc,    
      altText: "Slide 1",
      caption: "",   
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: firstOptsrc,
      altText: "Slide 2",
      caption: "",    
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: secondOptsrc,
      altText: "Slide 3",
      caption: "",    
      width:dimensions.width,
      height:dimensions.height,
    },
    {
      src: thirdOptsrc,
      altText: "Slide 4",
      caption: "",     
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
    <Row className="margin-maker">    
    <Col md={{ span: 6, offset: 0}}>
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
    <div className="hitback-description">
   
      <h3> {replyerName} hits back with: </h3>
    
        <p>{reply}</p>
     </div>
    </Col>
    </Row> 
    <Row>  
    <Col>
    {/* <AssetOptionalVideos/>   */}

  <div className="body-pannel">
       <video width="300px" height="400px" controls>
           <source src={videoPath} type="video/mp4" />
      </video>
  </div>
  </Col>   
    </Row> 
    
    </div>    
  );
};

export default (AssetOptionalPage);
