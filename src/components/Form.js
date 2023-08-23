import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, {useState, useEffect} from "react";
//control c ile baştan start verebilirsin!
const initialData = {
    isim: "",
    eposta:"",
    rol:"",
};
const Form = (props) => {
    const {addMember, oldMember, editMember } = props;
    const [formData, setFormData] = useState(initialData);
    const [editMode, setEditMode] = useState(false);

//Sadece oldmember güncellendiğinde editmodu çalıştıracağımız için altına [oldMember] dedik
    useEffect(() => {
        if(oldMember){
            setEditMode(true);
            setFormData(oldMember);
        }else {
            setEditMode(false);
        }
        
    }, [oldMember]);
//hangi elemandan veri geldiğini bu event.target ile anlayıp alıyoruz, aşağıda name alanını dinamik şekilde eklemiş olduk; buradaki name-> inputların name'i yani id'leri, burası zaten dinamik olarak değişiyor olacak, isim, eposta ve rol için, her bir input id'si için ayrı ayrı handler yazmak yerine tek seferde bu şekilde name alanını dinamik yapabiliyoruz
    const handlerChange = (event) => {
        const {name, value, type} = event.target;
        setFormData({...formData, [name]: value})
    };
//biz şu an single page olduğu için defaultunda da sayfayı yenilediğinden burada preventDefault dersek bu yenileme durumunu kaldırmış oluruz(çünkü sayfayı yenileyince baştan komple render ediyor,bunu istemediğimiz için engelliyoruz)(render etmeden memberı ekledik, ve bu değişikliği de set ile güncelledik, formu sıfırladı aşağıda)
    const handleSubmit =(event) => {
        event.preventDefault();
        if(editMode){
            editMember(formData);
        }else{
            addMember(formData);
        }
        setFormData(initialData);
        //console.log(formData.isim);
    };

//input alanı için bir nickname gibi bir isim (burada "isim" dedik) veriyoruz, isim'i aslında bu inputa id olarak atıyoruz (burada atadığımız idlerin yukarıdaki initial dataya refer edeceği için oradaki tanımlarla uyuşması lazım!)(label kullanmazsak isim üzerine tıkladığında direk yazmaya başlayamayız)
    return (
        <form onSubmit={event => handleSubmit(event)}> 
            <label>
                Name:
                <input 
                type="text"
                name="isim"
                value= {formData.isim} 
                onChange = {handlerChange}/>
            </label>
            <label>
                E-mail:
                <input 
                type="text"
                name="eposta"
                value= {formData.eposta} 
                onChange = {handlerChange}/>
            </label>
            <label>
                Role:
                <input 
                type="text"
                name="rol"
                value= {formData.rol} 
                onChange = {handlerChange}/>
            </label>
            <button> Submit </button>
        </form>
    )
};

export default Form;