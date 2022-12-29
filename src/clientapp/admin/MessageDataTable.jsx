import React, { Component } from 'react';

class MessageDataTable extends Component {
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
                    {this.props.obj.yourmessage}
                </td>
                <td>
                    {this.props.obj.response}
                </td>
                <td>
                    {this.props.obj.readstatus}
                </td>
            </tr>
        );
    }
}

export default MessageDataTable;