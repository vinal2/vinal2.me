'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from 'react'
import Image from 'next/image'


import { Button, buttonVariants } from './ui/button'
import cn from "./utils/cn"

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        document.addEventListener('scroll', changeBackground)

        return () => document.removeEventListener('scroll', changeBackground)
    }, [])

    return (
        <header className={cn(
            'fixed inset-x-0 top-4 z-40 flex h-[60px] mx-8 mx-auto items-center justify-between rounded-2xl bg-secondary border-border border px-4 Sbackdrop-blur-[10px] transition-all duration-150 med:max-w-[768px] lrg:max-w-[1200px]',
            isScrolled && 'bg-background/80 border-transparent'
        )}>
            <div className="w-full mx-auto flex h-[60px] items-center justify-between">
                <div>
                    <div className="flex items-center justify-between rounded-full overflow-hidden">
                        <a href='/about'>
                            <Image src='/static/images/sillycat.gif' alt="cat gif" width="48" height="48" />
                        </a>
                    </div>
                </div>
                <div className="flex items-center">
                    <Button variant={'ghost'} className="px-3 py-2 text-muted-foreground hover:text-foreground font-medium text-sm" asChild>
                        <a href='/'> Home </a>
                    </Button>
                    <Button variant={'ghost'} className="px-3 py-2 text-muted-foreground hover:text-foreground font-medium text-sm" asChild>
                        <a href='/projects'> Projects </a>
                    </Button>
                    <Button variant={'ghost'} className="px-3 py-2 text-muted-foreground hover:text-foreground font-medium text-sm" asChild>
                        <a href='/about'> About </a>
                    </Button>
                </div>
            </div>
    
        </header>
    )
}

export default Header