import React, { Component } from 'react';
import { NavLink, Link, HashRouter} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import AssetOptionalPage from "./AssetOptionalPage";
import { slice } from 'lodash'
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
            <tr> 
                                            
                <td>
                    <Link to={{pathname:"/assetoptionals" , state: {mainimage, opt1image, opt2image, opt3image, 
                        assetNote, assetDescription, assetName, assetPrice}}}>                      
                        <img src={mainimage} width="300" height="auto" />       
                    </Link>

                </td>
                <td>
                    {this.props.obj.Name}
                </td>
                {/* <td>
                {this.props.obj.PathMainImage}
                </td> */}
                <td>
                    {this.props.obj.Sellernote}
                </td>
            </tr> 
            
    //         <div>
    //   <h2 className="mb-3">React Js Load More Example</h2>
    //   {initialPosts.map((item) => {
    //     return (
    //       <div
    //         className="mb-3 card bg-primary p-2 text-dark bg-opacity-25"
    //         key={item.id}
    //       >
    //         <div className="card-body">{item.title}</div>
    //       </div>
    //     )
    //   })}
    //   <div className="d-grid mt-3 mb-5">
    //     {isCompleted ? (
    //       <button
    //         onClick={loadMore}
    //         type="button"
    //         className="btn btn-danger disabled"
    //       >
    //         That's It
    //       </button>
    //     ) : (
    //       <button onClick={loadMore} type="button" className="btn btn-danger">
    //         Load More +
    //       </button>
    //     )}
    //   </div>
    // </div>
        );
    }
}

export default DisplayDataTable;