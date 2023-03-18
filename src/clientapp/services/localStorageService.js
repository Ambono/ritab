
 export default function LocalStorageService(service, key, data){

    // function get (key) {           
    //     return localStorage.getItem(key);
    // };

    //  function set (key, data) {    
    //     localStorage.setItem(key, data);        
    // };

    //  function  remove (key)  {
    //     localStorage.removeItem(key);
    // };

    //  function  clear () {
    //     localStorage.clear();
    // };

    //  function has (key) {
    //     return this.get(key) !== null;
    // };

    //  function getLength () {
    //     return localStorage.length;
    // };

   
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

