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
  const [mainImagesrc, setMainImagesrc] = useState();
  const [firstOptsrc, setFirstOptsrc] = useState();
  const [secondOptsrc, setSecondOptsrc] = useState();
  const [thirdOptsrc, setThirdOptsrc] = useState();
 

//<br />
//<b>Notice</b>:  Trying to access array offset on value of type null in <b>/Applications/XAMPP/xamppfiles/htdocs/htdocdev/ritab/src/server/assets/getoptionalspath.php</b> on line <b>11</b><br />
//[{"0":"car dacia","Name":"car dacia","1":"images\/modpleh\/cardacia.main.PNG","PathMainImage":"images\/modpleh\/cardacia.main.PNG","2":"modpleh@yahoo.co.uk","Useremail":"modpleh@yahoo.co.uk","3":"images\/modpleh\/cardacia.opt1.PNG","PathFirstOptionalImage":"images\/modpleh\/cardacia.opt1.PNG","4":"images\/modpleh\/cardacia.opt2.PNG","PathSecondOptionalImage":"images\/modpleh\/cardacia.opt2.PNG","5":"images\/modpleh\/cardacia.opt3.PNG","PathThirdOptionalImage":"images\/modpleh\/cardacia.opt3.PNG"}]
  
// const { history, location } = this.props;
  // const { pathname, state, search } = location;
  const mainimagepath = props.location.state;

  //const mainimage = require('../../server/assets/images/modpleh/cardacia.main.PNG').default; 

//console.log("props.location.state: ", mainimagepath);
//console.log("mainimage: ", mainimage);

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
    // console.log("this is mainimagepath.mainimage:", mainimagepath.mainimage)
    // var n = str.lastIndexOf('/');
    // var result = str.substring(n + 1);
    // const finalresult = result.split('.');
    // console.log("asset's name of th asset: ", finalresult[0]);
    //setImageextension(finalresult[0]);
   // getfolderforoptionamimage(imageextension); 

  //  setMainImage(lastresult+".main.PNG");
  //  const mainimg = require(`../../server/assets/${mainImage}`).default;
   setMainImagesrc(mainimage);
   //console.log("mainimage: ", mainimg);

  //  setFirstOpt(lastresult+".opt1.PNG");
  //  const optimage1 = require(`../../server/assets/${firstOpt}`).default;
   setFirstOptsrc(opt1image);

  //  setSecondOpt(lastresult+".opt2.PNG");
  //  const optimage2 = require(`../../server/assets/${secondOpt}`).default;
   setSecondOptsrc(opt2image);

  //  setThirdOpt(lastresult+".opt3.PNG");       
  //  const optimage3 = require(`../../server/assets/${thirdOpt}`).default;
   setThirdOptsrc(opt3image); 
   setAssetNote(assetNote);
   setAssetName(assetName);
   setAssetPrice(assetPrice);
   setAssetDescription(assetDescription); 
    }   
   }
  

//  const getfolderforoptionamimage  = (imageextension) => { 
//   const baseURL = "http://localhost/htdocdev/ritab/src/server/assets/getoptionalspath.php";  
//   axios({
//     method: "post",
//     url: baseURL,
//     data: imageextension
//   }).then((result) => {
//       if (result.status === 200) {
//       //"{"0":"car dacia","Name":"car dacia","1":"images\/modpleh\/cardacia.main.PNG","PathMainImage":"images\/modpleh\/cardacia.main.PNG","2":"modpleh@yahoo.co.uk","Useremail":"modpleh@yahoo.co.uk","3":"images\/modpleh\/cardacia.opt1.PNG","PathFirstOptionalImage":"images\/modpleh\/cardacia.opt1.PNG","4":"images\/modpleh\/cardacia.opt2.PNG","PathSecondOptionalImage":"images\/modpleh\/cardacia.opt2.PNG","5":"images\/modpleh\/cardacia.opt3.PNG","PathThirdOptionalImage":"images\/modpleh\/cardacia.opt3.PNG"}"
//         var str = result.data.substring(result.data.indexOf("[") + 1); 
//         var object = str.split("]");
//         var finalobject = object[0];
//         var n = finalobject.lastIndexOf("images");
//         var result = finalobject.substring(n);
//         var finalresult = result.split('}')[0].replace('\\/','/').replace('\\/','/');
//          var lastresult = finalresult.split('.')[0];
//         console.log("result data: ", lastresult);    
//         setMainImage(lastresult+".main.PNG");
//         const mainimg = require(`../../server/assets/${mainImage}`).default;
//         setMainImagesrc(mainimg);
//         console.log("mainimage: ", mainimg);

//         setFirstOpt(lastresult+".opt1.PNG");
//         const optimage1 = require(`../../server/assets/${firstOpt}`).default;
//         setFirstOptsrc(optimage1);

//         setSecondOpt(lastresult+".opt2.PNG");
//         const optimage2 = require(`../../server/assets/${secondOpt}`).default;
//         setSecondOptsrc(optimage2);

//         setThirdOpt(lastresult+".opt3.PNG");       
//         const optimage3 = require(`../../server/assets/${thirdOpt}`).default;
//         setThirdOptsrc(optimage3);         
//     }})
//   }
 
//   console.log("optional 1:", firstOptsrc);
  
  const dimensions = {
    width:"100%",
    height:"",
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
      <h1>{assetName}</h1>
      <p>{assetDescription}</p> 
      <p>{assetNote}</p>
      <h1>{assetPrice}</h1>
     </div>
    </Col>
    </Row> 
    </div>  
  );
};

export default (AssetOptionalPage);
