import { FormViewPathProps } from "./interfaces";


export default function FormViewPath(props: FormViewPathProps) {
    return (
        <div className="flex flex-col bg-[#262626] w-[529px] rounded-[10px]">
            <div className="px-[20px] pb-[20px] pt-[10px]">
                <div className="flex flex-row justify-between">
                    <div className="mont-real-font font-medium text-[24px] text-[#A6A6A6]">{props.title}</div>
                    <div className="flex justify-center items-center bg-[#404040] h-[25px] w-[112px]">
                        <div className="text-[15px] flex justify-center p-[5px] mont-real-font text-[#A6A6A6] font-medium">{props.tag}</div>
                    </div>
                </div>
                <div className="text-[#A6A6A6] text-[20px] font-semibold pb-[5px]">
                    {props.subtitle}
                </div>
                {
                    props.desc ?
                    (
                        <ul className="roboto text-[#A6A6A6] text-[15px] list-disc list-inside font-medium">
                                { 
                                    props.desc.map(item => {
                                        return (
                                            <li>{item}</li>
                                        )  
                                    })
                                }
                        </ul>
                    ) 
                    :(<div></div>)
                }
            </div>
        </div>
    )
}