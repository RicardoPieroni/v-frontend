import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import serviceHandle from '../../services/service-handle';

import './user-list.css';

class UserList extends Component {

    constructor() {
        super();
        this.service = serviceHandle.retrieveService();
        this.state = {
            dataRows : [],
        }
        this.columns = [
            {
                name: 'Username',
                selector: 'username',
                sortable: true,
            },
            {
                name: 'Name',
                selector: 'name',
                sortable: true,
            },
            {
                name: 'City',
                selector: 'city',
                sortable: true,
            }, 
            {
                name: 'Ride in group',
                selector: 'rideInGroup',
                sortable: true,
            },
            {
                name: 'Day of the week',
                selector: 'dayWeek',
                sortable: true,
            },
            {
                name: 'Posts',
                selector: 'postsCount',
            },
            {
                name: 'Albuns',
                selector: 'albunsCount',
            },
            {
                name: 'Photos',
                selector: 'photosCount',
            },
        ]
    }

    componentWillReceiveProps() {
        this.renderRows();
    }

    componentWillMount() {
        this.renderRows();
    }

    renderRows() {
        const data = this.service.retrieveAllUsers();
        this.setState({
            dataRows: data,
        });
    }

    render() {
        return (
            <div className="grid-container grid-parent user-list-container">
                <DataTable
                    title="Users"
                    columns={this.columns}
                    data={this.state.dataRows}
                />
            </div>
        );
    }
}

export default UserList;
