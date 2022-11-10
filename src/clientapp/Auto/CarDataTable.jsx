import React, { Component } from 'react';

class CarDataTable extends Component {
    render() {
        return (          
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.created_at}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.mileage}
                </td>
                <td>
                    {this.props.obj.year}
                </td>
                <td>
                    {this.props.obj.type}
                </td>
                <td>
                    {this.props.obj.make}
                </td>
                <td>
                    {this.props.obj.model}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    {this.props.obj.description}
                </td>
                <td>
                    {this.props.obj.status}
                </td>
                <td>
                    {this.props.obj.comment}
                </td>              
            </tr>
        );
    }
}

export default CarDataTable;