import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import pdf from '../../assets/CV.pdf'
import gmailLogo from '../../assets/Images/gmail.png'
import linkedingLogo from '../../assets/Images/linkedin.png'
import githubLogo  from '../../assets/Images/github.png'

export default function ContactCVFrame(props: InterfaceFrame) {
    const ClickOnGetHome = () => {
        props.goBack('right')
    }
    return (
        <div className="flex flex-row h-screen w-screen bg-[#A6A6A6]">
            <div className="flex flex-col w-[130px] h-[95px] absolute left-0 top-1/2 transform -translate-y-1/2 text-third justify-center items-center rotate-[270deg]" onClick={ClickOnGetHome}>
                <FontAwesomeIcon icon={faPlay} className="cursor-pointer w-[50px] h-[35px] rotate-[270deg] text-fourth" />
            </div>
            <div className="flex flex-col w-[50%] h-screen bg-[#8C8C8C]">
                <div className="w-full flex odibee-sans text-primary text-[64px] justify-center">Curriculum</div>
                <div className='h-full flex justify-center'>
                    <object data={pdf} type="application/pdf" width="75%" height="95%" >
                        <p>Alternative text - include a link <a href={pdf}>to the PDF!</a></p>
                    </object>
                </div>
                
            </div>
            <div className="flex flex-col w-[50%]  h-screen bg-[#A6A6A6]">
                <div>
                    <div className="w-full flex odibee-sans text-primary text-[64px] justify-center">About me</div>
                    <div className='flex justify-center '>
                        <div className='triangle translate-y-[-43px] rotate-[-58deg]'></div>
                        <div className='bg-[#262626] roboto text-[#A6A6A6] rounded-[17px] p-[10px] text-[18px] w-[713px]'>
                            <div className='p-[20px]'>
                                Ever since I can remember, I've been fascinated by technology and its potential to solve real-world problems. This fascination led me to pursue a degree in Computer Engineering from Universidade de Trás-os-Montes e Alto Douro, where I honed my skills and cultivated my love for coding.
                                <br/><br/>
                                I thrive on continuos learning and enjoy delving into new ideas, concepts and technologies. Whether it's experimenting with a new programming language, exploring the latest frameworks, or solving complex algorithms, I find joy in every challenge. My inquisitive nature drives me to understand the underlying principles and mechanics of the tools and technologies I work with.
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center align-middle'>
                    <div className="w-full flex odibee-sans text-primary text-[64px] justify-center mt-[100px]">Contacts</div>
                    <div className='flex flex-col justify-center roboto-condensed-font text-[20px]'>
            
                        <div className='flex flex-row align-middle items-center justify-center'>
                            <div className='h-[50px] w-[50px] mr-[20px] ml-[100px]'><img src={linkedingLogo}/></div>
                            <a className='w-full hover:underline cursor-pointer' href="https://www.linkedin.com/in/francisco-concei%C3%A7%C3%A3o-a63562198/">linkedin.com/in/franciscoconceicao14/</a>
                        </div>
                        <div className='flex flex-row align-middle items-center justify-center'>
                            <div className='h-[50px] w-[50px] mr-[20px] ml-[100px]'><img src={githubLogo}/></div>
                            <a className='w-full hover:underline cursor-pointer'href="https://github.com/FranciscoDNConceicao">github.com/FranciscoDNConceicao</a>
                        </div>
                        <div className='flex flex-row align-middle items-center justify-center'> 
                            <div className='h-[50px] w-[50px] mr-[20px] ml-[100px]'><img src={gmailLogo}/></div>
                            <a className='w-full hover:underline cursor-pointer'  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDlgqjdngjxgDVmTQBdmGnMgNRMzBtsKsBgslwPKXwnTmBHhvhwxFxQwVdpXPgBXcshbq">franciscodnconceicao@gmail.com</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}