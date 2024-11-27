import React from "react";

const MostrarMultiplicacao = ({ numero1, numero2 }) => {
  return (
    <span>
      A multiplicação de {numero1} * {numero2} é: {""}
      <strong>{numero1 * numero2}</strong>
    </span>
  );
};

export default MostrarMultiplicacao;
