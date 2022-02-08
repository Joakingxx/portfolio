import React from "react";
import Fut from "../../imagenes/fut.jpg";
export default function About() {
  return (
    <div className=" text-white px-10 min-w-screen h-full " id="about">
      <div className="text-2xl  ">
        <h2 className="font-marven text-center pt-40 pb-10 text-5xl text-white ">
          <span className="border-b-4 rounded-lg pb-1 text-yellow-300">
            Sobre mí
          </span>
        </h2>
        <p className="">
          Actualmente vivo en Montevideo, Uruguay y tengo 20 años de edad.
          <br />
          Desde pequeño me fascinan las computadoras y siempre he sido muy
          curioso. Desde hace un tiempo me encuentro estudiando programación y
          <span className="text-yellow-300">
            {" "}
            me fascina aprender nuevas tecnologías.
          </span>
          {"  "}
          Soy una persona{" "}
          <span className="text-yellow-300">
            {" "}
            proactiva, organizada, empatica y con ganas de aprender.{" "}
          </span>
          En mi tiempo libre me gusta compartir en familia y practicar futbol.
        </p>
      </div>
      <div className="pt-4">
        {" "}
        <img
          className="mx-auto rounded-full pb-2 pl-2 h-64 lg:h-[42rem]  py-4 border-b-2  border-l-2  border-yellow-300 "
          src={Fut}
          alt="foto"
        />
      </div>
    </div>
  );
}
