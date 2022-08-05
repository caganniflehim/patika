import React from 'react'
import './App.css';
import User from './companents/user';

const friends=[
  {
    name:"esma",
  },
  {
    name:"ömer",
  },
  {
    name:"tayfun",
  },
];

function App() {
  
  return (
     <>
     <User 
     name="çağan" 
     surname="demirkıran" 
     isLonggedIn={true}
     age={29} 
     frinds={friends}/>
     </> 
  );
}

export default App;