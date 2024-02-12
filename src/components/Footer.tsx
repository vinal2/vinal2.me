'use client'
import { Github, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathName = usePathname()

    return (
        <footer>
            <div className='flex flex-col mb-6'>
                <div className='flex flex-row justify-center space-x-4'>
                    <a href='https://github.com/vinal2'>
                        <Github size={24}/>
                    </a>
                    <a href='mailto:prestons2523@gmail.com'>
                        <Mail size={24} />
                    </a>
                </div>
                <div className='mt-2 flex flex-row justify-center'>
                    {pathName == '/' && <div className='text-medium text-muted-foreground'> Site by Preston San 2024</div>}
                </div>
            </div>
            
        </footer>
        
    )
}

export default Footer