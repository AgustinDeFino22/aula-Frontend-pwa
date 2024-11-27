import React from "react";

const MostrarDivisao = ({ numero1, numero2 }) => {
  return (
    <span>
      A divisão de {numero1} / {numero2} é: {""}
      <strong>{numero1 / numero2}</strong>
    </span>
  );
};

export default MostrarDivisao;
