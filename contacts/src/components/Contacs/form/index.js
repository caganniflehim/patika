import React,{useState,useEffect} from 'react'

 const initialFormValues ={fullname:"",phone_number:""};

 function Form({addContact,contacts}) {
    
   useEffect(()=>{
    setForm(initialFormValues);
   },[contacts])
    
    const [form,setForm]=useState(initialFormValues);
                                             
    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});//formun önceki değerlerini koyum 3 nokta
    };
                                 
    const onSubmit=(e)=>{
        e.preventDefault();
      
        if(form.fullname ===""|| form.phone_number===""){
            return false;// bu if texboxla sadece 1 tanesi gönderirisek sayfa inceleme kısmında consolda bize vermez yani 
            //2 textboxsında dolması gereklis
        }

        addContact([...contacts,form]);//bu şekilde kullanarak atama işlemi artık yapılıcak
        
         
    };
  return (
    <form onSubmit={onSubmit}>{/*form kulandımız için sayfa yenilenme oluyor bununiçin onsubmit içindeki paranteze e.preventDefault yazarsak sayfa yenilenmesini kesiyo */}
        <div className="input1">
      <input name="fullname" placeholder="fullname" value={form.fullname} onChange={onChangeInput}/>{/*placeholder:yer tutucu bilinmeyen bir veri yerine koan kelime yani extboxın içine yazar */}
      </div>
      <div>
    <input name="phone_number" placeholder="pohone_number" value={form.phone_number} onChange={onChangeInput}/>{/*bir elementin atamış değeri değiştiği zaman tetiklenmekte*/}  
    </div>
    <div className="btn">
        <button>add</button>
    </div>
    </form>
  )
}
export default Form