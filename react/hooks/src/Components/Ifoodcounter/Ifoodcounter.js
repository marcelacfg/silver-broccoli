import React, { useEffect, useState } from "react";
import "./Ifoodcounter.css";

export default function Ifoodcounter() {
  const [value, setValue] = useState(1);
  const [buttonMinusStyle, setButtonMinusStyle] = useState("counter-button");

  useEffect(() => {
    const valorTotal = value * 2.75;
    document.getElementById("btnFecharCarrinho").innerHTML = `R$ ${valorTotal}`;
  }, [value]);

  const down = () => {
    if (value === 1) setButtonMinusStyle("counter-button inactive");
    if (value > 0) setValue(value - 1);
  };

  const up = () => {
    setValue(value + 1);
    setButtonMinusStyle("counter-button");
  };

  return (
    <div className="countex-wrapper">
      <button className={buttonMinusStyle} onClick={down}>
        -
      </button>
      <p className="text">{value}</p>
      <button className="counter-button" onClick={up}>
        +
      </button>
      <button id="btnFecharCarrinho">Fechar o carrinho</button>
    </div>
  );
}
