'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

type ProjectCardProps = {
    title: string
    description: string
    imgSrc: string
    href: string
    tags?: string[]
}

const ProjectCard = ({ title, description, imgSrc, href, tags = [] }: ProjectCardProps) => {

    return (
        <div className="w-full p-2 border border-border rounded-md mb-3 transition-all duration-100 hover:bg-accent hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-sm">
            <div className="flex flex-row justify-between ">
                <div className='m-2 rounded-lg overflow-hidden resize-none'>
                    <a href = {href}>
                        <Image
                            src= {imgSrc}
                            alt='img'
                            width='256'
                            height='256'
                        />
                    </a>
                    
                </div>
                
                <div className='flex flex-col ml-2 text-wrap w-[478px]'>
                    <div className='text-2xl font-bold text-primary-foreground'> {title} </div>
                    <div className='flex flex-row'>
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
    )

}

export default ProjectCard  