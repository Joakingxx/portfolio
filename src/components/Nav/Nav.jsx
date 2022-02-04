import React from "react";
import { ReactComponent as GithubLogo } from "../../svgs/githhh.svg";
import { ReactComponent as LinkedinLogo } from "../../svgs/linkedin.svg";

export default function Nav() {
  return (
    <nav className=" lg:text-4xl  border-indigo-100 flex justify-end items-center  border-b-2 text-black  ">
      <div className="flex space-x-10 items-center mx-10 my-4">
        <div>
          {" "}
          <span className="hover:border-b-2 rounded ">Resume</span>
        </div>
        <div>
          <a href="#about" className=" hover:border-b-2 rounded ">
            About
          </a>
        </div>
        <div className="hover:border-b-2 rounded">
          <a href="/https://github.com/Joakingxx" target="_blank">
            <GithubLogo />
          </a>
        </div>
        <div className="hover:border-b-2 rounded ">
          <a
            href="/https://www.linkedin.com/in/joaquinalvarezflores/"
            target="_blank"
          >
            <LinkedinLogo />
          </a>
        </div>
      </div>
    </nav>
  );
}
