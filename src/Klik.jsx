import React, { useState } from "react";

export const Klik = () => {
  const [cislo, setCislo] = useState(0)

  return (
    <>
      <div className="joke__likes">
        <button onClick={() => setCislo(cislo + 1)}>0</button>
        <span>0</span>
        <button onClick={() => setCislo(cislo + 1)}>0</button>
        <span>0</span>
      </div>
    </>
  )
}

