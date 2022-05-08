import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './style.scss';

const dataTodos = [
	{ id: 1, title: 'Eat' },
	{ id: 2, title: 'Clean' },
	{ id: 3, title: 'Coding' },
];

function Todo() {
	const [todoList, setTodoList] = useState(dataTodos);

	function handleTodoFormSubmit(values) {
		const newTodo = {
			id: todoList.length + 1,
			title: values.title,
		};

		setTodoList([...todoList, newTodo]);
	}

	return (
		<div className='todo__container'>
			<TodoForm onSubmit={handleTodoFormSubmit} />

			<h1>Todo List</h1>
			<TodoList todoList={todoList} />
		</div>
	);
}

export default Todo;
