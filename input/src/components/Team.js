import React from "react";

export default function Team(props) {
  const { saved } = props;
  return (
    <div>
      <p>Yeni Takım Arkadaşlarımız</p>
      {saved.map((olay) => (
        <p>
          {olay.isim},{olay.rol}
        </p>
      ))}
    </div>
  );
}
