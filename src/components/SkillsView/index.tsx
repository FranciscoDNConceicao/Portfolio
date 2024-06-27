import { useEffect, useState } from 'react';
import { SkillsViewFrame } from './interface';

const sleep = (ms:number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function SkillsView(props: SkillsViewFrame) {

    const [visible, setVisible] = useState(false);

    const delayedFunction = async () => {
        await sleep(5000);
    }

    let width = 600 * props.percentage
    let widthbar = {
        'width': `${width}px`
    }

    useEffect(() => {
        if(props.loading){
            delayedFunction()
            setVisible(true)
        }else{
            setVisible(false)
        }

    }, [props.loading])

    

    return (
        <div className='w-[600px] h-[150px] flex flex-col max-[1000px]:w-[400px]'>
            <div className='flex flex-row'>
                <div className='flex bg-[#262626] w-[120px] h-[120px] justify-center items-center max-[1000px]:hidden'>
                    <img src={props.image} className='p-[15px]'></img>
                </div>
                <div className='flex flex-col ml-[30px] w-[478px]'>
                    <div className='montmont-real-font text-[32px] text-fifth font-semibold'>{props.skill}</div>
                    <div className='roboto-condensed-font text-[22px]'>{props.description}</div>
                </div>
            </div>
            <div className='mt-[15px] w-[600px] h-[18px] border-[2px] border-[#262626] max-[1000px]:hidden'>
                <div className='h-full' style={widthbar}>
                    <div className={` h-full bg-[#262626] ${visible ? 'fade-in-right-width' : 'fade-out-right-width'} `}></div>
                </div>
            </div>
        </div>
    )
}