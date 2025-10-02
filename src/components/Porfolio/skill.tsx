import React from "react";
import { skillsData } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const Skill = () => {
  return (
    <section className="container mx-auto max-w-2xl pb-2 pt-4">
      <div className="flex flex-wrap gap-x-2 mb-0 justify-start items-center">  
        {Array.from(skillsData.entries()).map(([name]) => (
          <div className="item" key={name}>
            <Badge variant="secondary" className="bg-blue-500 border-blue-500 text-white">{name}</Badge>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
