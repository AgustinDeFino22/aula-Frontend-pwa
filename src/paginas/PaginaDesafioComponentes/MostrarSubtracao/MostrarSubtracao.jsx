import React from "react";

const MostrarSubtracao = ({ numero1, numero2 }) => {
  return (
    <span>
      A subtração de {numero1} - {numero2} é: {""}
      <strong>{numero1 - numero2}</strong>
    </span>
  );
};

export default MostrarSubtracao;
