import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import TreePathView from '../../components/TreePathView';


export default function PathFrame(props: InterfaceFrame) {
    const ClickOnGetHome = () => {
        props.goBack('up')
    }
    
    return (
        <div className=" h-screen w-screen bg-[#D9D9D9]">
            <div className="flex flex-col w-[130px] h-[95px] absolute bottom-0 left-1/2 transform -translate-x-1/2 text-third justify-center items-center rotate-[270deg]" onClick={ClickOnGetHome}>
                <FontAwesomeIcon icon={faPlay} className="cursor-pointer w-[50px] h-[35px] rotate-[180deg] text-fourth" />
            </div>

            <div> 
                <div className="w-screen flex odibee-sans text-primary text-[64px] justify-center">My Path</div>
            </div>
            <div className='flex justify-center h-[50%]'>
                <TreePathView visible={props.visible ? props.visible : false}/>
            </div>  
        </div>
    )
}