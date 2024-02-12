import { ReactNode } from "react"

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children, ...props } : Props) {
    return (
        <>
            <section className="mx-auto max-w-3xl px-4 pt-20 sm:px-6 xl:max-w-[50rem] xl:px-8">
                <div className="flex h-screen flex-col justify-between font-sans">
                    <main className="mb-auto" {...props}>{children}</main>
                </div>
            </section>
        </>
        
    )
}