function HasJWT() {
    let flag = false;
    //check user has JWT token
    LocalStorageService("get", "token") ? flag=true : flag=false
   
    return flag
}