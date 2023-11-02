import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
`;

const FormButton = styled.button`
  display: block;
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  margin: 10px auto;
  cursor: pointer;
`;


function Form(props) {

    const [formData, setFormData] = useState({ //form verilerini saklayan state
        name: "", 
        email: "",
        role: "",
    }); 
    const [isEditing, setIsEditing] = useState(false); //Üye düzenleme modunu izleyen state

    useEffect(() => {
        props.editMode
            ? setFormData(props.editMode) 
            : setFormData({ 
                name: "", 
                email: "",
                role: "",
            })
        props.editMode 
            ? setIsEditing(true)
            : setIsEditing(false);
    }, [props.editMode])

    const submitHandler = (e) => { //Form verilerini, props üzerinden ana bileşen bir işlev yarattık
        e.preventDefault();
        props.addMemmber(formData); // Form verilerini props üzerinden ana bileşene ilet
        setIsEditing(false); //Düzenleme modunu kapat
        setFormData({
            name: "",
            email: "",
            role: "",
          }); //Form verilerini sıfırla
    };

    // Kullanıcının her bir input alanına girdiği verileri 'formData' içinde güncelleyecek bir işlev:
    const changeHandler = (e) => { 
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };
        setFormData(newFormData); // Kullanıcının girdiği verileri form verilerine ekle
    }


    return(
        <div>
            <FormContainer>
            {isEditing ? <h2>Üye Düzenle</h2> : <h2>Yeni Üye Ekle</h2>}

            <form onSubmit={submitHandler}>

                <FormGroup>
                <FormLabel htmlFor="name">İsim </FormLabel>
                <input
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    name="name"
                    value={formData.name}
                    />
                </FormGroup>
                
                <FormGroup>
                <FormLabel htmlFor="email">Eposta</FormLabel>
                <input
                    onChange={(e) => changeHandler(e)}
                    type="email"
                    name="email"
                    value={formData.email}
                />
                </FormGroup>

                <FormGroup>
                <FormLabel htmlFor="role">Rol</FormLabel>
                <input
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    name="role"
                    value={formData.role}
                />
                </FormGroup>

                <FormGroup>
                <FormButton type="submit">
                    {isEditing ? "Üye Düzenle" : "Yeni Üye Ekle"}
                </FormButton>
                </FormGroup>

                <FormGroup>
                <FormButton type="button" onClick={() => setFormData({name: "", email: "", role: "",})}>
                Sıfırla
                </FormButton>
                </FormGroup>

            </form>
            </FormContainer>
        </div>
    );
};

export default Form;