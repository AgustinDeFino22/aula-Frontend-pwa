import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import { FcFullTrash } from "react-icons/fc";
import "./PaginaListaTarefas.css";
import { json } from "react-router-dom";

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    if (descricao && descricao.trim) {
      tarefas.push({ descricao, feita: false });
      setTarefas([...tarefas]);
    } else {
      alert("Preencha o campo Descrição");
    }
    setDescricao("");
    document.getElementById("campoDescricao").focus();
  };
  const removerDaLista = (index) => {
    if (
      confirm(`Tem certeza que deseja excluir : ${tarefas[index].descricao}`)
    ) {
      tarefas.splice(index, 1);
      setTarefas([...tarefas]);
    }
  };
  const marcarComoFeita = (index) => {
    const tarefaEdicao = tarefas[index];

    tarefas[index] = { ...tarefaEdicao, feita: !tarefaEdicao.feita };

    setTarefas([...tarefas]);
  };
  return (
    <Principal titulo={`Lista de Tarefas (${tarefas.length})`} voltarPara="/">
      <div>
        <input
          type="text"
          value={descricao}
          placeholder="Descrição de tarefas"
          onChange={(event) => setDescricao(event.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              adicionarNaLista();
            }
          }}
        />
        <BotaoCustomizado aoClicar={adicionarNaLista}>+</BotaoCustomizado>
      </div>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.feita}
                onChange={() => marcarComoFeita(index)}
              />
              {item.descricao}
              <FcFullTrash onClick={() => removerDaLista(index)} />
            </li>
          );
        })}
      </ul>
      {tarefas.length === 0 && (
        <span className="pagina-lista-tarefas_mensagem-vazia">
          Não tem tarefa para listar.
        </span>
      )}
    </Principal>
  );
};

export default PaginaListaTarefas;
