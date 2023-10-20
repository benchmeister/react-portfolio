import projectOne from '../assets/project-1.png';
import projectTwo from '../assets/project-2.png';
import projectThree from '../assets/project-3.png';

const projects = {
    1: {
      title: "NetMovers - Threat Hunting & Intelligence",
      image: projectOne,
      description: (
        <>
          <p>
          Working with Cyber Youth Singapore as a Final Year Project in Singapore Polytechnic. Developed an infrastructure capable of capturing TTPs of threat actors. Provided complete threat assessment and analysis of captured TTPs thereafter.
          
          </p>
          <p>
          Primarily deployed on an AWS Cloud Infrastructure.
          </p>
        </>
      ),
      github: "https://github.com/benchmeister/NetMovers-FYP",
      demo: "https://github.com/benchmeister/NetMovers-FYP",
    },
    2: {
      title: "Vulnerability Scanning on Metasploitable 2",
      image: projectTwo,
      description: (
        <>
          <p>
            Provided a comprehensive writeup on Vulnerability Assessment of Linux Machine, Metasploitable 2.
          </p>
        </>
      ),
      github: "https://github.com/benchmeister",
      demo: "https://github.com/benchmeister",
    },
    3: {
      title: "Web Development Stack",
      image: projectThree,
      description: (
        <>
          <p>
          Developed a full-stack web infrastructure, utilising NodeJS, MySQL Database, JavaScript, and frontend elements HTML, CSS, Bootstrap.

          JWT Tokens and HTML DOM Programming have been used as well.
          </p>
        </>
      ),
      github: "https://github.com/benchmeister",
      demo: "https://github.com/benchmeister",
    },
  };
  
  export default projects;
  


