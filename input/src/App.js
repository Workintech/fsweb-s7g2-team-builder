import logo from "./logo.svg";
import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import Team from "./components/Team";

function App() {
  const [saved, setSaved] = useState([]);
  const [takimUyeleri, setTakimUyeleri] = useState({
    isim: "",
    email: "",
    rol: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSaved([...saved, takimUyeleri]);
    setTakimUyeleri({
      isim: "",
      email: "",
      rol: "",
    });
  }

  function handleChange(olay) {
    setTakimUyeleri({
      ...takimUyeleri,
      [olay.target.id]: olay.target.value,
    });
  }
  let butonDisabledMi = true;

  if (
    takimUyeleri.isim !== "" &&
    takimUyeleri.email &&
    takimUyeleri.rol !== ""
  ) {
    butonDisabledMi = false;
  }

  return (
    <div className="App">
      <Form
        takimUyeleri={takimUyeleri}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        butonDisabledMi={butonDisabledMi}
      />
      <Team saved={saved} />
    </div>
  );
}

export default App;
