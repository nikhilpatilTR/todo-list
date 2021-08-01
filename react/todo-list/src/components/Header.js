import react from 'react';
import propTypes from 'prop-types';

function Header(props){
	return(
		<>
		<p>first {props.title}</p>
		{props.showname ?  <p>Nikhil Patil</p> : <p>no name</p>}
		</>
		);
}

Header.defaultProps={
	showname:true
}


Header.propTypes={
	title:propTypes.string,
	showname:propTypes.bool.isRequired
}

export default Header;