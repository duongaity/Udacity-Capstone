import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from "react-redux";

import { fetchTodoList } from '../redux/tasksSlice'

const TodoList = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	const dispatch = useDispatch()
  	const posts = useSelector(fetchTodoList)

	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;