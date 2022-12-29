import React, { Component } from 'react';

class DisplayDataTable extends Component {
    render() {
        return (          
            <tr> 
                <td>
                    {this.props.obj.Id}
                </td>
                <td>
                    {this.props.obj.Description}
                </td>
                <td>
                    {this.props.obj.title}
                   </td>
                <td>
                    {this.props.obj.firstName}
                </td>
                <td>
                    {this.props.obj.lastName}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.phoneNumber}
                </td>
                <td>
                    {this.props.obj.note}
                </td>
                <td>
                    {this.props.obj.Size}
                </td>
                <td>
                    {this.props.obj.Colour}
                </td>
                <td>
                    {this.props.obj.ProdCondition}
                </td>
                <td>
                    {this.props.obj.ProdImage}
                </td>
                <td>
                    {this.props.obj.CountryOrig}
                </td>
                <td>
                    {this.props.obj.CountryDestin}
                </td>
                <td>
                    {this.props.obj.CityDestin}
                </td>
                <td>
                    {this.props.obj.ProdImagePath}
                </td>
                <td>
                    {this.props.obj.Availfrom}
                </td>
                <td>
                    {this.props.obj.Availuntil}
                </td>
                <td>
                    {this.props.obj.productcategory}
                </td>
                <td>
                    {this.props.obj.Price}
                </td>
                <td>
                    {this.props.obj.FirstOptionalImage}
                </td>
                <td>
                    {this.props.obj.SecondOptionalImage}
                </td>
              
            </tr>
        );
    }
}

export default DisplayDataTable;