import React from "react";

import { Badge } from "@/components/ui/badge";
import { workExpsData } from "@/lib/utils";

const WorkExp = () => {
  return (
    <section className="container md:max-w-6xl px-4 mt-20">
      <h2 className="text-left text-3xl font-medium">Work Experiences</h2>
      <div className="mx-auto antialiased pt-4 relative">
        {workExpsData?.map((k: any, keyItem: number) => (
          <div className="item relative" key={keyItem}>
            <span className="flex absolute h-3 w-3 -left-2 top-1/2 -mt-1 -mr-1 z-20">
              <span
                className={`${
                  keyItem === 0 && "animate-ping"
                } absolute inline-flex h-full w-full rounded-full  opacity-75`}
              ></span>
              <span className="relative inline-flex rounded-full h-3 w-3 "></span>
            </span>

            <div className="content py-5 rounded-md relative">
              <div className="line  w-20 h-1 absolute top-1/2 -left-20 z-10"></div>
              <div className="title flex gap-3 justify-between items-center">
                <h1 className="flex items-center gap-2">
                  <i className="lab la-battle-net text-2xl"></i>
                  <Badge variant="outline">{k.companyName}</Badge>
                </h1>
                <h2>
                  <Badge variant="default" className="bg-red-500 border-red-500 text-white">{k.position}</Badge>
                </h2>
              </div>
              <div className="job-description">
                <ul className="list-disc pl-5 mt-4 space-y-1">
                  {k?.description?.map((k: any, keyItem: number) => (
                    <li key={keyItem}>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: k }}
                      ></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
