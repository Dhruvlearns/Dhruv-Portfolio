import './History.css'
import React from "react";
import {motion} from "framer-motion";

const historySecVar = {
        hidden : {opacity:0},
        show : {
            opacity:1,
            transition :{
                staggerChildren : 0.5,
                delay:0.2
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

const pvariant ={
    hidden:{opacity:0,
            x:-100
    },
    show:{opacity:1,
        x:0,
        ease:"easeOut",
    }
} 

function History(){
    
    return(
    <div className="about">
        <div className="Certificates">

            <motion.h2 className='intro' initial="hidden" animate="visible" variants={h2variant}>Lessons, Logs & Launchpads — My College Achievements</motion.h2>
            <motion.section variants={historySecVar} initial="hidden" //the children just inherit this properties
            animate="show" className="history" >
            <div className="Degree">
             {/* 1. B.Tech */}
                <motion.p variants={pvariant}>
                Bachelor of Information Technology (AI & Robotics)
                <p className='title'>Madhav Institute Of Technology and Science</p>
                <span className='dates'>2021-2025</span>
                </motion.p>
             </div>
 
            <h1> Certificates</h1>
            
             {/* 3. Hackathon */}
                <motion.p variants={pvariant}>
                Participated in AceHack 3.0  
               | 24-hour In-Person Hackathon, Jaipur
                <p className='title'>Certificate</p>
                <span className='dates'>2024-2025</span>
                </motion.p>
             {/* 4. freecodecamp */}
                <motion.p variants={pvariant}>
                Responsive Web design | Freecodecamp
                <a href="https://www.freecodecamp.org/certification/fccc8083ada-2d1e-425f-822a-55ea6b79b789/responsive-web-design"target="_blank"rel="noopener noreferrer">
                <p className='title'>Certificate</p></a>
                <span className='dates'>2023</span>
                </motion.p>
             {/* 5. Leetcode*/}
                <motion.p variants={pvariant}>
                Solved 180+ DSA Questions | Leetcode
                <a href="https://leetcode.com/u/dhruv_alearner/"target="_blank"rel="noopener noreferrer"><p className='title'>profile</p></a>
                <span className='dates'>2024-present</span>
                </motion.p>
             {/* 6. Udemy*/}
                <motion.p variants={pvariant}>
               JavaScript for Beginners |  Udemy
                <a href="http://ude.my/UC-c2ada55f-a5e5-486d-9cb2-ced6768afecc"target="_blank"rel="noopener noreferrer"><p className='title'>Certificate</p></a>
                <span className='dates'>2023-2024</span>
                </motion.p>
             {/* 7. 5-Start in C++ */}
                <motion.p variants={pvariant}>
                5-star Rating in  C++ | HackerRank
                <p className='title'>Link</p>
                <span className='dates'>2021-2022</span>
                </motion.p>
            </motion.section>
        </div>

        <div className='Experience'>
       {/* Experience   */}
            <h1> Experience</h1>
           
            <motion.section variants={historySecVar} initial="hidden" //the children just inherit this properties
            animate="show" className="history">

            {/*  1.symtrax internship */}
               <motion.p variants={pvariant}>
                    Software Developer Intern | Symtrax Software Pvt. Ltd.
                    {/* need to add link of all 3 certficates*/}
                    <p className="title">Certificate</p> 
                    <span className="dates">Feb 2025 - june 2025</span>
                       {/* tech stack used */}
                    {/* description on hover */}
               </motion.p>

              {/* 2. tractorgyan */}
              <motion.p variants={pvariant}>
                Frontend Developer Intern | TractorGyan
                <p className="title">Certificate</p>
                <span className='dates'>June 2024-Aug 2024</span>
                   {/* tech stack used */}
                    {/* description on hover */}
            </motion.p>

            {/* 3. mygov */}
            <motion.p variants={pvariant}>
                Creative Department Intern | MyGov
                <p className='title'>Certificate</p>
                <span className='dates'> april 2022 -july 2022</span>
                   {/* tech stack used */}
                    {/* description on hover */}
            </motion.p>

            </motion.section>
           
        </div>

     </div>
    );
}

export default History;