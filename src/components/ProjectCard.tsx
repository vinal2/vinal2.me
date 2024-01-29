'use client'

import ReactPlayer from 'react-player'
import Image from 'next/image'
import cat from '@/data/sillycat.gif'

type ProjectCardProps = {
    title: string
    description: string
    imgSrc: string
    href: string
    tags?: string[]
}

const ProjectCard = ({ title, description, imgSrc, href, tags = [] }: ProjectCardProps) => {

    return (
        <div className="md max-w-[544px] p-4 md:w-1/2">
            <div className="overflow-hidden border border-border rounded-md">
                <Image
                    src={cat}
                    alt='gif'
                    width='360'
                    height='640'
                />
                <div className="p-4">
                   <h2>Project name </h2>
                   <p> description</p>
                   <div>
                        badges
                   </div>
                </div>

            </div>
            
        </div>
    )

}

export default ProjectCard  