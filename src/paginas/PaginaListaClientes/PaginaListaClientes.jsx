import "./PaginaListaClientes.css";
import { Link, useNavigate } from "react-router-dom";

import Principal from "../../comum/componentes/Principal/Principal";
import ServicoCliente from "../../comum/Servicos/ServicoCliente";
import React, { useState, useEffect } from "react";
import { FaFaceTired } from "react-icons/fa6";

const instanciaServicoCliente = new ServicoCliente();

const PaginaListaClientes = () => {
  const navigate = useNavigate();
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    const clientesDoLocalStorage = instanciaServicoCliente.listar();
    setListaClientes(clientesDoLocalStorage);
  }, []);

  const navegarParaEdicao = (idCliente) => {
    navigate(`/cadastro-cliente/${idCliente}`);
  };

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <Link to="/cadastro-cliente">Novo</Link>

      {listaClientes.map((cliente) => {
        return (
          <div key={cliente.id} className="pagina-lista-clientes_item-cliente">
            {cliente.nome}
            <FaFaceTired
              size={128}
              color="red"
              onClick={() => navegarParaEdicao(cliente.id)}
            />
          </div>
        );
      })}
    </Principal>
  );
};

export default PaginaListaClientes;
