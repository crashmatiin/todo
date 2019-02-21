import React from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {connect} from "react-redux";
import { Form, Button } from 'semantic-ui-react';
import * as actions from '../../store/todo/actions';

class TodoForm extends React.Component{

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            data : {
                title: "",
                text: "",
            }
        };
    }

    handleChange(event) {
        this.setState({
            data : { ...this.state.data, [event.target.name]: event.target.value}});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            title: this.state.data.title,
            text: this.state.data.text,
            complete: false,
        });
        this.props.dispatch(actions.addTodo((this.state.data)));
    };

    render() {
        const data = this.state;
        return(
            <Form onSubmit={this.handleSubmit}>
                <input
                    name="title"
                    value={data.title}
                    onChange={this.handleChange}
                    placeholder="title todo"
                />
                <br/>
                <input
                    name="text"
                    value={data.text}
                    onChange={this.handleChange}
                    placeholder="todo this"
                />
                <button onClick={this.handleSubmit}>add todo</button>
            </Form>
        );
    }
}

TodoForm.propTypes = {
    addTodo : PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { todos } = state;
    const sosat = { todos : todos };
    return  sosat;

};

export default connect (mapStateToProps)(TodoForm);