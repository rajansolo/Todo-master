import React, { Component } from 'react';
import '../App.css';
import TodoList from  './todolist';
import swal from 'sweetalert';


class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             currentItem : {
                 item:'',
                 key:'',
                 isComplete: false
             }
        }
    }

    handleInputChange = (event) => {
        this.setState({
            currentItem:{
                item: event.target.value,
                key: Date.now(),
                isComplete: false
            }
        })
    }

    addItems= (event) =>{
        event.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.item!==""){
            let newItems = [ newItem, ...this.state.items];
            this.setState({
                items:newItems,
                currentItem : {
                    item:'',
                    key:'',
                    isComplete: false
                }
            })
        }
    }

    deleteItem = (item) => {
        swal({
            title: "Are you sure?",
            text: "You can't undo this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your todo has been deleted!", {
                icon: "success",
              });
              
            const { items } = this.state;
            const index = items.indexOf(item)
            items.splice(index, 1)
            this.setState({
                items
        })
            } else {
              swal("Your todo is safe!");
            }
          });
    }

    completeTodo = (item) => {
        swal("Good job!", "You completed your work", "success");
        const { items } = this.state;
        const index = items.indexOf(item)
        items[index].isComplete = true;
        this.setState({
            items
        })
        console.log(item.isComplete)
    }

    render() {
        return (
            <div className="todo">
                <div className="todo__header">
                    <h2> Todo App </h2>
                    <form className="todo__header__form" onSubmit={this.addItems}>
                        <input type='text' className="todo__form__input" onChange={this.handleInputChange} value={this.state.currentItem.item} placeholder="Enter Here..."/>
                        <button className="todo__form__button" type="submit"> Add Event </button>
                    </form>
                </div> 

                <div>
                    {
                        this.state.items.length > 0 ?
                         <TodoList items={this.state.items} deleteItem={this.deleteItem} completeTodo={this.completeTodo}/> 
                        :
                        <div style={{fontSize: 20, color: 'white'}}>Nothing....</div>
                    }
                </div>
            </div>
        )
    }
}

export default Todo;
