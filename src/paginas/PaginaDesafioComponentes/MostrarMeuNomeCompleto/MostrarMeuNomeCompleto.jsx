import React from "react";


const MostrarMeuNomeCompleto = (props) => {

  const  nome = props.nome;
  const sobrenome = props.sobrenome;

    return(
        <>
        <div> O meu nome completo é: <br /> <p><strong>{nome} {sobrenome}</strong></p></div>
        </>
    );
};
export default MostrarMeuNomeCompleto;
