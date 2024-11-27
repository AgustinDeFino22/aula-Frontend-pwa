import React from "react";

const MostrarSoma = ({ numero1, numero2 }) => {
  return (
    <span>
      A soma de {numero1} + {numero2} é: {""}
      <strong>{numero1 + numero2}</strong>
    </span>
  );
};

export default MostrarSoma;
