import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';

const labelsFirst = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java", 
    "SQL",
    "C"


    // "React",
    // "TypeScript",
    // "JavaScript",
    // "HTML5",
    // "CSS3",
    // "SASS",
    // "Flask",
    // "Python",
    // "SQL",
    // "PostgreSQL",
    // "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function About() {
    return (
    <div className="container" id="about">
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-grid">
                <div className="about-content">
                    {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
                    <p>Hi! I'm <strong>Adam</strong>, a final-year Information Security student at the Singapore Institute of Technology, 
                    graduating in April 2026. I’m interested in the intersection of AI, data analytics, and cybersecurity, 
                    and how these can be applied to solve real-world problems.
                    </p>
                    
                    <p>I have experience working with security data, building machine learning models, 
                        and developing automation solutions to support analysis and decision-making. 
                        My work includes projects in anomaly detection, deepfake analysis, and SIEM-based log analysis.
                    </p>

                    <p>Through both academic and industry experience, 
                        I have developed strong problem-solving and analytical skills, 
                        with hands-on exposure to tools such as Elastic, Python, and machine learning frameworks.
                    </p>

                    <p>
                    I am motivated to continuously learn and apply new technologies to build practical and impactful solutions.
                    </p>

                    {/* <div className="flex-chips">
                        <span className="chip-title">Programming languages:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                </div>

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
}

export default About;