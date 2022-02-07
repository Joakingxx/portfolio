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
    <div className="text-2xl  h-full mx-auto" id="skills">
      <h2 className="font-marven text-center pt-40 pb-10 text-5xl text-white ">
        <span className="border-b-4 rounded-lg pb-1 text-yellow-300">
          Skills
        </span>
      </h2>
      <div className="">
        <div className="text-yellow-100 flex w-full flex-col lg:flex-row  lg:justify-around pt-6  ">
          <div className="flex pb-4 lg:border-t-8 lg:border-l-8 pt-2 border-yellow-300">
            <div className="">
              {" "}
              <ReactLogo className="h-20 w-40 lg:h-32 " />
              <span>React.js</span>
            </div>
            <div>
              <ReduxLogo className="h-20 w-40 lg:h-32 " />
              <span>Redux</span>
            </div>
            <div>
              <HTMLLogo className="h-20 w-40 lg:h-32 " />
              <span>HTML5</span>
            </div>
          </div>
          <div className="flex pb-4 lg:border-r-8 lg:border-t-8 pt-2   border-yellow-300">
            <div>
              <NodeJSLogo className="h-20 w-40 lg:h-32  " />
              <span>NodeJS</span>
            </div>
            <div>
              <SequelizeLogo className="h-20 w-40 lg:h-32 " />
              <span>Sequelize</span>
            </div>
            <div>
              <ExpressLogo className="h-20 w-40 lg:h-32  lg:pt-6 lg:pl-2" />
              <span>Express JS</span>
            </div>
          </div>
        </div>
        <div className="text-yellow-100 flex w-full flex-col lg:flex-row md:justify-around pt-6 ">
          <div className="flex pb-4 lg:border-l-8 lg:border-b-8 border-yellow-300">
            <div>
              <CSSLogo className="h-20 w-40 lg:h-32 " />
              <span>CSS</span>
            </div>
            <div>
              <JSLogo className="pt-4 h-20 w-40 lg:h-32 " />
              <span>JavaScript</span>
            </div>
            <div>
              <GitLogo className=" h-15 w-40 lg:h-32 " />
              <span>Git</span>
            </div>
          </div>

          <div className="flex  lg:border-b-8 lg:border-r-8 border-yellow-300 ">
            <div>
              <PostgreSQLLogo className="pl-8 h-20 w-40 lg:h-32 " />
              <span>PostgreSQL</span>
            </div>
            <div>
              <PostmanLogo className="h-20 w-40 lg:h-32 " />
              <span>Postman</span>
            </div>
            <div>
              <GithubLogo className="h-20 w-40 lg:h-32 " />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
