import "./App.css";
import React, { useState } from "react";
import Form from "./components/form";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Onur Ulaş Yazıcı",
      email: "ouyazici@gmail.com",
      role: "Full Stack Developer",
    },
    {
      name: "Eren Bayrak",
      email: "eren.k@example.com",
      role: "Frontend Developer",
    },
    {
      name: "İbrahim Çakı",
      email: "ibrahim.k@example.com",
      role: "Backend Developer",
    },
  ]);

  const addTeamMember = (member) => {
    if (duzenlenecekUye !== null) {
      // Eğer düzenlenen bir üye varsa, güncelle
      setTeamMembers(
        teamMembers.map((m) => {
          if (m === duzenlenecekUye) {
            return member;
          } else {
            return m;
          }
        })
      );
      setDuzenlenecekUye(null);
    } else {
      // Aksi takdirde yeni bir üye ekle
      setTeamMembers([...teamMembers, member]);
    }
  };

  const [duzenlenecekUye, setDuzenlenecekUye] = useState(null);

  const duzenle = (member) => {
    setDuzenlenecekUye(member);
  };

  return (
    <div className="container">
      <h1>Team Members</h1>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.name} - {member.email} - {member.role}
            <button onClick={() => duzenle(member)}>Edit</button>
          </li>
        ))}
      </ul>
      <Form addTeamMember={addTeamMember} duzenlenecekUye={duzenlenecekUye} />
    </div>
  );
}

export default App;