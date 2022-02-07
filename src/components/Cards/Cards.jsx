import React from "react";

export default function Cards({ proyectos }) {
  return (
    <div className="rounded-[12px] mb-4 pb-2 h-full mx-4 border-2 border-yellow-300 text-white  bg-card">
      <div>
        <h3 className="px-20 py-6 text-xl lg:text-3xl">
          <span className="border-b-2  border-yellow-300 rounded-lg">
            {proyectos.nombre}
          </span>
        </h3>
        <div className="h-full w-full md:w-full pb-4 ">
          {" "}
          <img className="px-4 " src={proyectos.imagen} alt="Proyecto" />
        </div>
        <span className="text-2xl ">{proyectos.descripcion}</span>
        <div className="pt-2 text-l lg:text-xl">
          <h5 className="">Tecnologías:</h5>
          {proyectos.tecnologias?.map((c, i) => {
            if (i === 0) {
              return (
                <span key={c}>
                  -{c} <br />
                </span>
              );
            }
            return (
              <span>
                {"-" + c} <br />
              </span>
            );
          })}
        </div>
        <div className="pt-4">
          <button className="border-2 mx-43 px-4 mx-4 hover:bg-violet-600 bg-violet-500 rounded-lg">
            <a href={proyectos.repositorio} target="_blank" rel="noreferrer">
              Code
            </a>
          </button>
          {proyectos.deploy ? (
            <button className="border-2 px-4 my-4 bg-violet-500 hover:bg-violet-600 rounded-lg">
              <a href={proyectos.deploy} target="_blank" rel="noreferrer">
                Deploy
              </a>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
