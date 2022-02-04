import React from "react";
import Fut from "../../imagenes/fut.jpg";
export default function About() {
  return (
    <div className=" text-white px-10 min-w-screen h-full " id="about">
      <div className="text-2xl  ">
        <h2 className="font-marven text-center pt-40 pb-10 text-5xl text-white ">
          <span className="border-b-4 rounded-lg pb-1 text-yellow-300">
            About me
          </span>
        </h2>
        <p className="">
          I was born and live in Montevideo, Uruguay. I'm 20 years old.
          <br />I am a programming fan, since I was very young
          <span className="text-yellow-300">
            {" "}
            I liked everything related to solving problems
          </span>
          , challenges, etc. I love to research and learn new technologies on my
          free time. I am an organized, team worker and fast learner person. I
          believe that you can go further{" "}
          <span className="text-yellow-300">
            {" "}
            in a team than if you go on your own.{" "}
          </span>
        </p>
      </div>
      <div className="pt-4">
        {" "}
        <img
          className="mx-auto rounded-full pb-2 pl-2 h-full md:h-96  py-4 border-b-2  border-l-2  border-yellow-300 "
          src={Fut}
          alt="foto"
        />
      </div>
    </div>
  );
}
