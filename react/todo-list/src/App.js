import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';

function App() {


let items=[
  {
    id:1,
    task:"nikhil",
    desc:"its nikhil patil"
  },
  {
    id:2,
    task:"raj",
    desc:"its raj patil"
  },
  {
    id:3,
    task:"ganesh",
    desc:"its ganesh patil"
  },
  {
    id:4,
    task:"ketan",
    desc:"its ketan patil"
  }
]

  return (
    <>
    <p>my first</p>
    <Header title="sss" />
    <Todos todos={items}/>
    <Footer/>
    </>
  );
}

export default App;
