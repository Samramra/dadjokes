import React, { useState } from "react";

export const Klik = () => {
  const [pocetKliku, setPocetKliku] = useState(0);

  return (
    <div className="joke__likes">
      <button onClick={() => {
        setPocetKliku(pocetKliku + 1);
      }}></button>

      <button onClick={() => {
        setPocetKliku(pocetKliku + 1);
      }}></button>


    </div>
  );
};
