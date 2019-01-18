import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import DeleteUserModal from './delete-user-modal';
import TabHeader from './tab-header';
import Trash from './trash';
import $ from 'jquery';

import serviceHandle from '../../services/service-handle';

import './user-list.css';

class UserList extends Component {

    constructor() {
        super();
        this.service = serviceHandle.retrieveService();
        this.deleteOne = this._deleteOne.bind(this);
        this.onConfirmClicked = this._onConfirmClicked.bind(this);
        this.state = {
            dataRows : [],
            selectedRows: [],
            row: null,
        }
        this.columns = [
            {
                name: 'Actions',
                cell: row => <Trash row={row} onDeleteRow={this.deleteOne} />,
                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
                width: '56px',
            },
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

    _deleteOne(row) {
        $('body').addClass('modal-opened');
        $('.modal-delete-user').addClass('modal-visible');
        this.setState({
            row,
        })
    }

    _onConfirmClicked() {
        this.service.deleteUser(this.state.row);
        const data = this.service.retrieveAllUsers();
        this.setState({
            dataRows: data,
        });
        $('body').removeClass('modal-opened');
        $('.modal-delete-user').removeClass('modal-visible');
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
                <TabHeader/>
                <div className="grid-parent grid-100 data-table-container" >
                    <DataTable
                        title="Users"
                        highlightOnHover
                        columns={this.columns}
                        pagination
                        data={this.state.dataRows}
                    />
                </div>
                 <DeleteUserModal onConfirmClicked={this.onConfirmClicked}/>
            </div>
           
        );
    }
}

export default UserList;
