import Image from 'next/image'
import cat from '@/data/sillycat.gif'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import ProjectCard from '@/components/ProjectCard'

export default function Page() {
    return (
        <div className="bg-background divide-y divide-accent-foreground grid">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5 flex justify-center flex-col ">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Projects
                </h1>
                <p className="text-muted-foreground">
                    Stuff Ive personally developed or contributed to!
                </p>
            </div>
            <div className="py-12 flex justify-center">
                <div className="-m-4 flex flex-wrap">
                   <ProjectCard
                        title = "thing"
                        description='t'
                        imgSrc='t'
                        href='t'
                    />
                    <ProjectCard
                        title = "thing"
                        description='t'
                        imgSrc='t'
                        href='t'
                    />
                </div>
            </div>
            
        </div>
    )
}