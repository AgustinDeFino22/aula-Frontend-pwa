import Principal from "../../comum/componentes/Principal/Principal";
import MostrarDivisao from "./MostrarDivisao/MostrarDivisao ";
import MostrarSoma from "./MostrarSoma/MostrarSoma";
import MostrarSubtracao from "./MostrarSubtracao/MostrarSubtracao";
import MostrarMultiplicacao from "./MostrarMultiplicacao/MostrarMultiplicacao";
import MostarMeuNomecompleto from "./MostrarMeuNomecompleto/MostarMeuNomecompleto";
const PaginaDesafioComponentes = () => {
  return (
    <Principal>
      <MostrarSoma numero1={11} numero2={12} />
      <MostrarSubtracao numero1={10} numero2={2} />
      <MostrarDivisao numero1={50} numero2={10} />
      <MostrarMultiplicacao numero1={10} numero2={10} />
      <MostarMeuNomecompleto nome={""} sobrenome={""} />
    </Principal>
  );
};

export default PaginaDesafioComponentes;
