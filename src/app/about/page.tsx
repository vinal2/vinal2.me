import Image from 'next/image'
import cat from '@/data/images/sillycat.gif'
import { LogoCircle } from '@/components'
  

/* async function getData() {
    const res = await fetch('https://api.example.com/...')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
} */

export default function Page() {

    return (
      <div className='pt-8 divide-y divide-accent-foreground'>
        <div className='pb-8 text-6xl font-extrabold leading-9 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-lavender'>
           About Me 
        </div>
        <div className=' flex flex-col justify-center'>
          <div className='h-[256px] flex flex-row justify-center'>
            <div className='pt-24 text-12xl font-extrabold leading-9 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-lavender'>
              PS
            </div>
          </div>
          <p className='text-xl tracking-wide'>
            Hi, I'm  Preston San, a Civil Engineering Student transferring to 3rd year Computer Science at UBC!
          </p>
          <p className='text-xl tracking-wide pt-8'>

            I'm interested in data science and full stack development!
          </p>
          <p className='text-xl tracking-wide pt-8'>

            I go by vinal2 online and you can find me on various rhythm games or on Steam. 
          </p>
          
        </div>
      </div>
        
    )
}