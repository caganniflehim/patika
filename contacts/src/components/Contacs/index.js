import React, { useState,useEffect } from 'react'

import List from "./list";  
import Form from "./form";
function Contacts() {
    const[contacts,setContact]=useState([
   //   {
   //      fullname:"çağa",
   //      phone_number:"12345"
   //   },
   //   {
   //      fullname:"esma",
   //      phone_number:"5678"
   //   },
   //   {
   //      fullname:"mustafa",
   //      phone_number:"852",
   //   }

    ]);

   useEffect(()=>{
    console.log(contacts);
   },[contacts]);
  return (
    <div id="container">
      <h1>yarıyarolmayanın mekanı</h1>
      <List contacts={contacts ? contacts: []}/>
      <Form addContact={setContact} contacts={contacts}/>
    </div>
  );
}
export default Contacts