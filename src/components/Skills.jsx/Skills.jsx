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
        <div className=" flex w-full flex-col lg:flex-row  lg:justify-around pt-6  ">
          <div className="flex pb-4 lg:border-t-8 lg:border-l-8 pt-2 border-yellow-300">
            <ReactLogo className="h-20 w-40 lg:h-32 " />
            <ReduxLogo className="h-20 w-40 lg:h-32 " />
            <HTMLLogo className="h-20 w-40 lg:h-32 " />
          </div>
          <div className="flex pb-4 lg:border-r-8 lg:border-t-8 pt-2   border-yellow-300">
            <NodeJSLogo className="h-20 w-40 lg:h-32  " />
            <SequelizeLogo className="h-20 w-40 lg:h-32 " />
            <ExpressLogo className="h-20 w-40 lg:h-32  lg:pt-6 pl-10" />
          </div>
        </div>
        <div className=" flex w-full flex-col lg:flex-row md:justify-around pt-6 ">
          <div className="flex pb-4 lg:border-l-8 lg:border-b-8 border-yellow-300">
            <CSSLogo className="h-20 w-40 lg:h-32 " />
            <JSLogo className="pt-4 h-20 w-40 lg:h-32 " />
            <GitLogo className="pl-6 h-20 w-40 lg:h-32 " />
          </div>

          <div className="flex  lg:border-b-8 lg:border-r-8 border-yellow-300 ">
            <PostgreSQLLogo className="pl-8 h-20 w-40 lg:h-32 " />
            <PostmanLogo className="h-20 w-40 lg:h-32 " />
            <GithubLogo className="h-20 w-40 lg:h-32 " />
          </div>
        </div>
      </div>
    </div>
  );
}
