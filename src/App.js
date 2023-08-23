import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Form from "./components/Form";

//takım listesini tutacağınız bir state oluşturun.

function App() {

  const [memberList, setMemberList] = useState([]);
  const [oldMember, setOldMember] = useState(null);

  const addMember = (newMember) => {
    newMember.id = new Date();
    setMemberList([...memberList, newMember]);  
  };
  const handleEditClick = (member) => {
    setOldMember(member);
  };
  const editMember = (formData) => {
    const updatedTeamList = memberList.map((item)=>{
      if(item.id === oldMember.id){
        formData.id = oldMember.id;
        return formData;
      }else {
        return item;
      }
    })
    setMemberList(updatedTeamList);
    setOldMember(null);
  };
//GOREV:****
//İlave sayfa router, güncellenen elemanın bilgilerini yeni sayfaya bastır. "Emre güncellendi" ++ Emrenin bilgileri

  return (
    <div className="App">
      <div className= "container" >
        <h2>Team List </h2>
        <div className="memberList" >
          {memberList.map((member) => (
            <div key = {member.id} className="memberList-row">
              {member.isim}
              <button onClick={()=>handleEditClick(member)}>
                Edit
              </button>
            </div>
          ))
          }
        </div>
      </div>
      <Form addMember = {addMember} oldMember= {oldMember} editMember= {editMember}/> 
    </div>
  );
}

export default App;
