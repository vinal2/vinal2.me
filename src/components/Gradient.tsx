import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import cn from './utils/cn'

type GradientProps = {
    url: string,
    speed: Number,
    className: string
}

const Gradient = ({url, speed, className} : GradientProps) => {

    return (
        <div className={className} data-speed={speed}>
            <ShaderGradientCanvas
                importedFiber={{ ...fiber, ...drei, ...reactSpring }}
                style={{ pointerEvents: "none" }}
                className='rounded-xl'
            >
                <ShaderGradient
                    control='query'
                    urlString={url}            
                />

            </ShaderGradientCanvas>  
        </div>
        
    )
}

export default Gradient
