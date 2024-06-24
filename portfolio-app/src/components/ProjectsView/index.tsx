import { ProjectsViewProps } from "./interfaces";


export default function ProjectsView(props:ProjectsViewProps){

    return (

        <div className="bg-[#262626] mont-real-font h-[250px] w-[580px] flex items-center">
            <div className="flex flex-col px-[20px] pb-[10px]">
                <a className="text-[#A6A6A6] font-bold text-[20px] hover:underline" href={props.link} target="blank">{props.title}</a >
                <div className="text-[#A6A6A6] text-[16px] py-[10px]">{props.desc}</div>
                <div className="flex flex-row">
                    {
                        props.tags.map(item => {
                            if (item) {
                                return (
                                    <div className='flex justify-center align-middle bg-[#404040] mx-[10px]' key={item}>
                                        <span className="text-[14px] text-[#A6A6A6] py-[3px] px-[10px]">{item}</span>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </div>  
            </div>
            
        </div>
    )
}