import Header from './components/Header';
import LoginForm from './components/LoginForm';
import About from './components/about';
import react ,{useState ,useEffect,createContext} from 'react'


  const FName=createContext();

function App(){



  const [checklogin,setCheckLogin]=useState();


  useEffect(() => {
    console.log("check effect")
    setCheckLogin(localStorage.getItem('setLogin'))
  },[]);

  
 

const login=(user,pass)=>{
  console.log("inside login")
  console.log(user,pass)
  localStorage.setItem('setLogin','1');
  setCheckLogin('1')

}

const logout=()=>{
  localStorage.setItem('setLogin','0')
  setCheckLogin('0')
}
  


  return (
    <>
    <Header/>
    <h1>ooo=={checklogin}</h1>
    {checklogin == '1' ? <FName.Provider value="nikhil"><About logout={logout} /></FName.Provider> : 
    <LoginForm login={login}/>
  }
    
    </>

    )
}


export default App;
export {FName};