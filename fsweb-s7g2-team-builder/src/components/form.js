import React, { useState, useEffect } from "react";

export default function Form({ addTeamMember, duzenlenecekUye }) {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    setMember(duzenlenecekUye || { name: "", email: "", role: "" });
  }, [duzenlenecekUye]);

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTeamMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={member.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={member.role}
          onChange={handleChange}
        />
      </label>
      <button type="submit">{duzenlenecekUye ? "Update" : "Add"} Member</button>
    </form>
  );
}