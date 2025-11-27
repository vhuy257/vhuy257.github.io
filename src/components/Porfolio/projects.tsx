'use client';
import Image from "next/image";
import React from "react";
import { projectsData } from "@/lib/utils";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

const Project = () => {
  const handleViewProject = (demoLink: string, techLink: string) => {
    if (demoLink && demoLink !== "#") {
      window.open(demoLink, '_blank');
    }

    if (techLink && techLink !== "#") {
      window.open(techLink, '_blank');
    }
  };

  return (
    <section className="templates container max-w-6xl py-8 px-4">
      <h2 className="text-left text-3xl font-medium">Collections</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 gap-8">
        {projectsData?.map((k: any, index: number) => (
          <div className="item shadow-lg dark:bg-white dark:shadow-2xl rounded-md hover:translate-y-[-10px] transition-all duration-300 max-h-[300px] overflow-hidden relative group" key={index}>
            <Image
              src={k?.imageUrl}
              alt="Project Image"
              width={1769}
              height={679}
              className="object-contain object-center rounded-md w-full h-full transition-all duration-300"
            />

            {k?.techLink && (
              <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                Tech Tricky
              </div>
            )}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100  transition-all duration-300 flex items-center justify-center rounded-md">
              <Button
                onClick={() => handleViewProject(k.demoLink, k.techLink)}
                className="opacity-0 group-hover:opacity-100 border-none transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
                size="sm"
                variant={"default"}
              >
                <Icon icon="mdi:eye" width={20} height={20} />
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
