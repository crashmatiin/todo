import React from "react";

export default props => (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div
            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
            }}
            onClick={props.toggleComplete}
        >
            <p>
                Title: {props.todo.title} Text: {props.todo.text}
            </p>
        </div>
        <div>
            <button onClick={props.onDelete}>delete</button>
            <button onClick={props.onEdit}>about task</button>
        </div>
    </div>
);