import euImage from "/eu.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import IndexSkillsFrame from "./pages/SkillsFrame";
import PathFrame from "./pages/PathFrame";
import ContactCVFrame from "./pages/ContactCVFrame";
import ProjectsFrame from "./pages/ProjectsFrame";

function App() {

  const [isVisibleSkillsComponent, setIsVisibleSkillsComponet] = useState(false);
  const [isVisibleSkillsComponentBack, setIsVisibleSkillsComponetBack] = useState(false);

  const [isVisibleProjectsComponent, setIsVisibleProjectsComponet] = useState(false);
  const [isVisibleProjectsComponentBack, setIsVisibleProjectsComponetBack] = useState(false);

  const [isVisiblePathComponent, setIsVisiblePathComponet] = useState(false);
  const [isVisiblePathComponentBack, setIsVisiblePathComponetBack] = useState(false);

  const [isVisibleContactCVComponent, setIsVisibleContactCVComponet] = useState(false);
  const [isVisibleContactComponentBack, setIsVisibleContactCVComponetBack] = useState(false);


  const ClickOnSkillsFrame = () => {
    setIsVisibleSkillsComponet(true)
    setIsVisibleSkillsComponetBack(false);
    
  }
  const ClickOnProjectsFrame = () => {
    setIsVisibleProjectsComponet(true)
    setIsVisibleProjectsComponetBack(false);
  }
  const ClickOnPathFrame = () => {
    setIsVisiblePathComponet(true)
    setIsVisiblePathComponetBack(false)
  }
  const ClickOnCVContactFrame = () => {
    setIsVisibleContactCVComponet(true)
    setIsVisibleContactCVComponetBack(false)
  }


  const goBackSkills = (param:string) => {
    if(param == 'left'){
      setIsVisibleSkillsComponetBack(true);
      setIsVisibleSkillsComponet(false);
    }
    if(param == "up"){
      setIsVisiblePathComponetBack(true);
      setIsVisiblePathComponet(false);
    }
    if(param == "down"){
      setIsVisibleProjectsComponetBack(true);
      setIsVisibleProjectsComponet(false);
    }
    if(param == "right"){
      setIsVisibleContactCVComponetBack(true);
      setIsVisibleContactCVComponet(false);
    }
    
  }

  return (
    <div className="h-full w-full background-image flex justify-center">
      <div className={`absolute ${isVisibleSkillsComponentBack ? 'fade-out-left' : ''}
                        ${isVisibleSkillsComponent ? 'fade-in-left' : `${!isVisibleSkillsComponentBack ? 'translate-x-[-100%]' : ''}`} z-10`}>
        {<IndexSkillsFrame goBack={goBackSkills} visible={isVisibleSkillsComponent}/>}
      </div>
      <div className={`absolute ${isVisibleProjectsComponentBack ? 'absolute fade-out-top' : 'absolute'}
                        ${isVisibleProjectsComponent ? 'absolute fade-in-top' : `${!isVisibleProjectsComponentBack ? ' translate-x-[-100%]' : ''}`} z-10`}>
        {<ProjectsFrame goBack={goBackSkills}/>}
      </div>
      <div className={`absolute ${isVisiblePathComponentBack ? 'fade-out-bot' : ''}
                        ${isVisiblePathComponent ? 'fade-in-bot' : `${!isVisiblePathComponentBack ? 'translate-x-[-100%]' : ''}`} z-10`}>
        {<PathFrame goBack={goBackSkills} visible={isVisiblePathComponent}/>}
      </div>
      <div className={`absolute ${isVisibleContactComponentBack ? 'fade-out-right' : ''}
                        ${isVisibleContactCVComponent ? 'fade-in-right' : `${!isVisibleContactComponentBack ? 'translate-x-[-100%]' : ''}`} z-10`}>
        {<ContactCVFrame goBack={goBackSkills}/>}
      </div>
      <div className="absolute h-screen w-screen flex justify-screen items-start z-0">
        <div className="flex flex-col w-[130px] h-[95px] absolute top-0 left-1/2 transform -translate-x-1/2 text-third justify-center items-center" onClick={ClickOnPathFrame}>
          <FontAwesomeIcon icon={faPlay} className="cursor-pointer w-[50px] h-[35px] rotate-[270deg] text-[#D9D9D9]"/>
          <div className="mont-real-font text-[16px] m-[5px]">My journey</div>
        </div>
        <div className="flex flex-col w-[130px] h-[95px] absolute bottom-0 left-1/2 transform -translate-x-1/2 text-third justify-center items-center" onClick={ClickOnProjectsFrame}>  
          <div className="mont-real-font text-[16px] m-[5px]">Projects</div>
          <FontAwesomeIcon icon={faPlay} className="cursor-pointer w-[50px] h-[35px] rotate-[90deg] text-[#D9D9D9]"/>
        </div>
        <div className="flex flex-col w-[130px] h-[95px] absolute right-0 top-1/2 transform -translate-y-1/2 text-third justify-center items-center rotate-[270deg]" onClick={ClickOnCVContactFrame}>  
          <div className="mont-real-font text-[16px] m-[5px]">Contact & CV</div>
          <FontAwesomeIcon icon={faPlay} className="cursor-pointer w-[50px] h-[35px] rotate-[90deg] text-[#D9D9D9]"/>
        </div>
        <div className="flex flex-col w-[130px] h-[95px] absolute left-0 top-1/2 transform -translate-y-1/2 text-third justify-center items-center rotate-[90deg]" onClick={ClickOnSkillsFrame}>  
          <div className="mont-real-font text-[16px] m-[5px]">Skills</div>
          <FontAwesomeIcon icon={faPlay} className="cursor-pointer w-[50px] h-[35px] rotate-[90deg] text-[#D9D9D9]"/>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex w-[40%] justify-end max-[1000px]:hidden">
          <img className="img-me rounded-[60%] mr-[30px] border-[2px] border-black " src={euImage} />
        </div>
        <div className="max-[1000px]:m-[100px]">
          <div className="mont-real-font bolder text-[50px] text-third">
            Hi! Welcome to my website!!
          </div>
          <div className="w-[90%] roboto-condensed-font text-[25px] text-third">
              I'm Francisco Conceição, a passionate software developer with a passion for creating innovative and efficient software solutions.
              <br/>
              Browse through my portfolio to see my lastest projects and more about my academic and professional journey. 
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
