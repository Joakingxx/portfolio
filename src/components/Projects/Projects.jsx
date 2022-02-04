import React from "react";
import Cards from "../Cards/Cards";
export default function Proyectos() {
  let proyectos = [
    {
      nombre: "PI-VIDEOGAMES",
      descripcion: "SPA",
      tecnologias: [
        "React",
        "Redux",
        "NodeJS",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "CSS Modules",
      ],
      repositorio: "https://github.com/Joakingxx/PI-Videogames-main",
      imagen:
        "https://res.cloudinary.com/ddliyirvd/image/upload/v1643995695/PI-VIDEOGAMES_hzofql.png",
    },
    {
      nombre: "Olea",
      descripcion: "E-Commerce",
      tecnologias: [
        "React",
        "Redux",
        "NodeJS",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "CSS Modules",
        "Jwt",
        "Socket.io",
      ],
      repositorio: "https://github.com/Joakingxx/PG-Olea-1",
      imagen:
        "https://res.cloudinary.com/ddliyirvd/image/upload/v1643994104/olea_muwedi.png",
      deploy: "https://somosolea.vercel.app",
    },
    {
      nombre: "Mi Primer NFT",
      descripcion: "Crete a NFT with Smart Contract",
      tecnologias: ["React", "Solidity", "Web3", "CSS Modules"],
      repositorio: "https://github.com/Joakingxx/MiPrimerNFT",
      imagen:
        "https://res.cloudinary.com/ddliyirvd/image/upload/v1643994103/mi-primer-nft_jspguk.png",
      deploy: "https://mi-primer-nft.vercel.app/",
    },
  ];
  return (
    <div className="pb-10" id="proyects">
      <h2 className="font-marven text-center pt-20 pb-10 text-5xl text-white ">
        <span className="border-b-4 rounded-lg pb-1 text-yellow-300">
          Proyects
        </span>
      </h2>
      <div className=" justify-center lg:flex md:justify-center" id="proyectos">
        {proyectos?.map((c) => {
          return (
            <div key={c.nombre}>
              <Cards proyectos={c} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
