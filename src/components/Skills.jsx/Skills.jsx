import React from "react";
import { ReactComponent as ReactLogo } from "../../svgs/react.svg";
import { ReactComponent as ReduxLogo } from "../../svgs/redux.svg";
import { ReactComponent as HTMLLogo } from "../../svgs/html.svg";
import { ReactComponent as CSSLogo } from "../../svgs/css.svg";
import { ReactComponent as JSLogo } from "../../svgs/javascript.svg";
import { ReactComponent as NodeJSLogo } from "../../svgs/nodejs.svg";
import { ReactComponent as ExpressLogo } from "../../svgs/express-js.svg";
import { ReactComponent as SequelizeLogo } from "../../svgs/sequelize.svg";
import { ReactComponent as PostgreSQLLogo } from "../../svgs/postgresql.svg";
import { ReactComponent as PostmanLogo } from "../../svgs/postman.svg";
import { ReactComponent as GitLogo } from "../../svgs/git.svg";
import { ReactComponent as GithubLogo } from "../../svgs/github.svg";

export default function Skills() {
  return (
    <div className=" text-2xl  h-full mx-auto" id="skills">
      <h2 className="font-marven text-center pt-40 pb-10 text-5xl text-white ">
        <span className="border-b-4 rounded-lg pb-1 text-yellow-300">
          Habilidades
        </span>
      </h2>
      <div className="  md:h-full text-left inline-grid grid-cols-2 lg:block   lg:text-center">
        <div className="text-yellow-100 w-full lg:flex lg:flex-row  lg:justify-around pt-6  ">
          <div className=" pt-2 lg:flex  lg:border-t-8 lg:border-l-8  border-yellow-300">
            <div className=" mx-8 lg:mx-4 ">
              {" "}
              <ReactLogo className="h-20 w-20 lg:h-32 lg:w-40 " />
              <span className="">React.js</span>
            </div>
            <div className=" mx-8 lg:mx-4 ">
              <ReduxLogo className="h-20 w-20 lg:w-40 lg:h-32 " />
              <span>Redux</span>
            </div>
            <div className=" mx-8 lg:mx-4 ">
              <HTMLLogo className="h-20 w-20 lg:h-32 lg:w-40 " />
              <span>HTML5</span>
            </div>
          </div>
          <div className="pt-2 lg:flex  lg:border-r-8 lg:border-t-8    border-yellow-300">
            <div className=" mx-8 lg:mx-4 ">
              <NodeJSLogo className="h-20 w-20 lg:h-32 lg:w-40 " />
              <span className="">NodeJS</span>
            </div>
            <div className=" mx-8 lg:mx-4 ">
              <SequelizeLogo className="h-20 w-20 lg:h-32  lg:w-40" />
              <span>Sequelize</span>
            </div>
            <div className=" mx-8 lg:mx-4 ">
              <ExpressLogo className="pt-2 h-20 w-28 lg:h-32 lg:w-40 lg:pt-6 lg:pl-2" />
              <span>Express JS</span>
            </div>
          </div>
        </div>
        <div className="text-yellow-100 flex w-full flex-col lg:flex-row md:justify-around pt-6 ">
          <div className="lg:flex  lg:border-l-8 lg:border-b-8 border-yellow-300">
            <div className=" mx-8 lg:mx-4 ">
              <CSSLogo className="pr-6 lg:pr-0 h-20 w-20 lg:h-32 lg:w-40 " />
              <span>CSS</span>
            </div>
            <div className=" mx-8 lg:mx-4 ">
              <JSLogo className="pr-8 lg:pr-0 pt-4 h-20 w-20 lg:h-32 lg:w-40 " />
              <span>JavaScript</span>
            </div>
            <div className=" mx-8 lg:mx-4 ">
              <GitLogo className=" h-20 w-20 lg:h-32 lg:w-40 " />
              <span>Git</span>
            </div>
          </div>

          <div className="lg:flex  lg:border-b-8 lg:border-r-8 border-yellow-300 ">
            <div className=" mx-8 lg:mx-4 ">
              <PostgreSQLLogo className=" h-20 w-20 lg:w-40 lg:h-32 " />
              <span>PostgreSQL</span>
            </div>
            <div className=" mx-8 lg:mx-4 ">
              <PostmanLogo className="h-20 w-20 lg:w-40 lg:h-32 " />
              <span>Postman</span>
            </div>
            <div className=" mx-8 lg:mx-4 ">
              <GithubLogo className=" h-20 w-20 lg:w-40 lg:h-32 " />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
