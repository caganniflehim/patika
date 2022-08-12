import React,{useState} from 'react'
import "./index.css";
import Arkaplan from './bileşenler/arkaplan';

import Arama from './bileşenler/arama/index'
import Sonuc from './bileşenler/sonuc'

function App() {
  const[havadurumu,belirthavadurumu]=useState({});

  return (
   <section className="uygulama">
    <Arkaplan/>
    <div id="baslik"> hava durumu</div>
     <Arama belirthavadurumu={belirthavadurumu}/>
     <Sonuc hava={havadurumu}/> 
   </section>
  ); 
}

export default App;
