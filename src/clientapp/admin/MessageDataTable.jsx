import React, { Component } from 'react';

class MessageDataTable extends Component {
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
                    {this.props.obj.Title}
                </td>
                <td>
                    {this.props.obj.FirstName}
                </td>
                <td>
                    {this.props.obj.LastName}
                </td>
                <td>
                    {this.props.obj.Email}
                </td>
                <td>
                    {this.props.obj.Phone}
                </td>
                <td>
                    {this.props.obj.Message}
                </td>
                <td>
                    {this.props.obj.Response}
                </td>
                <td>
                    {this.props.obj.Status}
                </td>
            </tr>
        );
    }
}

export default MessageDataTable;