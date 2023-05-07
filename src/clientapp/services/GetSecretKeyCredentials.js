import config from '../../config.json';

export default function GetSecretKeyCredentials(){   
    return config.CREDENTIALS.secretkey 
}

