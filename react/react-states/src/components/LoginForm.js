import react ,{useState ,useEffect} from 'react'

function LoginForm(props){

	const [user,setUser]=useState();
	const [pass,setPass]=useState();
	  useEffect(() => {
    console.log("check effect login firm")

  },[]);


	const setlogin = (e)=>{
		e.preventDefault();
		console.log(user)
		if(user === "" || user === undefined ){
			alert("enter pass user");
		}else{

			props.login(user,pass)
		}


	}


	return(
	<div className="container col-md-4">

	<form onSubmit={setlogin}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setUser(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPass(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
	</div>

	);
}

export default LoginForm;