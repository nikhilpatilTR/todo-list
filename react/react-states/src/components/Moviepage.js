import react,{useState} from 'react';
import Movielist from './Movielist'
function Moviepage(){
	const transformdata=[]

	const [movielist,setMovie]=useState([]);

	const fetchmovie = () =>{
		fetch("https://swapi.dev/api/films").then((response)=>{
			return response.json();
		}).then((data)=>{
			const transformdata=data.results.map((movies,index)=>{
				return {
					id:movies.episode_id,
					title:movies.title,
					desc:movies.opening_crawl,
					releasedate:movies.release_date
				}
			})
		setMovie(transformdata);
		})

	}


	return (
		<>
	<h1>Movie List</h1>
	<Movielist movie={movielist} />
	<button onClick={fetchmovie} className="btn btn-success"> Show List</button>
</>
	);
}

export default Moviepage