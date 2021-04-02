import React from 'react';
import "./Admin.css"
import AddBook from '../AddBook/AddBook';
import ManageBook from '../ManageBook/ManageBook';


const Admin = () => {
    return (
        <div className="row">
            <div className="col-3 sideNavBar text-center ">
                <h1 className="mt-4">Book Shop</h1>
                <div className="list-group navstyle" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Manage Books</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Add Book</a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Edit Book</a>
                </div>
            </div>
            <div className="col-9 text-center addbook">
                
                <div className="tab-content " id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                        <h1 className="mt-4">Manage Books</h1>
                        <ManageBook />
                    </div>
                    <div className="tab-pane fade p-3" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <h1 className="mt-4">Add Book</h1>
                        <AddBook></AddBook>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;