import React from 'react';
import AddTodo from './components/todo/AddTodo';
import TodoList from './components/todo/TodoList';
import VisibilityFilters from './components/todo/VisibilityFilters';
import './todo.css';

export default function TodoApp() {
    return(
        <div className='todo-app'>
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    );
}
