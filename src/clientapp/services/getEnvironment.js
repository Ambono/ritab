import config from '../../config.json';

export default function GetEnvironment(){   
    if(config.ENVIRONMENT.DEV)
    return "dev";
    if(config.ENVIRONMENT.LIVE)
    return "live";
    if(config.ENVIRONMENT.TEST)
    return "test"   
}

