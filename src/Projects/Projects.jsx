import './Projects.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faCode, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";

const projectSecVar = {
  hidden : {opacity:0},
  visible: {
      opacity:1,
      transition :{
          staggerChildren : 0.5,
          delay :0.2
      }
  },
}

const h2variant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
  }
} 

function Projects() {
  return (
    <div className="projects">
      <motion.h2 className='intro' initial="hidden" animate="visible" variants={h2variant}>Projects I have worked on.</motion.h2>
      <motion.section initial="hidden" animate="visible" variants={projectSecVar}>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank"><h2>StudySphere</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon"/>
           An innovative web platform designed as a one-stop destination for college students
           The platform features an  <b> AI-powered chatbot </b> to provide instant support and personalized recommendations
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            MERN stack
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2024
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://dhruvlearns.github.io/StudySphere/" target="_blank" rel="noopener noreferrer"
            > Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank"><h2>Happyfy</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
          An online therapy platform , featuring chatbot functionality and
          ambient sound integration . Enhanced user well-being through an intuitive, relaxing interface offering
           emotional support . 
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
          React.js , Tailwind , Chipp , Javascript
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2024
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/Dhruvlearns/Happyfy" target="_blank" rel="noopener noreferrer"
          > Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank"><h2>Password-Generator</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
          The generator creates unique passwords based on user preferences regarding length, complexity, and special characters. Integrated with Chrome for seamless user experience.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
          HTML ,CSS ,JavaScript
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2023
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://dhruvlearns.github.io/PassWord-Generator/" target="_blank" rel="noopener noreferrer"
          > Live Link</a>
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Projects;


// const containerRef = useRef(null);
//   const inView = useInView(containerRef,{once:true});
//   const mainControls = useAnimation()

//   const {scrollYProgress} = useScroll({
//     target:containerRef,
//     offset:["start end","end end"]
//   })
  
  // const textVal = useTransform(
  //     scrollYProgress,
  //     [0,1],
  //     [-"100%","0%"]
  // )

  // useEffect(()=>{
  //   if(inView){
  //     mainControls.start("visible")
  //   }
  // },[inView, mainControls])