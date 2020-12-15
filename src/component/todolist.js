import React, { useState } from 'react'
import '../App.css';

function TodoList(props) {
    const itemsList = props.items.map((item) => {
        return( 
            <div key={item.key} className="todo__list">
                <strong className={item.isComplete ? "todo__incomplete" : "todo__complete"}>{item.item}</strong>
                <div className="todolist__control__images">
                    <img className="todolist__undone" src="https://image.flaticon.com/icons/svg/845/845646.svg"
                        onClick={() => props.completeTodo(item)} 
                    />
                    <img className="todolist__delete" src="https://image.flaticon.com/icons/svg/3159/3159673.svg"
                        onClick={() => props.deleteItem(item)}
                    />
                </div>
            </div>
        )
    })

    return(
        <div className="list__items">
            <strong>{itemsList}</strong>
        </div>
    );
}

export default TodoList
