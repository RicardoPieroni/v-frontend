import React, { Component } from 'react';
import $ from 'jquery';

import './delete-user-modal.css';

class DeleteUserModal extends Component {

    onCancelClicked() {
        $('body').removeClass('modal-opened');
        $('.modal-delete-user').removeClass('modal-visible');
    }

    onConfirmClicked() {
        this.props.onConfirmClicked();
    }

    render() {
        return(
            <div className="modal modal-delete-user">
                <div className="modal-content">
                    <h3 className="modal-text"> Do you really want to remove it?</h3>
                    <div className="button-content grid-100">
                        <div className="grid-50">
                            <button className="btn btn-save" onClick={this.onConfirmClicked.bind(this)}> 
                                <i className="fas fa-check-square"></i> Confirm 
                            </button>
                        </div>
                        <div className="grid-50">
                            <button className="btn btn-save" onClick={this.onCancelClicked.bind(this)}> 
                                <i className="fas fa-ban"></i> Cancel 
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default DeleteUserModal;