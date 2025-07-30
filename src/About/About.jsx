import "./About.css";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, faNodeJs, faJs, faGitAlt, faGithub, faPython 
} from "@fortawesome/free-brands-svg-icons";
import '../assets/Coder.jpg';
import { 
  faDatabase, faLaptopCode, faCode, faCogs, faServer, faCloud 
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "React", icon: faReact }, // Frontend framework
  { name: "Node.js", icon: faNodeJs }, // Backend runtime
  { name: "Express", icon: faNodeJs }, // Shares Node.js icon
  { name: "MongoDB", icon: faDatabase }, // NoSQL database
  { name: "PostgreSQL", icon: faDatabase }, // SQL database
  { name: "C++", icon: faCode }, // Programming language
  { name: "JavaScript", icon: faJs }, // Frontend & backend language
  { name: "TypeScript", icon: faJs }, // TypeScript (shares JS icon)
  { name: "Python", icon: faPython }, // Python programming language
  { name: "C#", icon: faCode }, // C# language
  { name: ".NET", icon: faLaptopCode }, // .NET framework
  { name: "Blazor", icon: faLaptopCode }, // Blazor UI framework
  { name: "MVC", icon: faCogs }, // MVC architecture
  { name: "Entity Framework", icon: faDatabase }, // ORM for .NET
  { name: "SQL", icon: faDatabase }, // SQL database management
  { name: "REST APIs", icon: faServer }, // API development
  { name: "Azure", icon: faCloud }, // Cloud computing
  { name: "Git", icon: faGitAlt }, // Version control system
  { name: "GitHub", icon: faGithub }, // GitHub hosting service
  { name: "Visual Studio", icon: faLaptopCode }, // Development environment
];



const h2variant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
  }
} 

const pvariant ={
  hidden:{opacity:0,
          x:-100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
}

const imgvariant ={
  hidden:{opacity:0,
          x:100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
}

function About() {
  return (
    <div>
      <div className="About">
        <div>
          <motion.h2  initial="hidden" animate="visible" variants={h2variant}>💼 Why You Should Hire Me</motion.h2>
          <motion.p className="intro-para" variants={pvariant} initial="hidden" animate="show">

          I bring a strong foundation in full-stack development with React, JavaScript, and .NET, backed by hands-on experience building scalable, user-focused solutions. My strength lies not just in writing clean, efficient code—but in debugging, learning fast, and pushing through challenges until the job's done right.

          What sets me apart? A constant hunger to improve. I don’t just solve problems—I refine, optimize, and evolve. Whether it’s architecting seamless frontend experiences or integrating solid backend logic, I bring technical agility and a detail-driven mindset to everything I build.

          “Hire for attitude, train for skill”—fortunately, I bring both. 💻⚡✨
          </motion.p>
        </div>
        <motion.div variants={imgvariant} initial="hidden" animate="show">
          <img src="coder.jpg" alt="coder" />
        </motion.div>
      </div>
      <div>
        <motion.div
          className="skills-marquee"
          animate={{ x: ["5%", "-100%"] }}
          transition={{ repeat: Infinity, repeatType:"loop",duration: 8, ease: "linear" }}
        >
          <div className="skills-wrapper">
            {skills.concat(skills).map((skill, index) => (
              <span key={index} className="skill-item">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />{" "}
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
