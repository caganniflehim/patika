import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"



export function ProductDetailScreen( ) {
 
    const { state } = useLocation()
    const[content,setContent]=useState("")
    const[contents,setContents]=useState([])

    const getData = () => {
        fetch('https://fakestoreapi.com/products/'+ state.product.id)
            .then(res => res.json())
            .then(json => console.log(json))
    }

    function addContent(){
        setContents([...contents, content])
        setContent("")

    }
    useEffect(() => {
        getData()
    },[]);
     
    function addBasket(){ 
        const list=[]//array
        list.push(state.product)
        // buraya localstroje eklenecek a produc b ekledinizde a yı silecek b eklicek bu kodda yaşicaz çöz  
    }
    return (
        <div>
            
            <h1>{state.product.title}</h1>
            <div>
                <img className="m-4" src={state.product.image} 
            style={{width:500,height:500, float:"left"}}
            />

            </div>
            <div>
                <p className="m-4" >{state.product.description}</p>
                <p>{state.product.price + '₺'}</p>
            </div>
            <div>
            <div className="m-4" style={{float:"left"}}>
            <label for="comment">yorumlar</label>
            
            <textarea value={content} onChange={(e)=>setContent(e.target.value)} className="form-control" rows="5" cols="80" 
            id="comment" name="text"></textarea>
            
            <button type="submit" className="btn btn-success"onClick={addContent}>Submit</button>
            {contents.length>0?
            contents.map(e=>{
                return(
                    <div className=" m-3 p2 mw-auto mh-auto  border border-success border-2 rounded bg-light">
                        {e}
                    </div>
                )
            }): null
        }
        </div>
        <div style={{clear:"both"}}>
            <button style={{ width:180 }} >sepet</button></div>
            
           </div>
           
        </div>

       
    )
}  