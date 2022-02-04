import React from "react";
import Foto from "../../imagenes/portfolio.jpg";

export default function Home() {
  return (
    <div className=" h-full text-center py-4 ">
      <div>
        <div>
          <div>
            <img
              className="pb-2 pl-2 border-b-2 h-60 border-l-2  border-yellow-300 mx-auto lg:h-full  rounded-full bg-cover  bg-center"
              src={Foto}
              alt="foto"
            />
          </div>
          <div className=" text-white text-4xl">
            Hi! I'm{" "}
            <span className="text-yellow-300 border-b-2 ">
              {" "}
              Joaquin Alvarez
            </span>
          </div>
          <div className="text-4xl py-5">
            <h3>
              <span className=" text-white border-b-2 border-black-100">
                {" "}
                I am a creative Full Stack developer who always wants to learn
                more.
              </span>
            </h3>
          </div>
          <div className="py-5 flex justify-center">
            <a href="#proyects">
              {" "}
              <button className="mr-4 text-white  md:text-4xl md:px-10 px-5 min-w-sm pb-1 rounded-lg border-4 md:h-16  animate-bounce hover:border-yellow-300  ">
                Projects
              </button>
            </a>
            <a href="#skills">
              <button className="text-white md:text-4xl md:px-10 px-5 min-w-sm pb-1 rounded-lg border-4 md:h-16  animate-bounce hover:border-yellow-300  ">
                Skills
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
