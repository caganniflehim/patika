import { useEffect, useState } from 'react';
import { CardComponent } from '../components/car'
import Title from '../components/title'
import { BsFillBasketFill } from "react-icons/bs";

export const Main = () => {
  const [search, setSearch] = useState('')
  const [backup, setBackup] = useState([])
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {
    fetch('https://fakestoreapi.com/products?limit=' + page * 5)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setBackup(json)
      })
  }

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    const list = backup.filter(item => item.title.includes(search))
    setData(list)
  }, [search]) //dependecy array

  return (

    <div className='row'>
      <Title />
      <div className='d-flex'>
        <input
          onChange={(value) => {
            setSearch(value.target.value)
          }}
          placeholder='Ara..'
        />
        <div style={{color:"black",fontsize:30}}><BsFillBasketFill/></div>

        
      </div>
      {
        data.map((data, index) => {
          return (
            <div className='col-4' key={index}>
              <CardComponent
                data={data}
              // props gönderdik
              />
            </div>
          )
        })
      }
      <button className='mt-4 btn btn-primary' onClick={() => {
        setPage(x => x + 1)
      }}>Daha Fazla Göster</button>
    </div>
  )
}