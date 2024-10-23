import React from "react";

const MostarMeuNomecompleto = () => {
  const nome = "Agustin";
  const sobrenome = "Emanuel Fernandez";

  return (
    <span>
      O meu nome completo é: <strong>{`${nome} ${sobrenome}`}</strong>
    </span>
  );
};

export default MostarMeuNomecompleto;
