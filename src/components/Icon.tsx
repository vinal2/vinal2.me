import Image from "next/image"

type IconProps = {
    iconLink : string
}

const Icon = ({iconLink} : IconProps) => {
    return (
        <div className="hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-out">
            <Image 
                src={iconLink} 
                alt='icon' 
                width='80' 
                height='80' 
                className='icon'
            />
        </div>
    )
}

export default Icon