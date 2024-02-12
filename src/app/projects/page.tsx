import Image from 'next/image'
import cat from '@/data/images/sillycat.gif'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import projects from '@/data/projects'
import { ProjectCard, Layout } from '@/components'
import { Fragment } from 'react'

export default function Page() {
    return (
            <div className="pt-8 bg-background divide-y divide-accent-foreground">
                <div className="pb-8 space-y-5 flex justify-center flex-col ">
                    <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-foreground">
                        Personal Projects
                    </h1>
                </div>
                <div className="py-12 flex justify-center">
                    <div className="-m-4 flex flex-wrap">
                        {projects.map((project) => (
                            <ProjectCard
                                title = { project.title }
                                description = { project.description }
                                imgSrc = { project.imgSrc }
                                href = { project.href}
                                tags = { project.tags }
                                key = { project.title }
                            />
                        ))}
                        
                    </div>
                </div>
                
            </div>
        
    )
}