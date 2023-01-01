import React, { Component } from 'react';
import { NavLink, Link, HashRouter} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import AssetOptionalPage from "./AssetOptionalPage";

//import DisplayAssetPage from "./DisplayAssetPage";

//https://codesandbox.io/s/c53q2?file=/src/App.js:58-172

class DisplayDataTable extends Component {
    render() {      
        // const mainimage = require('../../server/assets/images/modpleh/cardacia.main.PNG').default; 
        const mainimage = require(`../../server/assets/${this.props.obj.PathMainImage}`).default;
        const opt1image = require(`../../server/assets/${this.props.obj.PathFirstOptionalImage}`).default;
        const opt2image = require(`../../server/assets/${this.props.obj.PathSecondOptionalImage}`).default;
        const opt3image = require(`../../server/assets/${this.props.obj.PathThirdOptionalImage}`).default;
        const assetNote = this.props.obj.Sellernote;
        const assetDescription = this.props.obj.Description;
        const assetName = this.props.obj.Name;
        const assetPrice = this.props.obj.Price;
        return (
            <div>
                <div className="row">                   
                <div className ="col-md-auto">
                <Link to={{pathname:"/assetoptionals" , state: {mainimage, opt1image, opt2image, opt3image, 
                        assetNote, assetDescription, assetName, assetPrice}}}>                      
                        <img src={mainimage} width="300" height="auto" />       
                    </Link> 
                </div>
                <div className ="col-sm-auto" >
                <div className ="col-sm-auto text_descriptor_name">The name {this.props.obj.Name}</div>
                <div className ="col-sm-auto text_descriptor_note">The note {this.props.obj.Sellernote}</div>
                </div>
                </div> 
                <div>
                    <p> </p>
                    <p> </p>
                </div>  
            </div>

            // <tr> 
                                            
            //     <td>
            //         <Link to={{pathname:"/assetoptionals" , state: {mainimage, opt1image, opt2image, opt3image, 
            //             assetNote, assetDescription, assetName, assetPrice}}}>                      
            //             <img src={mainimage} width="300" height="auto" />       
            //         </Link>

            //     </td>
            //     <td>
            //         {this.props.obj.Name}
            //     </td>
            
            //     <td>
            //         {this.props.obj.Sellernote}
            //     </td>
            // </tr>         
        );
    }
}

export default DisplayDataTable;