'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import cn from './utils/cn'

type ProjectCardProps = {
    title: string
    description: string
    imgSrc: string
    href: string
    tags?: string[]
    className?: string
}
/*  transition-all duration-100 hover:bg-accent hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-sm */
const ProjectCard = ({ title, description, imgSrc, href, tags = [], className }: ProjectCardProps) => {
    

    return (
        <div className={cn('group/card', className)}>
            <div className="w-full p-2 border border-border rounded-md mb-3 bg-background/25 transition-all group-hover/card:bg-background/50 group-hover/card:-translate-x-1 group-hover/card:-translate-y-1 duration-300 ease-out">
                <div className="flex flex-col md:flex-row justify-between text-primary-foreground rounded-md">
                    <a href = {href} className='flex flex-row justify-center'>
                        <div className="m-2 rounded-lg bg-cover bg-left-top resize-none  w-[256px] h-[256px]" style={{backgroundImage: `url('${imgSrc}')`}} />
                    </a>
                    <div className='flex flex-col ml-2 text-wrap max-w-[320px] md:max-w-[478px]'>
                        <div className='text-2xl font-bold group-hover/card:text-violet-200 group-hover/card:tracking-wider transition-all duration-300 ease-out'> {title} </div>
                        <div className='flex flex-row flex-wrap'>
                            {tags.map((tag, index) => (
                                <Badge
                                    key={tag}
                                    className="my-2 mr-2"
                                    variant={index === 0 ? 'default' : 'outline'}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        
                        <div className='text-medium text-muted-foreground text-pretty'> {description} </div>
                        <div className='h-full flex flex-col justify-end mr-2s'>
                            <div className='flex flex-row justify-end overflow-hidden'>
                                <a href = {href} className='overflow-hidden'>
                                <Badge 
                                    className="my-2 mr-2"
                                    variant='secondary'
                                >
                                    See More
                                </Badge>
                            </a>
                            </div>
                            
                        </div>
                    </div>
                    
                    

                </div>
                
            </div>
        </div>
        
    )

}

export default ProjectCard  