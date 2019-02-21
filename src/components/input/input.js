import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class ContactPage extends Component {

    constructor(props){
        super(props);

        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeGroup = this.changeGroup.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            email: '',
            password: '',
            group: '',
        };
    }

    changeEmail(event){
        this.setState({
            ...this.state,
            email: event.target.value,
        });
    }

    changePassword(event){
        this.setState({
            ...this.state,
            password: event.target.value,
        });
    }

    changeGroup(event){
        this.setState({
            ...this.setState,
            group: event.target.value,
        });
    }

    submit(event){
        localStorage.setItem('user', JSON.stringify(this.state));
        this.props.history.push(`/main`);
    }

    render(){
        return (
            <form>
                <br/>
                <h2> Email : </h2>
                <input
                    type="email"
                    placeholder="email"
                    onChange={ this.changeEmail }
                    value={ this.state.email }
                />
                <h2> Password : </h2>
                <input
                    type="password"
                    placeholder="password"
                    onChange={ this.changePassword }
                    value={ this.state.password }
                />
                <h2> Group organization: </h2>
                <input
                    type="number"
                    placeholder="group number"
                    onChange={ this.changeGroup }
                    value={ this.state.group }
                />
                <br/>
                <br/>
                <Button
                    size='massive'
                    type='submit'
                    onClick={ this.submit }>
                    Submit
                </Button>
            <br/>
            <br/>
            </form>
        );
    }

}

export default ContactPage;
