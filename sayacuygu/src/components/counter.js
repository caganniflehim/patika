import React, {useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);
    const increase=()=>{
        setCount(count+1);
    }
    const Decrease=()=>{
      setCount(count-1);
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Decrease}>Decrease</button>

      <button onClick={increase}>Increase</button>
    </div>
    //jquery kısmınada bak react jquery yazdık ama orda süprizler var oku
  )
}
