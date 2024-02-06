'use client'
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import AOS from 'aos';
import "aos/dist/aos.css"

const dataTheme = [
  {
    imageUrl: '/slider-1.jpg',
    demoLink: '/basilico/about'
  },
  {
    imageUrl: '/slider-2.jpg',
    demoLink: '/coffee-shop'
  },
  {
    imageUrl: '/slider-3.jpg',
  }  
]

const workExpsData = [
  {
    companyName: 'Lotte Data Communication',
    position: 'Senior Frontend Developer',
    description: [
      'Build UI/UX website lottemart.vn',
      'Work with NextJs, Redux Thunk, Next Authentication',
      'Work with login social networking service, Tailwindcss, Typescript',
      'Build Cart Page Business logic function.',
    ]
  },
  {
    companyName: 'TagWW',
    position: 'Senior Frontend Developer',
    description: [
      'Build Admin Dashboard System Manage User',
      'Work with React, NextJs, Redux Thunk, Next Authentication, Typescript Charka UI',
      'Build react custom hook fetching data, interceptor',
      'Build business logic function for handling user role data, assets management',
      'Write unit test with cypress'
    ]
  },
  {
    companyName: 'Isobar Commerce',
    position: 'Frontend Developer',
    description: [
      'Work with react router dom, Ant design, Material Design, Typescript',
      'Front-end developer for Magento platform theme UI.',
      'Work with NextJs, Redux Thunk, Next Authentication',
      'Work with react PWA',
      'Fixed front end bugs.',
      'Report to Team leader, Manager'
    ]
  },
  {
    companyName: 'Gianty',
    position: 'Frontend Developer',
    description: [
      'Do Intranet Social Network Website for company, help improve UI/UX and developed main company website gnt.co.jp.',
      'Created and maintained the front-end standards document and oversaw production of Javascript, HTML, and CSS.',
      'Fixed front end bugs.',
      'Write Hybird App Portal Internal Human manager like check in out, Absence request..., fix bug app.'
    ]
  }
]

export default function Home() {
  useEffect(() => {
    AOS.init({ duration : 5000 })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8">
      
      <section className="logo p-24 pb-0 text-center">
        <svg width="327.9000244140625" height="48.4010009765625" viewBox="0 0 527.9 98.401" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#12372a" stroke-width="0.25mm" fill="#12372a" style={{stroke: "#12372a", strokeWidth: "0.25mm", fill:"#12372a"}}><path d="M 264 0 L 264 12.6 L 264 54.7 L 223.1 0 L 212.3 0 L 212.3 17.2 L 212.3 54.5 L 212.3 70.2 L 214.6 70.2 L 214.6 54.5 L 214.6 5.7 L 265.1 72 L 267 72 L 267 13.4 L 267 0 L 264 0 Z M 48.8 0 L 48.8 32.9 L 10.4 32.9 L 10.4 0 L 0 0 L 0 72 L 10.4 72 L 10.4 35.4 L 48.8 35.4 L 48.8 72 L 59.2 72 L 59.2 0 L 48.8 0 Z M 290.8 86.1 L 287.3 86.1 L 287.3 86.5 A 9.103 9.103 0 0 0 290.211 93.222 A 13.772 13.772 0 0 0 292.5 95 A 20.037 20.037 0 0 0 298.578 97.536 C 300.943 98.116 303.604 98.4 306.6 98.4 A 40.015 40.015 0 0 0 311.882 98.077 C 313.744 97.829 315.428 97.434 316.94 96.885 A 15.837 15.837 0 0 0 321.2 94.6 A 12.659 12.659 0 0 0 324.753 90.704 A 12.085 12.085 0 0 0 326.3 84.6 A 13.578 13.578 0 0 0 325.832 80.941 A 10.781 10.781 0 0 0 323.8 77 A 11.223 11.223 0 0 0 317.683 72.858 A 15.163 15.163 0 0 0 317.1 72.7 C 314.3 72 301 72.4 295.7 71.3 C 293.208 70.838 292.846 69.354 293.198 67.87 A 5.511 5.511 0 0 1 293.3 67.5 C 294.047 65.353 296.537 63.99 302.315 63.656 A 46.03 46.03 0 0 1 303.6 63.6 C 309.913 63.403 314.377 61.843 317.089 59.018 A 10.715 10.715 0 0 0 317.2 58.9 A 15.513 15.513 0 0 0 320.326 54.081 A 13.835 13.835 0 0 0 321.3 48.9 A 15.286 15.286 0 0 0 318.984 41.005 A 21.186 21.186 0 0 0 318.8 40.7 A 8.915 8.915 0 0 0 316.662 38.429 C 313.714 36.138 308.977 34.5 305 34.5 A 16.328 16.328 0 0 0 298.71 35.685 A 16.208 16.208 0 0 0 294 38.7 C 290.9 41.4 289.3 44.8 289.3 48.7 C 289.3 51.5 290.1 54 291.6 56.3 A 17.468 17.468 0 0 0 294.335 59.403 C 295.231 60.214 296.249 60.992 297.397 61.737 A 30.05 30.05 0 0 0 298.3 62.3 A 18.988 18.988 0 0 0 294.962 63.237 C 293.816 63.687 292.856 64.236 292.083 64.884 A 6.479 6.479 0 0 0 289.7 70.1 A 5.757 5.757 0 0 0 291.643 74.445 A 9.299 9.299 0 0 0 292.7 75.3 A 5.567 5.567 0 0 0 294.547 76.052 C 297.179 76.7 301.541 76.7 306.8 76.7 A 43.077 43.077 0 0 1 310.458 76.845 C 321.668 77.803 321.636 83.267 321.603 86.244 A 42.946 42.946 0 0 0 321.6 86.7 A 8.011 8.011 0 0 1 319.025 92.688 A 12.282 12.282 0 0 1 317.7 93.8 C 315.2 95.6 311.6 96.5 307 96.5 A 34.986 34.986 0 0 1 303.006 96.285 C 292.89 95.121 290.892 89.509 290.803 86.328 A 8.132 8.132 0 0 1 290.8 86.1 Z M 502.3 41.5 L 502.3 33.8 L 495.9 33.8 L 495.9 48.4 L 495.9 59.4 L 495.9 72 L 502.3 72 L 502.3 59.4 L 502.3 44.1 A 33.154 33.154 0 0 1 504.638 41.562 C 505.847 40.385 507.042 39.431 508.2 38.7 C 510.2 37.5 512.1 36.9 513.9 36.9 A 8.586 8.586 0 0 1 516.26 37.206 A 6.47 6.47 0 0 1 518.7 38.5 A 6.484 6.484 0 0 1 520.207 40.112 A 5.197 5.197 0 0 1 521 42.2 A 15.226 15.226 0 0 1 521.208 43.658 C 521.304 44.625 521.359 45.795 521.384 47.179 A 113.888 113.888 0 0 1 521.4 49.2 L 521.4 59.4 L 521.4 72 L 527.9 72 L 527.9 59.4 L 527.9 44.9 C 527.9 42.785 527.623 42.056 527.601 42.003 A 0.178 0.178 0 0 0 527.6 42 A 7.453 7.453 0 0 0 526.43 38.726 A 10.174 10.174 0 0 0 523.6 35.9 C 521.997 34.653 519.839 33.961 517.266 33.825 A 18.253 18.253 0 0 0 516.3 33.8 C 513.6 33.8 511.1 34.4 508.8 35.7 A 19.814 19.814 0 0 0 505.234 38.295 C 504.282 39.159 503.36 40.149 502.476 41.273 A 27.352 27.352 0 0 0 502.3 41.5 Z M 167.2 37.9 L 165.2 37.9 L 152 68.2 L 138.5 37.9 L 131.7 37.9 L 148.7 75.5 L 139.1 97.4 L 140.9 97.4 L 167.2 37.9 Z M 427.6 37.9 L 425.6 37.9 L 412.4 68.2 L 398.9 37.9 L 392.1 37.9 L 409.1 75.5 L 399.5 97.4 L 401.3 97.4 L 427.6 37.9 Z M 105.6 72.5 L 111.9 72.5 L 111.9 59.8 L 111.9 36.2 L 105.6 36.2 L 105.6 48.5 L 105.6 56.7 A 28.745 28.745 0 0 1 105.486 59.331 C 105.321 61.122 104.981 62.6 104.5 63.7 A 10.344 10.344 0 0 1 102.866 66.144 C 102.295 66.789 101.623 67.41 100.851 67.998 A 16.978 16.978 0 0 1 100.3 68.4 A 12.697 12.697 0 0 1 97.734 69.839 A 9.998 9.998 0 0 1 93.9 70.6 C 92.3 70.6 90.9 70.2 89.7 69.4 C 88.5 68.6 87.7 67.6 87.4 66.5 C 87.249 65.671 87.098 64.444 87.033 62.819 A 42.978 42.978 0 0 1 87 61.1 L 87 36.2 L 80.7 36.2 L 80.7 48.5 L 80.7 60.8 C 80.7 63.518 80.916 65.659 81.411 67.162 A 6.692 6.692 0 0 0 81.7 67.9 A 7.773 7.773 0 0 0 83.691 70.573 A 12.36 12.36 0 0 0 85.5 71.9 A 12.393 12.393 0 0 0 91.014 73.572 A 13.914 13.914 0 0 0 91.9 73.6 C 94.7 73.6 97.2 72.9 99.5 71.5 A 16.536 16.536 0 0 0 103.114 68.473 C 103.973 67.531 104.787 66.459 105.563 65.257 A 30.348 30.348 0 0 0 105.6 65.2 L 105.6 72.5 Z M 366 72.5 L 372.3 72.5 L 372.3 59.8 L 372.3 36.2 L 366 36.2 L 366 48.5 L 366 56.7 A 28.745 28.745 0 0 1 365.886 59.331 C 365.721 61.122 365.381 62.6 364.9 63.7 A 10.344 10.344 0 0 1 363.266 66.144 C 362.695 66.789 362.023 67.41 361.251 67.998 A 16.978 16.978 0 0 1 360.7 68.4 A 12.697 12.697 0 0 1 358.134 69.839 A 9.998 9.998 0 0 1 354.3 70.6 C 352.7 70.6 351.3 70.2 350.1 69.4 C 348.9 68.6 348.1 67.6 347.8 66.5 C 347.649 65.671 347.498 64.444 347.433 62.819 A 42.978 42.978 0 0 1 347.4 61.1 L 347.4 36.2 L 341.1 36.2 L 341.1 48.5 L 341.1 60.8 C 341.1 63.518 341.316 65.659 341.811 67.162 A 6.692 6.692 0 0 0 342.1 67.9 A 7.773 7.773 0 0 0 344.091 70.573 A 12.36 12.36 0 0 0 345.9 71.9 A 12.393 12.393 0 0 0 351.414 73.572 A 13.914 13.914 0 0 0 352.3 73.6 C 355.1 73.6 357.6 72.9 359.9 71.5 A 16.536 16.536 0 0 0 363.514 68.473 C 364.373 67.531 365.187 66.459 365.963 65.257 A 30.348 30.348 0 0 0 366 65.2 L 366 72.5 Z M 452.4 48.4 L 476.9 48.4 A 12.827 12.827 0 0 0 474.201 40.16 A 15.504 15.504 0 0 0 473.3 39.1 A 12.025 12.025 0 0 0 466.744 35.267 A 19.038 19.038 0 0 0 462.4 34.8 A 16.351 16.351 0 0 0 454.361 36.789 A 17.016 17.016 0 0 0 449.9 40.4 A 20.122 20.122 0 0 0 445.082 51.467 A 26.216 26.216 0 0 0 444.9 54.6 A 22.751 22.751 0 0 0 445.391 59.424 A 17.368 17.368 0 0 0 447.5 64.8 C 449.2 67.6 451.4 69.7 454.1 71.3 C 456.9 72.8 459.7 73.6 462.8 73.6 C 466 73.6 469.1 72.7 471.8 71.1 A 14.215 14.215 0 0 0 474.562 68.873 A 12.519 12.519 0 0 0 475.7 67.5 L 474.2 66 C 471.9 69.5 468.5 71.2 464 71.2 C 460.1 71.2 457.1 69.6 455.2 66.5 C 453.2 63.3 452.2 58.5 452.2 52.2 A 16.889 16.889 0 0 1 452.217 51.508 C 452.25 50.725 452.325 49.675 452.4 48.4 Z M 298.6 40 A 7.895 7.895 0 0 0 298.201 40.619 C 296.975 42.726 296.4 45.811 296.4 49.8 C 296.4 53.8 297.2 56.8 298.9 58.7 A 7.351 7.351 0 0 0 299.05 58.863 C 300.077 59.943 301.247 60.502 302.581 60.773 A 13.72 13.72 0 0 0 305.3 61 A 9.013 9.013 0 0 0 309.559 60.149 A 6.476 6.476 0 0 0 311.4 58.7 A 7.229 7.229 0 0 0 312.115 57.749 C 312.987 56.375 313.567 54.529 313.833 52.189 A 28.338 28.338 0 0 0 314 49 A 32.777 32.777 0 0 0 313.965 47.459 C 313.857 45.16 313.495 43.279 312.866 41.814 A 6.754 6.754 0 0 0 311.2 39.4 A 7.686 7.686 0 0 0 310.815 39.04 C 309.115 37.559 307.237 37.3 305.1 37.3 C 302.2 37.3 300 37.8 298.6 40 Z M 471.6 46.6 L 452.5 46.6 A 19.579 19.579 0 0 1 453.553 42.637 C 455 38.973 457.509 37.004 461.192 36.733 A 12.335 12.335 0 0 1 462.1 36.7 C 469.623 36.7 471.472 44.049 471.593 46.365 A 4.497 4.497 0 0 1 471.6 46.6 Z" vector-effect="non-scaling-stroke" className="svg-elem-1"></path></g></svg>
        <h4 className="mt-3 font-calibri text-lg aos-init" data-aos-duration="1000" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
          Hi, I&apos;m a Passionate Frontend developer. This is my official personal website.
        </h4>
      </section>      

      <section className="w-full min-h-[120px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ADBC9F" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,101.3C384,85,480,75,576,101.3C672,128,768,192,864,202.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>        
      </section>

      <section className="container max-w-5xl">
        <h2 className="text-2xl uppercase text-[--greenBold] font-audrey">Work Experience</h2>

        <div className="work time-line mt-5">
          {
            workExpsData?.map((k: any, keyItem: number) => (
              <div className="item pl-20 border-l-4 py-5 border-[--greenThin] relative" key={keyItem}>

                <span className="flex absolute h-3 w-3 -left-2 top-1/2 -mt-1 -mr-1 z-20">
                  <span className={`${keyItem === 0 && 'animate-ping'} absolute inline-flex h-full w-full rounded-full bg-[--greenThin] opacity-75`}></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[--greenThin]"></span>
                </span>


                <div className="content bg-[--greenThin] py-5 px-4 rounded-md relative">
                  <div className="line bg-[--greenThin] w-20 h-1 absolute top-1/2 -left-20 z-10"></div>
                  <div className="title flex gap-3 justify-between">
                    <h1>{k.companyName}</h1>
                    <h2>{k.position}</h2>
                  </div>
                  <div className="job-description">
                    <ul className="list-disc pl-5 mt-4">
                      {k?.description?.map((k: any, keyItem: number) => <li key={keyItem}>{k}</li>)}                      
                    </ul>
                  </div>
                </div>
              </div>  
            ))
          }
        </div>

      </section>
      
      <section className="container mx-auto max-w-5xl">
        <h2 className="text-2xl uppercase text-[--greenBold] font-audrey">Skill</h2>
        <div className="flex flex-wrap gap-x-10 mt-5">
          
          <div className="item">
            <Image src={'/nodejs.svg'} width={40} height={40} alt="NodeJs"/>
          </div>
          
          <div className="item">
            <Image src={'/react.svg'} width={40} height={40} alt="NextJs"/>
          </div>
          
          <div className="item">
            <Image src={'/bootstrap.svg'} width={40} height={40} alt="NextJs"/>
          </div>
          
          <div className="item">
            <Image src={'/css.svg'} width={40} height={40} alt="NextJs"/>
          </div>

          <div className="item">
            <Image src={'/js.svg'} width={40} height={40} alt="NextJs"/>
          </div>

          <div className="item">
            <Image src={'/ts.svg'} width={40} height={40} alt="NextJs"/>
          </div>

          <div className="item">
            <Image src={'/vercel.svg'} width={140} height={40} alt="NextJs"/>
          </div>
          
          <div className="item">
            <Image src={'/next.svg'} width={140} height={70} alt="NextJs"/>
          </div>
        </div>
      </section>

      <section className="w-full h-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ADBC9F" fill-opacity="1" d="M0,192L30,181.3C60,171,120,149,180,138.7C240,128,300,128,360,112C420,96,480,64,540,53.3C600,43,660,53,720,90.7C780,128,840,192,900,192C960,192,1020,128,1080,122.7C1140,117,1200,171,1260,202.7C1320,235,1380,245,1410,250.7L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
      </section>

      <section className="templates container max-w-7xl mt-8">
        <h1 className="text-center text-4xl uppercase leading-4 tracking-wide font-audrey text-[--greenBold] aos-init" data-aos-duration="1000" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="1000">
          Premium HTML Theme
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
          {dataTheme?.map((k: any, index: number) => (
            <div 
              className="item shadow-lg rounded-md aos-init" 
              data-aos-duration="1000" 
              data-aos="fade-up" 
              data-aos-easing="ease" 
              data-aos-delay={`${index+1}00`} 
              key={index}
            >
              <Link href={k.demoLink ?? "#"} className="inline-block transition-all hover:-translate-y-2 ease-in-out duration-300">
                <Image src={k?.imageUrl} alt="Basilico" width={1769} height={679} className="object-cover rounded-md"/>
              </Link>
            </div>
          ))}          
        </div>
      </section>

      <div className="bg-wave w-full h-48">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ADBC9F" fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,85.3C384,85,480,139,576,154.7C672,171,768,149,864,165.3C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </main>
  );
}
