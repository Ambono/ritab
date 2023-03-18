import {useState, useEffect} from 'react';
import config from '../../config.json';

 
 function getEnvironment(){   
    if(config.ENVIRONMENT.DEV)
    return "dev";
    if(config.ENVIRONMENT.LIVE)
    return "live";
    if(config.ENVIRONMENT.TEST)
    return "test"   
}

 function baseUrl(){   
    switch(getEnvironment()){
      case "dev":
      return config.TEST_BASE ;//"groupakwabatech.com",      
      case "live":
      return  config.BASE_URL_LOCAL ;
      case "test":
      return config.BASE_URL_LIVE ;      
    }
    }
 
 function getContactUsUrl(){
    switch(getEnvironment()){
        case "dev":
        return  config.MANUAL_URL.CONTACTUS;
        case "live":
        return  config.DIRECT_LIVE.CONTACTUS;
        case "test":
        return  config.DIRECT_TEST.CONTACTUS;
        }

}
 function retrieveMessagesUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.RETRIEVEMYMESSAGES;
        case "live":
        return config.DIRECT_LIVE.RETRIEVEMYMESSAGES;
        case "test":
        return config.DIRECT_TEST.RETRIEVEMYMESSAGES;
        }

}
 function bookingsUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.BOOKINGS;
        case "live":
        return config.DIRECT_LIVE.BOOKINGS;
        case "test":
        return config.DIRECT_TEST.BOOKINGS;
        }
    
}
 function retrieveBookingsUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.RETRIEVEBOOKINGS;
        case "live":
        return config.DIRECT_LIVE.RETRIEVEBOOKINGS;
        case "test":
        return config.DIRECT_TEST.RETRIEVEBOOKINGS;
        }

}
 function registerSimpleUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.REGISTERSIMPLE;
        case "live": 
        return config.DIRECT_LIVE.REGISTERSIMPLE; 
        case "test":  
        return config.DIRECT_TEST.REGISTERSIMPLE; 
        }      

}
 function loginUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.LOGIN;
        case "live": 
        return config.DIRECT_LIVE.LOGIN;
        case "test":
        return config.DIRECT_TEST.LOGIN;
    }

}
 function loginManagerUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.LOGINMANAGER;
        case "live":
        return config.DIRECT_LIVE.LOGINMANAGER;
        case "test":
        return config.DIRECT_TEST.LOGINMANAGER;
        }
    
}
 function logoutUrl(){
    switch(getEnvironment()){
        case "dev":
        return  config.MANUAL_URL.LOGOUT;
        case "live":
        return  config.DIRECT_LIVE.LOGOUT;
        case "test":
        return  config.DIRECT_TEST.LOGOUT;
        }
    
}
 function insertAssetUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.INSERTASSET;
        case "live":
        return config.DIRECT_LIVE.INSERTASSET;
        case "test":
        return config.DIRECT_TEST.INSERTASSET;
        }
}

 function retrieveAssetUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.RETRIEVEASSET;
        case "live":
        return config.DIRECT_LIVE.RETRIEVEASSET;
        case "test":
        return config.DIRECT_TEST.RETRIEVEASSET;
        }
}
 function displayAssetUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.DISPLAYASSET;    
        case "live":
        return config.DIRECT_LIVE.DISPLAYASSET;    
        case "test":
        return config.DIRECT_TEST.DISPLAYASSET; 
        }

}

 function uploadVideoUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.UPLOADMkDirVideo; 
        case "live":
        return config.DIRECT_LIVE.UPLOADMkDirVideo; 
        case "test":
        return config.DIRECT_TEST.UPLOADMkDirVideo;
        } 
}

function uploadPicsUrl(){
    switch(getEnvironment()){
        case "dev":
        return config.MANUAL_URL.UPLOADMkDirPics; 
        case "live":
        return config.DIRECT_LIVE.UPLOADMkDirPics; 
        case "test":
        return config.DIRECT_TEST.UPLOADMkDirPics;
        } 
}



export default function GetUrl(targetUrl){
    switch(targetUrl){
        case "contactUs":
        return getContactUsUrl(); 
        
        case "retrieveMessages":
        return retrieveMessagesUrl(); 

        case "bookings":
        return bookingsUrl();

        case "retrieveBookings":
        return retrieveBookingsUrl(); 

        case "registerSimple":
        return registerSimpleUrl();

        case "login":
        return loginUrl(); 

        case "loginManager":
        return loginManagerUrl();

        case "logout":
        return logoutUrl(); 

        case "insertAsset":
        return insertAssetUrl();

        case "retrieveAsset":
        return retrieveAssetUrl();

        case "displayAsset":
        return displayAssetUrl();

        case "uploadPics":
        return uploadPicsUrl(); 

        case "uploadVideo":
        return uploadVideoUrl();      
        }    
}
