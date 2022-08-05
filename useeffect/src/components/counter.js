import  React,{useState,useEffect} from 'react';

function Counter() {
    const[number,setNumber]=useState(0);
    //const[name,setName]=useState('çağan');
   useEffect(()=>{
  console.log("number satate güncelle");
   },[number]);
  
   /*useEffect(()=>{
    console.log("name satate güncelle");
     },[name]);*/
     
  //companent didmount react eski sürümlerde kullanılır  o an yakalama
  useEffect(()=>{
    console.log("component mount edildi");
    const interval=setInterval(()=>{
        setNumber((n)=>n+1);
    },1000);
    return()=>clearInterval(interval);//on mount companent belirli aralıklarla güncelleniyor useffect le bulup kullana biliriz 
  },[]);
  useEffect(()=>{})
  return (
    <div >
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>click</button>
      <hr/>
      {/* <h1>{name}</h1> 
       <button onClick={()=>setName('ömer')}>click</button> */}
    </div>
  )
}
export default Counter