'use client'
import Image from 'next/image'
import { useState } from 'react'
import cat from '@/data/sillycat.gif'

const LogoCircle = () => {
    const [visible, setVisibility] = useState(false);

    const style= {
        transform : visible ? 'rotate(180deg)' : '',
        transition : 'transform 500ms ease',
    }

    return (
        <div className="relative z-0 flex flex-row justify-center pt-[108px] overflow-hidden aspect-square">
            <div onMouseEnter={() => setVisibility(true)} 
                onMouseLeave={() => setVisibility(false)} 
                className='transition-all absolute overflow-hidden rounded-full hover:scale-105 z-10 hover:rotate-70'>
                <a href='/about'>
                    <Image
                        src= { cat }
                        alt='gif'
                        width='400'
                        height='640'
                    />
                </a>
            </div>
            <div className={(visible) ? 'scale-105 absolute z-1' : 'absolute z-1 invisible'}>
                    <Image
                        src= '/static/images/chakram.png'
                        alt='png'
                        width='420'
                        height='720'
                        style={style}
                    />
                </div>
        </div>
    )
}

export default LogoCircle