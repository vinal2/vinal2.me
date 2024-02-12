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
        <div className='pb-8 text-6xl font-extrabold leading-9 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-destructive'>
           About Me 
        </div>
        <div className='py-12'>
          silly
        </div>
      </div>
        
    )
}