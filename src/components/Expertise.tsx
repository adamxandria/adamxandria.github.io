import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faLinux } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman", 
    "Firebase",
    "MySQL",
    "Nodejs",
    "Docker",
    "Git",
    "Git Actions"
];

const labelsSecond = [
    "Python",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "TensorFlow",
    "Keras",
    "Hugging Face",
    "PyTorch",
    "OpenCV",
    "OpenAI",
    "LangChain",
    "Streamlit",
    "Groq",
    "LlamaIndex",
];

const labelsThird = [
    "Kali Linux",
    "Wireshark",
    "Burp Suite",
    "Metasploit",
    "Splunk",
    "Elastic Stack",
    "Nmap",
    "OWASP ZAP",
    "Python (for automation)",
    "Bash scripting",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="icon-container">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    </div>
                    <h3>Full Stack, DevOps & Automation </h3>
                    <p>I have built modern web applications using React and Flask, specializing in both frontend and backend development. Proficient in the SDLC process, I excel at setting up CI/CD pipelines, DevOps testing, and automating deployments to deliver robust, scalable applications that ensure smooth and efficient launches.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faPython} size="3x"/>

                    
                    <h3>Machine Learning, GenAI & LLM</h3>
                    <p>I develop machine learning models and Generative AI solutions, with expertise in supervised and unsupervised learning, NLP, and deep learning. I work with popular frameworks like TensorFlow, PyTorch, and Hugging Face to create intelligent systems that solve real-world problems efficiently and at scale.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLinux} size="3x"/>

                    <h3>Cyber Security</h3>
                    <p>I secure systems and data through malware analysis, network security, and digital forensics. With experience in threat detection, vulnerability assessments, and implementing defense mechanisms, I ensure critical systems remain protected. Proficient with tools like Kali Linux, Wireshark, and Splunk.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;