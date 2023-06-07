import React from "react";

export default function Form(props) {
  const { takimUyeleri, handleChange, handleSubmit, butonDisabledMi } = props;
  return (
    <>
      <h1>Üye Olun</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="isim">İsim: </label>
        <input
          id="isim"
          type="text"
          value={takimUyeleri.isim}
          onChange={(olay) => handleChange(olay)}
        />

        <label htmlFor="email">E-mail: </label>
        <input
          id="email"
          type="email"
          value={takimUyeleri.email}
          onChange={(olay) => handleChange(olay)}
        />

        <label htmlFor="rol">Rol: </label>
        <input
          id="rol"
          type="text"
          value={takimUyeleri.rol}
          onChange={(olay) => handleChange(olay)}
        />
        <p>
          <input
            className="gönderButton"
            name="gönder"
            type="submit"
            disabled={butonDisabledMi}
          />
        </p>
      </form>
    </>
  );
}
