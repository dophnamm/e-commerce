import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

TodoList.propTypes = {
	todoList: PropTypes.array.isRequired,
};

function TodoList({ todoList }) {
	return (
		<div className='list_container'>
			<ul>
				{todoList.map((todo) => {
					const { id } = todo;

					return <TodoItem key={id} todo={todo} />;
				})}
			</ul>
		</div>
	);
}

export default TodoList;
