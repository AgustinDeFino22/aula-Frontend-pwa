import "./PaginaCadastroCliente.css";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useEffect, useState } from "react";
import ServicoCliente from "../../comum/Servicos/ServicoCliente";
import { useNavigate, useParams } from "react-router-dom";
import {
  MASCARA_CELULAR,
  MASCARA_CPF,
  formatarComMascara,
} from "../../comum/Utils/Mascaras";
const servicoCliente = new ServicoCliente();

const PaginaCadastroCliente = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (params.id) {
      const clienteEncontrado = instanciaServicoCliente.buscarPorId(params.id);
      if (clienteEncontrado) {
        setNome(clienteEncontrado.nome);
        setId(clienteEncontrado.id);
        setEmail(clienteEncontrado.email);
        setCelular(clienteEncontrado.celular);
        setDataNascimento(clienteEncontrado.dataNascimento);
        setCpf(clienteEncontrado.cpf);
      }
    }
  }, [params.id]);

  const salvar = () => {
    const novoCliente = {
      id: Date.now(),
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
    <Principal
      titulo={params.id ? "Editar Cliente" : (voltarPara = "/lista-clientes")}
    >
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
          onChange={(e) =>
            setCelular(formatarComMascara(e.target.value, MASCARA_CELULAR))
          }
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
          onChange={(e) =>
            setCpf(formatarComMascara(e.target.value, MASCARA_CPF))
          }
        />
      </div>

      <BotaoCustomizado cor="secundaria" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroCliente;
