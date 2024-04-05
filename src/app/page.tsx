'use client'

import { Forum, Inter, Manrope, Atkinson_Hyperlegible } from 'next/font/google'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from 'react'
import SplitType from 'split-type'
import cn from '@/components/utils/cn'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'


import { Title, ProjectCard, Footer, Icon } from '@/components'
import projects from '@/data/projects'

const inter = Inter({ subsets: ['latin'] })

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Page() {
    let height = 0;

    useEffect(() => {
        // @ts-ignore
        // eslint-disable-next-line react-hooks/exhaustive-deps
        height = document.querySelector('.project-wrapper')?.scrollHeight;
        console.log(height)
    }, []);

    

    useGSAP(() => {
        gsap.set('.landingPage', {scaleX: '0.998'})
        gsap.to('.landingPage', {
            scrollTrigger: {
                start: 'bot bot',
                trigger: '.landingPage',
                scrub: 1,
            },
            scaleX:'0.9925',
            scaleY:'0.9825',
            duration: 3
        })

    /*
        const Halo = 'https://shadergradient-web.vercel.app/customize?animate=off&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=4&wireframe=false'
        const Mint = 'https://shadergradient-web.vercel.app/customize?animate=off&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.3&uTime=0&wireframe=false&zoomOut=false'
        const Interstella = 'https://shadergradient-web.vercel.app/customize?animate=off&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=0.8&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.7&uDensity=0.1&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=1.7&wireframe=false'
    */
        
        gsap.set(".card", {y: 100, opacity: 0});

        ScrollTrigger.batch(".card", {
            interval: 0.1, // time window (in seconds) for batching to occur. , ease: "power3.out"
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15}, overwrite: true, ease: "power3.out"}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true, ease: "power3.out"}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true, ease: "power3.out"}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true, ease: "power3.out"}),
        });
        
        /* ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".card", { y: 0 })); */

        gsap.set(".icon", {y: 50, opacity: 0});

        ScrollTrigger.batch(".icon", {
            interval: 0.1,
            batchMax: 4,
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1,4]}, overwrite: true, ease: "power3.out"}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -50, overwrite: true, ease: "power3.out"}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true, ease: "power3.out"}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true, ease: "power3.out"}),
        });

        
        
        gsap.to(".pillarLight", {
                scrollTrigger: {
                start:'top top', 
                end: '99% 99%',
                trigger: '.project',
                scrub: 1,
            }, 
            y: (i, target) => -(height) * target.dataset.speed * 1.5,
            ease: 'none'
        });
        
        gsap.to(".pillarLightUp", {
            scrollTrigger: {
                start:'top top',
                trigger: '.project',
                scrub: 1
            }, 
            
            y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
            ease: "none"
        });

        gsap.set('.project-title', {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", x: '+=100'})
        gsap.to(".project-title", {
            scrollTrigger: {
                start:'top 70%',
                end:'top 30%',
                trigger: '.project',
                scrub: 1,
                invalidateOnRefresh: true
            }, 
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            x: '-=100',
            ease: "power3.out"
        });

        const aboutTitle = SplitType.create('.about-title', { types: 'chars' })
        const aboutChars = aboutTitle.chars

        
        gsap.fromTo(aboutChars, { y: 100, opacity: 0 }, {
            scrollTrigger: {
                start:'top 70%',
                end:'top 40%',
                trigger: '.about',
                scrub: 1,
            },
            y: 10,
            opacity: 1,
            stagger: 0.05,
            ease: 'power4.out',
        })
        

        
    })
    
    return (
        <div className= 'bg-gradient-to-tr from-orange-300 to-[#09203f]'>
            <ShaderGradientCanvas
                importedFiber={{ ...fiber, ...drei, ...reactSpring }}
                style={{ position: "absolute", pointerEvents: "none" }}
                className='landingPage rounded-xl'
            >
                <ShaderGradient
                control='query'
                urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.2&uStrength=1.5&uTime=8&wireframe=false&zoomOut=false'
            />
            
            </ShaderGradientCanvas>
            
            <div className='landingPage h-screen '>
                <div className='flex flex-col justify-center items-center h-full'>
                    <Title />
                </div>
                
            </div> 
            {/* bg-gradient-to-b from-background from-40% to-[#432d4e] to-90% */}
            <div className=''>
                <div className="project bg-[#110f1f]" data-speed='0.1'>
                    <div className="pt-16 pb-8 space-y-5 flex justify-center items-center flex-col ">
                        <h1 className={cn("text-6xl leading-9 tracking-tight text-violet-200 project-title h-[60px] flex flex-col justify-end pb-[16px]", inter.className)}>
                            Personal Projects
                        </h1>
                    </div> 
                    <div className="py-12 flex flex-row justify-center space-x-3 lg:space-x-5">
                        <div className='flex flex-col space-y-3'>
                            <div className=" w-[12px] md:w-[32px] h-[150px] rounded-xl bg-[url('/static/images/Halo.png')] bg-cover pillarLight" data-speed={0.95} />
                            <div className=" w-[12px] md:w-[32px] h-[150px] rounded-xl bg-[url('/static/images/Mint.png')] bg-cover pillarLight" data-speed={1.05} />
                            <div className=" w-[12px] md:w-[32px] h-[150px] rounded-xl bg-[url('/static/images/Pensive.png')] bg-cover pillarLight" data-speed={1.15} />
                        </div>
                        <div className='flex flex-col project-wrapper'>
                            {projects.map((project) => (
                                <ProjectCard
                                    title = { project.title }
                                    description = { project.description }
                                    imgSrc = { project.imgSrc }
                                    href = { project.href}
                                    tags = { project.tags }
                                    key = { project.title }
                                    className='card'
                                />
                            ))}  
                        </div>
                        <div className='flex flex-col space-y-3 justify-end'>
                            <div className=" w-[12px] md:w-[32px] h-[150px] rounded-xl bg-[url('/static/images/Candy.png')] bg-cover pillarLightUp" data-speed={1.15} />
                            <div className=" w-[12px] md:w-[32px] h-[150px] rounded-xl bg-[url('/static/images/Sunset.png')] bg-cover pillarLightUp" data-speed={1.05} />
                            <div className=" w-[12px] md:w-[32px] h-[150px] rounded-xl bg-[url('/static/images/Night.png')] bg-cover pillarLightUp" data-speed={0.95} />
                        </div>
                    </div>
                </div>
            </div> 
            <div className='about'>{/* bg-gradient-to-tr from-[#a6c0fe] to-[#09203f] */}
                <div className='h-screen bg-[#110f1f] flex flex-col justify-between divide-y'>
                    <div className='items-center mx-auto'>
                        <div className="pt-16 pb-8 space-y-5 flex justify-center items-center flex-col ">
                            <p className={cn("text-6xl leading-9 text-center tracking-tight text-violet-200 h-[68px] about-clip about-title", inter.className)}>
                                Technologies
                            </p>
                        </div> 
                        <div className='pt-8 flex flex-row justify-center'>
                            <div className='max-w-[344px] md:max-w-[800px] bg-background/25 border border-border rounded-md'>
                                <div className='p-4 grid grid-cols-4 gap-4 md:gap-8 lg:gap-12'>
                                    <Icon iconLink = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                    <Icon iconLink = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                                    <Icon iconLink = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-plain.svg" />
                                    <Icon iconLink = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                                    <Icon iconLink = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                                    
                                    <Icon iconLink = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                                    <Icon iconLink = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                    <Icon iconLink = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                                    <div className="hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-out">
                                        <svg viewBox="0 0 128 128" className='fill-violet-200 icon'>
                                            <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex flex-row pt-12'>
                            <div className='flex flex-col divide-y divide-accent-foreground ml-2 w-1/3'>
                                <div className='h-[48px]'/>
                                <div className='h-[48px]'/>
                            </div>
                            <HoverCard>
                                <HoverCardTrigger asChild> 
                                    <div 
                                        className='w-1/3 flex items-center justify-center pt-[12px] hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-out' 
                                        onClick={() => gsap.to(window, {duration:2, scrollTo:{y:0, autoKill: true}, ease:'power3.out'})}
                                    >
                                        <svg width='96px' height='96px' viewBox="0 0 100 125" enableBackground="new 0 0 100 100"><path fill='rgb(165 180 252)' d="M100,50c0-27.613-22.387-50-50-50C22.386,0,0,22.387,0,50c0,27.615,22.386,50,50,50C77.613,100,100,77.615,100,50z   M25.925,70L12.962,57.036l37.037-37.035l37.037,37.035L74.073,70L49.999,45.927L25.925,70z"/></svg>
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <div className='text-center text-violet-200 hover:underline'>
                                        <a href='https://www.youtube.com/watch?v=_O5bwj-8XfU'>
                                          Take me to the top!  
                                        </a>
                                    </div> 
                                </HoverCardContent>
                            </HoverCard>
                            
                            
                            <div className='flex flex-col divide-y divide-accent-foreground mr-2 w-1/3'>
                                <div className='h-[48px]'/>
                                <div className='h-[48px]'/>
                                
                            </div>
                        </div>
                    </div>
                    
                   
                    <Footer />
                </div>
                
            </div>
        </div>
        
      
        
    )
}
