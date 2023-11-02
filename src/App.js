import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import Form from "./components/Form";

function App() {

  //Üyeleri ve düzenleme modunu saklamak için state oluşturduk.
  const [members, setMembers] = useState([]);
  const [editMode, setEditMode] = useState(null);

  //Yeni üye eklemek için bir işlev tanımladık.
  const addMember = (newMember) => {
    if (editMode) {
      const updatedMembers = members.map((member) =>
        member.id === editMode.id 
          ? newMember
          : member
      );
      setMembers(updatedMembers);
      setEditMode(null);
    } else {
      setMembers([...members, newMember]);
    }
  };

  const WrapperForm = styled.form`
    display: block;
    margin-bottom: 10px;
  `
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WrapperForm onSubmit={addMember}>
          <div>
            <Form
              addMember={addMember}
              editMode={editMode}
            />
          </div>
        </WrapperForm>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
