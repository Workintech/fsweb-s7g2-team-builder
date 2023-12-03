import React, { useState } from "react";
import List from "./companents/list";


export default function Form() {
    const [array,setArray] = useState([]);
    const [value,setValue] = useState( {
        id:0,
        isim: "",
        mail: "",
        rol: "",
});

    const handleChange = (e) => {
        setValue({ ...value, [e.target.id]: e.target.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const oldNumber = array.find((item) => item.id === value.id );
        if( oldNumber === undefined){
            value.id = array.length === 0 ? 1 : (array[array.length - 1].id + 1);
            setArray([...array,value]);

        }else{
           const index = array.indexOf(oldNumber);
            oldNumber.isim = value.isim;
            oldNumber.mail = value.mail;
            oldNumber.rol = value.rol;
            
            array[index] = oldNumber;

        }
        
            setValue({
            id:null,
            isim: "",
            mail: "",
            rol: "",
            })
    } 
    
    return(

    <div>
        <form  onSubmit={(e) => {handleSubmit(e)}} action="">
            <input  value={value.id} id="id" hidden/>
                 <label htmlFor="isim">
                isim:
                <input autoFocus onChange={handleChange} id="isim" type="text" value={value.isim}/>
                </label>

                <label>
                 email:
                <input onChange={handleChange} id="mail" type="email" value={value.mail} />
                </label>

                <label>
                  rol:
                <input onChange={handleChange} id="rol" type="text" value={value.rol}/>
                 </label>

                  <button>Ekle</button>
            </form >

            <List array = {array} setValue = {setValue} setArray={setArray}/>
       
    </div>

    )
}