import ConfigData from "../../config";

 const GetApis = () => {
  
        if(ConfigData.ENVIRONMENT.DEV)
              {
                return ConfigData.BASE_URL_LOCAL+ConfigData.PAGES_URL;
              } 
        else if(ConfigData.ENVIRONMENT.LIVE)
             {
                return ConfigData.BASE_URL_LIVE+ConfigData.PAGES_URL;
             }  
        else if(ConfigData.ENVIRONMENT.MANUAL)
             {
               
                return ConfigData.MANUAL_URL;
             }
         else return "no environment was specified";         
      };
  
  export default GetApis;