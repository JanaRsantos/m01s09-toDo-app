import { Link } from "react-router-dom";

export const Error = () => {
  return(
    <div className="d-flex flex-column">
      <h1>
        Página não encontrada. Não se preocupe, estamos trabalhando na solução.
      </h1>
      <h3>Aproveita e faz uma pausa para o cafézinho...</h3>
      <Link to={'/'}>Voltar para a página inicial</Link>
    </div>
  )
};