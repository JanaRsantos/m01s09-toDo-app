import { Avatar } from "../components/Avatar";
import { Bio } from "../components/Bio";
import { Usuario } from "../components/Usuario";

const redes = [
  {
    icone: "bi-linkedin",
    link: "https://www.linkedin.com/in/janaina-ramos-4ba574b3/",
  },
  {
    icone: "bi-instagram text-danger",
    link: "https://www.instagram.com/jana.rsantos/",
  },
  {
    icone: "bi-github text-light-emphasis",
    link: "https://github.com/JanaRsantos",
  },
];

export const QuemSou = () => {
  return (
    <div className="">
      <div className="row border-bottom py-2">
        <div className="col-2">
          <Avatar
            src="https://github.com/JanaRsantos.png"
            alt="JanaRsantos - Full Stack Itaguaçu"
          />
        </div>
        <div className="col ">
          <Usuario nome="Janaína Ramos" cargo="Estudante" redes={redes} />
        </div>
      </div>
      <div className="row mt-4">
        <Bio>
          <p className="fw-light">
            É Aqui que coloco minha bio
          </p>
          <p className="fw-light">
            E aqui acrescento mais sobre mim :D.
          </p>
        </Bio>
      </div>
    </div>
  );
};
