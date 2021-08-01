import react,{useContext} from 'react'
import {FName} from './../App'
import Moviepage from './Moviepage'

function About(props){

	const fname=useContext(FName);

	return (
		<>
	<h1>About page </h1>
	<button className="btn btn-primary" onClick={props.logout} >Logout </button>

	<Moviepage/>
	</>
	);
}

export default About;