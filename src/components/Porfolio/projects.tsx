import Link from "next/link";
import Image from "next/image";
import React from "react";
import { projectsData } from "@/lib/utils";

const Project = () => {
  return (
    <section className="templates container max-w-6xl py-8 px-4">
      <h1 className="text-left capitalize text-2xl leading-4 tracking-wide">
        Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        {projectsData?.map((k: any, index: number) => (
          <div className="item shadow-lg rounded-md" key={index}>
            <Link
              href={k.demoLink ?? "#"}
              className="inline-block transition-all hover:-translate-y-2 ease-in-out duration-300"
            >
              <Image
                src={k?.imageUrl}
                alt="Basilico"
                width={1769}
                height={679}
                className="object-cover rounded-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
