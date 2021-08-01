import react from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
	return (
		<>
		{props.todos.map(
			(todo,index)=>{
				return <TodoItem  todo={todo} key={index}/>	
			}
			)}
		
		</>
		);
}

export default Todos