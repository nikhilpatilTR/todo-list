


function Movielist(props){
console.log(props);
	const list=props.movie.map((data,index)=>{
		return (<>
			<li>{data.id}</li>
			<li>{data.title}</li>
			<li>{data.desc}</li>
			<li>{data.releasedate}</li></>)
	});
	console.log(list);


	return (
	<>
	<ul>
	{list}
	
	</ul>
	</>


	);
}


export default Movielist