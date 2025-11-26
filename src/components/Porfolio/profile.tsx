'use client';
import SplitText from "@/components/split-text";
import TextType from "@/components/TextType/text-type";
import Image from "next/image";
import Skill from "./skill";
import { CVDownload } from "./cv";

export default function Profile() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="logo pb-0 text-center mt-10 container md:max-w-6xl px-4">
      <div className="w-full flex flex-wrap-reverse sm:flex-nowrap justify-between md:justify-between gap-8 mx-auto items-center">
        <div className="left-content text-left col-span-3">
          <SplitText
            text="Huy Nguyễn"
            className={`text-4xl md:text-6xl pb-4 pt-4 text-left w-full block`}
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 80 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="w-full block">
            <TextType
              text={["Hi! I'm a Frontend Developer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className={`text-md md:text-3xl dark:text-gray-300 w-full block`}
              textColors={["text-gray-700"] as never}
              onSentenceComplete={handleAnimationComplete}
              variableSpeed={undefined}
            />
          </div>
          <Skill />
          <CVDownload />
        </div>
        <div className="right-content text-right md:flex items-center justify-center">
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg">
            <Image
              src="/avatar_origin_180x247.webp"
              alt="Huy Nguyen"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              priority={true}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
