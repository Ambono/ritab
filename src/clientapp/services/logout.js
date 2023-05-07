import LocalStorageService from '../services/localStorageService';
export default function LogUserOut(){

    LocalStorageService("remove", "token")
    LocalStorageService("remove", "userEmail")
}