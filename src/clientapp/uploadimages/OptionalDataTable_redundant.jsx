import React, { Component } from 'react';
import { NavLink, HashRouter,   BrowserRouter as Router  } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";

class OptionalDataTable extends Component {
    render() {
        //let str3 = "src/server/assets/".concat(this.props.obj.PathMainImage); 
        // const mainimage = require('../../server/assets/images/modpleh/cardacia.main.PNG').default; 
        const mainimage = require(`../../server/assets/${this.props.obj.PathMainImage}`).default;
        return (

            <tr>
                <td>
                    <NavLink to="/specificasset">
                        {/* <div className="akwaba-tiles-navlinks">
                            <img src={mainimage} width="300" height="auto" />
                        </div> */}
                        <img src={mainimage} width="300" height="auto" />
                    </NavLink>

                </td>
                <td>
                    {this.props.obj.Name}
                </td>
                <td>
                    {this.props.obj.Sellernote}
                </td>
            </tr>
        );
    }
}

export default OptionalDataTable;