import React, { useEffect, useState } from 'react'
import Form from './form'
function Contacs() {
  const [contacs,setContact]=useState([

  ]);
  useEffect(()=>{
    console.log(contacs);
  },[contacs]);
  return (
    <div className="contract">
      <h1>daha bilmediğim program</h1>
      <Form  addcontcs={setContact}contacs={contacs}/>
    </div>
  )
}

export default Contacs
