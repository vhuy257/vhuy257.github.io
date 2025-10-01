'use client';
import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { TracingBeam } from "../components/ui/tracing-beam";
import { Badge } from "@/components/ui/badge";
import Skill from "@/components/Porfolio/skill";
import SplitText from "@/components/split-text";
import { Button } from "@/components/ui/button";
import TextType from "@/components/TextType/text-type";

const lexend = Lexend({ subsets: ["latin"], weight: "400" });

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
      "Develop the UI/UX for the website lottemart.vn.",
      "Utilize Next.js, Redux Thunk, and Next Authentication in the development process.",
      "Implement login functionality with social networking services, utilizing Tailwind CSS and TypeScript.",
      "Create the business logic functions for the Cart Page.",
    ],
  },
  {
    companyName: "TagWW",
    position: "Senior Frontend Developer",
    description: [
      "Develop an Admin Dashboard System for User Management.",
      "Utilize React, Next.js, Redux Thunk, Next Authentication, and TypeScript, with Chakra UI for the UI components.",
      "Implement React custom hooks for data fetching and interceptors.",
      "Create business logic functions for managing user roles and assets.",
      "Write unit tests using Cypress.",
    ],
  },
  {
    companyName: "Isobar Commerce",
    position: "Frontend Developer",
    description: [
      "Collaborated on projects using React Router DOM, Ant Design, Material Design, and TypeScript.",
      "Contributed as a front-end developer specializing in Magento platform theme UI.",
      "Utilized Next.js, Redux Thunk, and Next Authentication in project development.",
      "Implemented React Progressive Web App (PWA) features.",
      "Resolved various front-end bugs.",
      "Provided regular reports to Team Leader and Manager.",
    ],
  },
  {
    companyName: "Gianty",
    position: "Frontend Developer",
    description: [
      "Designed and developed an Intranet Social Network Website for the company, enhancing UI/UX, and also spearheaded the development of the primary company website gnt.co.jp.",
      "Established and upheld front-end standards documentation, overseeing the production of JavaScript, HTML, and CSS.",
      "Identified and resolved front-end bugs to ensure optimal performance.",
      "Developed a Hybrid App for internal Human Resource management tasks such as check-in/out and absence requests, as well as addressed bugs within the application.",
    ],
  },
];
export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8  px-8">
      <section className="logo pt-10 pb-0 text-center mt-10">
        <div className="w-full grid grid-cols-4 gap-8 mx-auto">
          <div className="right-content hidden text-right md:flex items-center justify-center">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden shadow-lg">
              <Image 
                src="/avatar.png" 
                alt="Huy Nguyen" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="left-content text-left col-span-3">
            <SplitText
              text="Huy Nguyen"
              className={`${lexend.className} text-4xl md:text-6xl pb-6 text-left w-full block`}
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="w-full block">
              <TextType 
                text={["Hi!", "I'm a Frontend Developer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className={`${lexend.className} text-md md:text-3xl text-gray-700 w-full block`}
                textColors={["#38bdf8", "#8b5cf6"] as never}
                onSentenceComplete={handleAnimationComplete} variableSpeed={undefined}          
              />
            </div>
          </div>
        </div>
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

      <Skill />

      <div className="download-cv">
        <Button variant={'outline'} size={'lg'} className="button--winona relative" data-text="Download CV" asChild>
          <Link href="https://drive.google.com/file/d/1VGoZJl_M7GB6VbYM4m8dsBEYs3I2kVnf/view">
            <span>Download CV</span>
          </Link>
        </Button>
      </div>
      <section className="container max-w-5xl">
        <h2 className="text-center text-2xl">Work Experiences</h2>

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
                    <h1 className="flex items-center gap-2">
                      <i className="lab la-battle-net text-2xl"></i>
                      <Badge variant="outline">{k.companyName}</Badge>
                    </h1>
                    <h2>
                      <Badge variant="default">{k.position}</Badge>
                    </h2>
                  </div>
                  <div className="job-description">
                    <ul className="list-disc pl-5 mt-4 space-y-1">
                      {k?.description?.map((k: any, keyItem: number) => (
                        <li key={keyItem}>
                          <div className="content" dangerouslySetInnerHTML={{__html: k}}></div>
                        </li>
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
        <h1 className="text-center text-2xl leading-4 tracking-wide">
          Premium HTML Theme
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
          {dataTheme?.map((k: any, index: number) => (
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
    </main>
  );
}
