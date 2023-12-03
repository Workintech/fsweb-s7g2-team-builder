import {AiFillEdit } from "react-icons/ai"
import {MdDelete} from "react-icons/md"
import "./list.css";

export default function List({array ,setValue ,setArray}) {

function editClick (item) {
    setValue(item);
    } 

function deleteClick(item) {
setArray(array.filter((sayac) => {
    return item.id !== sayac.id
}))
}


    const style = {
        color:"black",
        textDecoration: "underline",
        backgroundColor:"orange"

    }

const render = array.map((item,sayac) => {
console.log(item)
    return(
        <div className="list-section" ><b style={style}>Kayıt {sayac + 1}</b>
        <div className="list" key={sayac}>
            <span className="list-main"><b style={{color:"black"}}>İsim: </b>{item.isim}</span>
            <span className="list-main"><b style={{color:"black"}}>E-Mail: </b>{item.mail}</span>
            <span className="list-main"><b style={{color:"black"}}>Role: </b>{item.rol}</span> <AiFillEdit style={{color:"red"}} onClick={() => editClick(item)}/><MdDelete onClick={() => deleteClick(item)}/>
                   
         </div>
         </div>
       
    )
   

})
 return (
        <div>{render}</div>
    )

}