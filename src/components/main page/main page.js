import React, { Component } from 'react';
import User from '../user/user';
import Tasks from "./tasks";

class MainPage extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return (
            <div>
                <User />
                <Tasks/>
            </div>
        );
    }
}
export default MainPage;