import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import SkillsView from '../../components/SkillsView';
import PythonImage from '../../assets/Images/Skills/python.png'
import ReactImage from '../../assets/Images/Skills/react.png'
import CSharpImage from '../../assets/Images/Skills/c-sharp.png'
import SQLImage from '../../assets/Images/Skills/sql.png'
import GitImage from '../../assets/Images/Skills/git.png'
import OtherImage from '../../assets/Images/Skills/other.png'
import NodeJsImage from '../../assets/Images/Skills/nodejs.png'
import MLImage from '../../assets/Images/Skills/ml.png'


export default function IndexSkillsFrame(props: InterfaceFrame) {
    const ClickOnGetHome = () => {
        props.goBack('left')
    }

    let SkillsData = [
        {
            skills: 'Python',
            description: 'Django, FastAPI, Pytest e SQLAlchemy, ',
            image: PythonImage,
            percentage: 0.9,
        },
        {
            skills: 'Machine Learning',
            description: 'Pytorch, Scikit-Learn, NLTK, Pandas and Numpy',
            image: MLImage,
            percentage: 0.70
        },,
        {
            skills: 'React',
            description: 'Typescript, Javascript, TailwindCSS and Vite',
            image: ReactImage,
            percentage: 0.70
        },
        {
            skills: 'C#',
            description: '.NET Framework, MVC and Entity Framework',
            image: CSharpImage,
            percentage: 0.65
        },
        {
            skills: 'Node.js',
            description: 'Typescript, JavaScript, Express.js and Axios',
            image: NodeJsImage,
            percentage: 0.65
        },
        {
            skills: 'Databases',
            description: 'SQL, Postgres, SQL Server and Oracle DB',
            image: SQLImage,
            percentage: 0.85
        },
        {
            skills: 'Git and Docker',
            description: 'CI/CD, Docker Images and Compose',
            image: GitImage,
            percentage: 0.60
        },
        {
            skills: 'Other',
            description: 'C++, C, Matlab, Three.js, etc',
            image: OtherImage,
            percentage: 0.50
        },
    ]
    return (
        <div className=" h-screen w-screen bg-[#A6A6A6]">
            <div className="flex flex-col w-[130px] h-[95px] absolute right-0 top-1/2 transform -translate-y-1/2 text-third justify-center items-center rotate-[270deg]" onClick={ClickOnGetHome}>
                <FontAwesomeIcon icon={faPlay} className="cursor-pointer w-[50px] h-[35px] rotate-[90deg] text-fourth" />
            </div>
            <div>
                <div className="w-screen flex odibee-sans text-primary text-[64px] justify-center">Skills</div>
            </div>
            <div className='max-[1000px]:mx-[0px] h-[700px] mx-[100px] my-[50px] grid grid-rows-4 grid-cols-2 max-[1000px]:h-[100%] max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:overflow-scroll'>
            {
                SkillsData.map(item => {
                    if (item) {
                        return (
                            <div className='flex justify-center' key={item.skills}>
                                <SkillsView 
                                    skill={item.skills}
                                    description={item.description}
                                    image={item.image}
                                    percentage={item.percentage}
                                    loading={props.visible ? props.visible : false}
                                /> 
                            </div>
                        )
                    }
                    return null;
                })
            }    
            </div>
        </div>
    )
}