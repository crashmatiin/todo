import React, { Component } from 'react';
import './user.css';

class User extends Component {

    constructor(props){
        super(props);
        this.state = JSON.parse(localStorage.getItem('user'));
    }

    render(){
        return (
            <div className="user">
                {<p>User: { this.state.email }</p>}
                {<p>Group organization: { this.state.group }</p>}
            </div>
        );
    }
}

export default User;