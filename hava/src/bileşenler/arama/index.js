import React,{useState} from 'react'

function İndex({belirthavadurumu}){
    const api={
        key:"c7346f7a9bb1d43137e784b0e4b133dd",
        base: "https://api.openweathermap.org/data/2.5/weather",
    };
    const [araParametre,belirtAraParametre]=useState("");

 const ara=(e)=>{
    if(e.key==="enter"){
        fetch
        (
            `${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`

        )
        .then((veri)=>veri.json())
        .then((sonuc)=>{
            belirtAraParametre("");
            belirthavadurumu(sonuc);
           
        });
    }
 };  
    return (
        <div className="arama">
            <input 
            className="arama-input"
            type="text"
            placeholder="şehir" 
            onChange={(e)=>belirtAraParametre(e.target.value)}
            value={araParametre}
            onKeyPress={ara}
            
            />
            
        </div>
    );

}
export default İndex;