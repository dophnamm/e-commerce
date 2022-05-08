import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

function TodoItem({ todo }) {
	return <li className='todo__item'>{todo.title}</li>;
}

export default TodoItem;
