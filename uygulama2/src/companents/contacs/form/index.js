import React, { useEffect, useState } from 'react'
const initialFormValues={name:"",surname:"",phone_number:""};

function Form({addcontcs,contacs}) {

    useEffect(()=>{
        setForm(initialFormValues);
    },[contacs])

const [form,setForm]=useState(initialFormValues );

const onChangeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
};
const onsubmit=(e)=>{
    e.preventDefault();

    if(form.name===""||form.phone_number===""){
        return false;
    }
    addcontcs([...contacs,form]);
};

  return (
    <form onsubmit={onsubmit}>
        <div className="input1">
            <input name="name" placeholder="name"value={form.name} onChange={onChangeInput}/>
        </div>
        <div className="input1">
            <input name="surname" placeholder="surname"value={form.surname} onChange={onChangeInput}/>
        </div>
        <div className="input1">
    <input name="phone_number" placeholder="phone_number" value={form.phone_number} onChange={onChangeInput}/>
    </div>
        <div className="btn">
           <button>btn</button>
        </div>
    </form>
  )
}

export default Form
