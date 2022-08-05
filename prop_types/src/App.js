
import './App.css';
import User from './comanent/users'
const friends=[
{
  id:1,
  name:"esma"
},
{
  id:2,
  name:"çağan"
}
];
function App() {
  return (
    <>
      <User 
      name="mehmet"
      surname="seven"
      //isLoggedIn={true}
      age={29}
      friends={friends}
      address={{/*obje olarak gönderdimiz prolerde kullanabildimiz shape  */
        title:'ataşehir/istanbul',
        zip:34755
       }}
       />
     
    </>
  );
}

export default App;
