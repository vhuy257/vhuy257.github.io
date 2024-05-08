import Image from "next/image";
import Link from "next/link";
import { Sacramento } from "next/font/google";
import { TracingBeam } from "../components/ui/tracing-beam";
import { Badge } from "@/components/ui/badge";
import Skill from "@/components/Porfolio/skill";

import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

const dataTheme = [
  {
    imageUrl: "/slider-1.jpg",
    demoLink: "/basilico/about",
  },
  {
    imageUrl: "/slider-2.jpg",
    demoLink: "/coffee-shop",
  },
  {
    imageUrl: "/slider-3.jpg",
  },
];

const workExpsData = [
  {
    companyName: "Lotte Data Communication",
    position: "Senior Frontend Developer",
    description: [
      "Build UI/UX website lottemart.vn",
      "Work with NextJs, Redux Thunk, Next Authentication",
      "Work with login social networking service, Tailwindcss, Typescript",
      "Build Cart Page Business logic function.",
    ],
  },
  {
    companyName: "TagWW",
    position: "Senior Frontend Developer",
    description: [
      "Build Admin Dashboard System Manage User",
      "Work with React, NextJs, Redux Thunk, Next Authentication, Typescript Charka UI",
      "Build react custom hook fetching data, interceptor",
      "Build business logic function for handling user role data, assets management",
      "Write unit test with cypress",
    ],
  },
  {
    companyName: "Isobar Commerce",
    position: "Frontend Developer",
    description: [
      "Work with react router dom, Ant design, Material Design, Typescript",
      "Front-end developer for Magento platform theme UI.",
      "Work with NextJs, Redux Thunk, Next Authentication",
      "Work with react PWA",
      "Fixed front end bugs.",
      "Report to Team leader, Manager",
    ],
  },
  {
    companyName: "Gianty",
    position: "Frontend Developer",
    description: [
      "Do Intranet Social Network Website for company, help improve UI/UX and developed main company website gnt.co.jp.",
      "Created and maintained the front-end standards document and oversaw production of Javascript, HTML, and CSS.",
      "Fixed front end bugs.",
      "Write Hybird App Portal Internal Human manager like check in out, Absence request..., fix bug app.",
    ],
  },
];

export default function Home() {
  // useEffect(() => {
  //   AOS.init({ duration : 5000 })
  // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8">
      <section className="logo pt-10 pb-0 text-center">
        <h1 className={`${sacramento.className} text-6xl text-rose-700`}>
          Huy Nguyen
        </h1>
        <h4
          className={`mt-5 font-calibri text-3xl aos-init ${sacramento.className} text-gray-500`}
        >
          <span className="text-4xl text-violet-500">Hi!</span> I&apos;m a Passionate 
          <span className="text-violet-700">Frontend developer </span>. This is my official
          personal website.
        </h4>
      </section>

      <section className="contact max-w-6xl">
        <ul className={`flex justify-between space-x-4 items-center text-sm`}>
          <li className="space-x-2 flex items-center">
            <i className="lar la-envelope text-2xl"></i>
            <span>vhuy2571990@gmail.com</span>
          </li>

          <li className="space-x-2 flex items-center">
            <i className="las la-phone text-2xl"></i>
            <span>0773636224</span>
          </li>

          <li className="space-x-2 flex items-center">
            <i className="las la-birthday-cake text-2xl"></i>
            <span>25/07/1990</span>
          </li>

          <li className="space-x-2 flex items-center">
            <i className="las la-map text-2xl"></i>
            <span>Viet Nam</span>
          </li>

          <li className="space-x-2 flex items-center">
            <i className="lab la-linkedin text-2xl"></i>
            <span>Linkedin</span>
          </li>

          <li className="space-x-2 flex items-center">
            <i className="las la-language text-2xl"></i>
            <span>Vietnamese - English</span>
          </li>
        </ul>
      </section>

      <Skill/>

      <div className="download-cv">
        <Button>Download CV</Button>
      </div>
      <section className="container max-w-5xl">
        <h2 className="text-center text-2xl">
          Work Experiences
        </h2>

        <TracingBeam className="px-6">
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

                <div className="content  py-5 px-4 rounded-md relative">
                  <div className="line  w-20 h-1 absolute top-1/2 -left-20 z-10"></div>
                  <div className="title flex gap-3 justify-between items-center">
                    <h1>
                      <Badge variant="outline">{k.companyName}</Badge>
                    </h1>
                    <h2>
                      <Badge variant="default">{k.position}</Badge>
                    </h2>
                  </div>
                  <div className="job-description">
                    <ul className="list-disc pl-5 mt-4 space-y-1">
                      {k?.description?.map((k: any, keyItem: number) => (
                        <li key={keyItem}>{k}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </section>

      <section className="templates container max-w-7xl py-8">
        <h1
          className="text-center text-2xl leading-4 tracking-wide"
        >
          Premium HTML Theme
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
          {dataTheme?.map((k: any, index: number) => (
            <div
              className="item shadow-lg rounded-md"
              key={index}
            >
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
    </main>
  );
}
