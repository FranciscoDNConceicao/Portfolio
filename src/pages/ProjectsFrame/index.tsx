import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import ProjectsView from '../../components/ProjectsView';
import qbo1 from '../../assets/Images/QBO-Project-1.png';
import qbo2 from '../../assets/Images/QBO-Project-2.png';
import stockfinance from '../../assets/Images/StockFinance-project.png';
import thegaminghourVideo from '../../assets/Images/TheGammingHour-Project.mp4';

export default function ProjectsFrame(props: InterfaceFrame) {
    const ClickOnGetHome = () => {
        props.goBack('down')
    }
    return (
        <div className="h-screen w-screen bg-[#404040]">
            <div className="flex flex-col w-[130px] h-[95px] absolute top-0 left-1/2 transform -translate-x-1/2 text-third justify-center items-center rotate-[270deg]" onClick={ClickOnGetHome}>
                <FontAwesomeIcon icon={faPlay} className="cursor-pointer w-[50px] h-[35px] rotate-[0deg] text-fifth" />
            </div>

            <div className='h-screen'> 
                <div className="pt-[100px] w-screen flex odibee-sans text-third text-[64px] justify-center ">Projects</div>
                <div className='w-full flex flex-row justify-center max-[1000px]:flex-col max-[1000px]:overflow-scroll'>
                    <div className='m-[20px]'>
                        <div className='flex'>
                            <img src={qbo1} className='max-w-[310px] max-h-[310px]'/>
                        
                            <img src={qbo2} className='ml-[40px] max-w-[270px] max-h-[310px]'/>
                        </div>
                        <ProjectsView 
                            title='Robot Q.BO using Face Recognition and Detection'
                            desc="In this project I used the robot Q.Bo One to identify and recognize people in its field of vision, controlling the robot using servos to move the robot's head. The LPBH algorithm provided by OpenCV was used for facial recognition."
                            tags={['Python', 'Linux', 'OpenCV']}
                            link="https://github.com/FranciscoDNConceicao/Robot-QBO-using-Face-Recognition"
                        />
                    </div>
                    <div className='m-[20px]'>
                        <div className=''>
                            <img src={stockfinance} className='w-[580px] h-[310px]' />
                        </div>
                        <ProjectsView 
                            title='Stock Finance WebApp'
                            desc="Application for viewing, buying and selling stock markets, company information, and news. Application developed in React with TypeScript and various frameworks; Server in Python with FastAPI and SQLAlchemy with a PostgreSQL database."
                            tags={['Python', 'FastAPI', 'React', 'Typescript']}
                            link="https://github.com/FranciscoDNConceicao/Stock-Finance.git"
                        />
                    </div>
                    <div className='m-[20px]'>
                        <div className="media-project flex justify-center align-middle">
                            <video controls autoPlay className='w-[580px]'>
                                <source src={thegaminghourVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>                        
                        <ProjectsView 
                            title='The Gamming Hour'
                            desc="Web Application provide users with a sales portal of games, where the user can consult game information(Name, Photo, Console, Category, Producer, etc.). Customers can search for games by console, category, edit list of preferred categories, consult the games you have purchased, etc."
                            tags={['C#', 'ASP.NET']}
                            link="https://github.com/FranciscoDNConceicao/TheGammingHour"
                        />
                    </div>
                    
                </div>
                <div className='relative w-screen h-screen z-20'>
                    <div className='roboto text-[#A6A6A6] font-bold absolute right-14 mt-[90px]'>This website was built in React!!</div>
                </div>
                
            </div>

        </div>
    )
}