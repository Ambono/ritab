import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.Id}
                </td>
                <td>
                    {this.props.obj.DateContacted}
                </td>
                <td>
                    {this.props.obj.Name}
                </td>
                <td>
                    {this.props.obj.Email}
                </td>
                <td>
                    {this.props.obj.Phone}
                </td>
                <td>
                    {this.props.obj.Reason}
                </td>
            </tr>
        );
    }
}

export default DataTable;