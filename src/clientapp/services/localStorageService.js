
 export default function LocalStorageService(service, key, data){

   
        switch(service){
            case "get":
            return localStorage.getItem(key);

            case "set":
            return localStorage.setItem(key, data); 

            case "remove":
            return localStorage.removeItem(key);

            case "clear":
            return localStorage.clear();

            case "has":
            return  this.get(key) !== null;

            case "length":
            return localStorage.length;
 }
}

