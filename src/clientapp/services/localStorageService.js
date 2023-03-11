
import React, { Component } from "react";

class LocalStorageService extends Component {
    constructor(props) {
      super(props);  
    }
    Get (key) {        
        return localStorage.getItem(key);
    }

    Set(key, data) {
        localStorage.setItem(key, data);
    }

    Remove(key) {
        localStorage.removeItem(key);
    }

    Clear() {
        localStorage.clear();
    }

    Has(key){
        return this.get(key) !== null;
    }

    get length(){
        return localStorage.length;
    }
}

export default  LocalStorageService; 