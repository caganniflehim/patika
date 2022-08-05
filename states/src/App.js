import React ,{ useState} from 'react'
import './App.css';

function App() {//
  const[name,setName]=useState('çağan');
  const[age,setAge]=useState(31);
  const[friends,setFriends]=useState(["esma","mustafası"])//array değişkeni
  const[adders,setAddres]=useState({title:'istanbul',zip: 34188});//obje olarak
//bir komplatin içinde değişme potansiyeli olan verileri tutumuz yapılar değişti anda ilgili komplant hemen render edilir
//...form 3 nokta önceki değeri koruma
  return (
    <div className="App">
      <h1>hello there {name}!</h1>
      <h2>{age}</h2>
      <button onClick={()=>setName("ömer")}>click</button>
      <button onClick={()=>setAge("62")}>click</button>

      <hr/>
      <br></br>

      <h2>friends</h2>
      {
      friends.map((friend,index)=>(
      <div key={index}>{friend}</div>//array
      ))}
      

      <button onClick={()=>setFriends([...friends,'ali uzun,veli kısa ,ayşe orta'])}>yeni ali uzun  ekle</button>  
      {/*array bölümünden kullandım */}

     <hr/>
     <br></br>
     <h2>addres</h2>
     <div>{adders.title}{adders.zip}</div>

    <br/>
    <button onClick={()=>setAddres({title:'ankara', zip:31162})}>yeni şehir ekle</button>{/*obje olarak*/} 
      {/* array le obje arasındaki pek fark yok sadece array kısmında köşeli parantez objede süslü parantez kullanılıyor */}
    </div>
  );
}

export default App;




