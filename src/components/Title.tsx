'use client'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { Forum, Inter, Manrope, Atkinson_Hyperlegible } from 'next/font/google'
import Image from 'next/image';
import cn from './utils/cn';

const forum = Forum({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const womanRope = Manrope({ subsets: ['latin'] })
const legible = Atkinson_Hyperlegible({ weight: '400', subsets: ['latin'] })


gsap.registerPlugin(useGSAP, TextPlugin);

const Title = () => {

    useGSAP(() => {
        gsap.set('.title', { opacity: 0 })
        gsap.set('.desc', { opacity: 0 })

        gsap.set('.title', { y: '-=280px' })
        gsap.set('.desc', { y: '-=280px' })

        gsap.to(".title", { x: '+=225px', duration: 1.75, ease: "power4.out" })
        gsap.to('.title', { opacity: 1, duration: 1.75, ease: "sine.inOut", delay: 0.7})
        gsap.to(".title", { text: {
            value: "Preston San",
            newClass: "text-purple-200 drop-shadow-xl hover:text-opacity-75 hover:tracking-wider transition-all duration-300 ease-out",
            delimiter: "",
            }, duration: 1.75, ease: "power1.out", delay: 0.4 })


        gsap.to(".logo", { rotation: "-=360", x: '-=325px', duration: 1.75, ease: "circ.out"})

        gsap.to(".desc", { x: '+=230px', duration: 1.75, ease: "power4.out", delay: 1.6 })
        gsap.to('.desc', { delay: 1.9, opacity: 1, duration: 1.375, ease: "power1.out", className: 'desc text-orange-200 rounded-xl max-w-[340px] sm:max-w-[580px] md:max-w-[680px] hover:text-opacity-75 transition-all duration-300 ease-out' })
    })

    return (
        <div className='flex flex-col justify-center items-center container '>
            <div className='rounded-full overflow-hidden logo'>
                <Image
                    src= '/static/images/temp logo.png'
                    alt='pic'
                    width='400'
                    height='640'
                />
            </div>
            <div className='flex flex-col'>
                <p className={cn('title text-8xl font-bold text-transparent', legible.className)}>
                    doodoo doo doot
                </p>
                <div className='desc text-transparent rounded-xl max-w-[340px] sm:max-w-[580px] md:max-w-[680px]  '>
                    <p className=''>
                    3rd Year Computer Science student @ UBC -{'>'} pursuing a minor in Data Science.
                    </p>
                    <p className=''>
                        Interested in full stack development, big data and design
                    </p>
                </div>
                
                {/* <p className='title text-transparent'>
                    Hello There
                </p> <p className='desc text-transparent'>
                    background-color: #8EC5FC;
                    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

                </p>*/}
                
            </div>
        </div>
    )
}

export default Title