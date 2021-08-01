import react from 'react';


const TodoItem = ({todo}) => {
	return (
		<>
		<p>{todo.id}</p>
		<p>{todo.task}</p>
		<p>{todo.desc}</p>
		</>


		);
}

export default TodoItem;