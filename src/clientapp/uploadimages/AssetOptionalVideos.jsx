import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
import { useTranslation  } from "react-i18next";
import { createBrowserHistory } from 'history';                 
//import Video from "/Applications/XAMPP/xamppfiles/htdocs/htdocdev/ritab/src/server/assets/images/main.mp4";

//https://codesandbox.io/s/c53q2?file=/src/App.js:58-172

  function AssetOptionalVideos ({propsvideopath})  {  
  const [videopath, setVideosrc] = useState();

  const { t } = useTranslation();

  useEffect(() => {
    setImageSource();
  }, [])

  const setImageSource = () =>  { 
   setVideosrc(propsvideopath);

    }   
   
  
  const dimensions = {
    width:"500px",
    height:"500px",
  } 


  return ( 
    <div>
    <Row className="margin-maker">    
    <Col md={{ span: 6, offset: 0}}>
    <div>    
    <video width="300px" height="400px"  controls="controls" >
    {/* /Applications/XAMPP/xamppfiles/htdocs/htdocdev/ritab/src/server/assets/images/main.mp4 */}
    <source src="/Applications/XAMPP/xamppfiles/htdocs/htdocdev/ritab/src/server/assets/images/main.mp4" type="video/mp4"/>
    {/* <source src="../../server/assets/images/main.mp4" type="video/mp4"/> */}
    Your browser does not support the video tag.
    </video>
    </div>
        <div>
        <video width="300px" height="400px" controls>
        {/*                 <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                      */}
          <source src={videopath} type="video/mp4" />
        </video>
        </div>
    </Col>
    </Row>  
    </div>    
  );
  }


export default (AssetOptionalVideos);


