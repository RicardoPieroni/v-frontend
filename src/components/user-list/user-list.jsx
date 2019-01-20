import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import DeleteUserModal from './delete-user-modal';
import TabHeader from './tab-header';
import Trash from './trash';
import $ from 'jquery';
import ReactNotification from 'react-notifications-component';


import 'react-notifications-component/dist/theme.css';

import serviceHandle from '../../services/service-handle';

import './user-list.css';

class UserList extends Component {

    constructor() {
        super();
        this.service = serviceHandle.retrieveService();
        this.deleteOne = this._deleteOne.bind(this);
        this.onConfirmClicked = this._onConfirmClicked.bind(this);
        this.onRowClicked = this._onRowCLicked.bind(this);
        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMRef = React.createRef();
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
                selector: 'daysWeek',
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

    addNotification(type, message) {
        this.notificationDOMRef.current.addNotification({
          title: "Info",
          message,
          type,
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 3000 },
          dismissable: { click: true }
        });
    }

    _deleteOne(row) {
        $('body').addClass('modal-opened');
        $('.modal-delete-user').addClass('modal-visible');
        this.setState({
            row,
        })
    }

    _onConfirmClicked() {
        return this.service.deleteUser(this.state.row)
            .then(() => this.service.retrieveAllUsers())
            .then((result) => {
                this.setState({
                    dataRows: result,
                });
                $('body').removeClass('modal-opened');
                $('.modal-delete-user').removeClass('modal-visible');
                this.addNotification('success', 'User was deleted!');
        });
    }

    componentWillReceiveProps() {
        this.renderRows();
    }

    componentWillMount() {
        this.renderRows();
    }

    renderRows() {
        return this.service.retrieveAllUsers()
            .then((result) => {
                this.setState({
                    dataRows: result,
                });
        });
        
    }

    _onRowCLicked(row) {
        if (row && row._id) {
            this.props.history.push(`/users/new/${row._id}`);
        }
    }


    render() {
        return (
            <div className="grid-container grid-parent user-list-container">
                <TabHeader/>
                <ReactNotification ref={this.notificationDOMRef} />
                <div className="grid-parent grid-100 data-table-container" >
                    <DataTable
                        title="Users"
                        highlightOnHover
                        columns={this.columns}
                        pagination
                        data={this.state.dataRows}
                        onRowClicked={(row) => this._onRowCLicked(row)}
                    />
                </div>
                 <DeleteUserModal onConfirmClicked={this.onConfirmClicked}/>
            </div>
           
        );
    }
}

export default UserList;
