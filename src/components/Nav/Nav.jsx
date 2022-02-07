import React from "react";
import { ReactComponent as GithubLogo } from "../../svgs/githhh.svg";
import { ReactComponent as LinkedinLogo } from "../../svgs/linkedin.svg";
import cv from "../../cv/CV.pdf";

export default function Nav() {
  return (
    <nav className=" lg:text-3xl   border-indigo-100 flex justify-end   border-b-2 text-white  ">
      <div className="flex space-x-10 items-center mx-10 my-4">
        <div>
          {" "}
          <a
            href={cv}
            target="_blank"
            rel="noreferrer"
            className="hover:border-b-2 rounded "
          >
            CV
          </a>
        </div>
        <div>
          <a href="#about" className=" hover:border-b-2 rounded ">
            Sobre mí
          </a>
        </div>
        <div className="hover:border-b-2 rounded  ">
          <a
            href="https://github.com/Joakingxx"
            rel="noreferrer"
            target="_blank"
          >
            <GithubLogo />
          </a>
        </div>
        <div className=" hover:border-b-2 rounded ">
          <a
            href="https://www.linkedin.com/in/joaquinalvarezflores/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinLogo />
          </a>
        </div>
      </div>
    </nav>
  );
}
