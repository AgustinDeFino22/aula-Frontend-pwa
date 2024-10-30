import "./PaginaCadastroCliente.css";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import ServicoCliente from "../../comum/Servicos/ServicoCliente";
import { useNavigate } from "react-router-dom";

const PaginaCadastroCliente = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const servicoCliente = new ServicoCliente();

  const salvar = () => {
    const novoCliente = {
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };
    console.log("Novo Cliente:", novoCliente);

    servicoCliente.salvar(novoCliente);
    navigate("/lista-clientes");
  };

  return (
    <Principal titulo="Novo Cliente" voltarPara="/lista-clientes">
      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite o número do seu celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Data Nascimento</label>
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Digite o seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>

      <BotaoCustomizado cor="secundaria" aoClicar={salvar}>Salvar</BotaoCustomizado>
    </Principal>
  );
};
export default PaginaCadastroCliente;
