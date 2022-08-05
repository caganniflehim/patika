import React,{useState, useEffect} from 'react'

 function ınputExample() {
    /*const[name,setName]=useState("")
    const[surname,setSurname]=useState("")//bu uzun yolu
    const onChangeName=(event)=>setName(event.target.value);
    const onChangeSurname=(event)=>setSurname(event.target.value);*/
//onchange texbox içine yazım sağlar yani değiştirme  bunu koymazsan texbox sın içini değiştiremezsin

const[form,setForm]=useState({name:"",surname:""});

const onchangeInput=(e)=>{
    setForm({...form, [e.target.name]: e.target.value});//3  nokta daha önceki veriyiy korur
};
  return (
    <div>
    name<br/>
    <input name="name" value={form.name} onChange={onchangeInput}/>
    <br/>
    <br/>
    surname<br/>
    <input name="surname" value={form.surname} onChange={onchangeInput}/>

        {/* isim<br/> 
        <input value={name} onChange={onChangeName}/>
      <br/>

      <br/>
      soy isim<br/> bu kullanılan yol uzun yol daha kısa versiyonu 2 yol ama oda form şeklinde yapılıyor
      <input value={surname} onChange={onChangeSurname}/>*/}

    </div>
  );
}
export default ınputExample;
