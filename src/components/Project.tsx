import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
import EnterpriseNetwork from '../assets/images/EnterpriseNetwork.png';
import NutriForge from '../assets/images/NutriForge.png';
import RouteSav from '../assets/images/RouteSav.png';
import KiddyCCTV from '../assets/images/KiddyCCTVapp.png';
import TicketingHuat from '../assets/images/TicketingHuat.png';
import NetBot from '../assets/images/NetBot.png';
import ForensicSecureUSB from '../assets/images/ForensicSecureUSB.png';
import ITP from '../assets/images/ITP.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/adamxandria/ForensicSecureUSB" target="_blank" rel="noreferrer"><img src={ForensicSecureUSB} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adamxandria/ForensicSecureUSB" target="_blank" rel="noreferrer"><h2>Forensic Secure USB</h2></a>
                <p>Developed a secure forensic USB solution that enhances the Chain of Custody (CoC) for digital evidence. Leveraging a Raspberry Pi Zero 2 W, the device uses HID scripting and mass storage functionality to 
                securely fingerprint host computers, log interactions, and monitor evidence file integrity in real-time. Key features include tamper-proof logging, cross-platform compatibility, and encrypted data transmission using WebSocket servers. 
                This innovative tool ensures the confidentiality, integrity, 
                and availability of digital evidence, redefining the standards for secure evidence handling in forensic investigations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/adamxandria/ITP2" target="_blank" rel="noreferrer"><img src={ITP} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adamxandria/ITP2" target="_blank" rel="noreferrer"><h2>Facial Detection and Deepfake Analysis</h2></a>
                <p>Collaborated with A*STAR to design and enhance a comprehensive facial extraction and deepfake detection pipeline. The project involved developing a multi-face detection system capable of detecting, cropping, and recognizing multiple faces in video frames with high accuracy. 
                    Additionally, the team evaluated 15 Generative AI tools to produce high-quality deepfake datasets, enabling the client to train and test advanced detection models. This solution not only improved data preprocessing for deepfake analysis but also delivered actionable insights 
                    to refine the client's detection capabilities.</p>
            </div>
            <div className="project">
                <a href="https://github.com/adamxandria/NetBot" target="_blank" rel="noreferrer"><img src={NetBot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adamxandria/NetBot" target="_blank" rel="noreferrer"><h2>NetBot</h2></a>
                <p>Developed an AI-powered system for network anomaly detection and cybersecurity insights, integrating machine learning and natural language processing. NetBot combines an Isolation Forest-based anomaly detection model with a chatbot interface powered by the Gemini model. 
                    This dual-component solution analyzes network logs to identify potential threats such as DDoS attacks and explains them in a user-friendly way. Designed for accessibility, NetBot empowers non-cybersecurity professionals to understand and respond to network anomalies effectively. 
                    The chatbot interface, built with Gradio, simplifies user interactions and enhances cybersecurity awareness.</p>
            </div>
            <div className="project">
                <a href="https://github.com/adamxandria/TicketingHuat" target="_blank" rel="noreferrer"><img src={TicketingHuat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adamxandria/TicketingHuat" target="_blank" rel="noreferrer"><h2>TicketingHuat</h2></a>
                <p>TicketingHuat is a secure, feature-rich platform I developed for distributing and managing tickets to events such as concerts and conventions. 
                    To handle high-demand scenarios, it incorporates a virtual queue system and automatic seat assignment, ensuring fair access and real-time updates during peak times. The platform integrates seamlessly with Stripe for secure payment processing, safeguarding user transactions. It also allows authenticated users to transfer tickets within the system, maintaining authenticity and preventing fraud. Administrators benefit from a dedicated dashboard to create, edit, and monitor events and manage user accounts. Emphasizing robust security measures, TicketingHuat includes multi-factor authentication, role-based access control, and secure session management, providing a safe and seamless experience for both users and event organizers. The development process leveraged a robust CI/CD pipeline using Jenkins, automating testing, building, and deployment processes. This ensured consistent quality, with integrated OWASP Dependency Checks and SonarQube scans identifying and resolving vulnerabilities early in the development lifecycle. 
                    By streamlining deployments and maintaining high standards of security and performance, Jenkins played a pivotal role in the project’s success.</p>
            </div>
            <div className="project">
                <a href="https://github.com/adamxandria/KiddyCCTVApp" target="_blank" rel="noreferrer"><img src={KiddyCCTV} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adamxandria/KiddyCCTVApp" target="_blank" rel="noreferrer"><h2>KiddyCCTV App</h2></a>
                <p>KiddyCCTV is a comprehensive Android mobile application that I developed using Java and Android Studio. Designed for nursery school environments, the app facilitates seamless communication between principals, teachers, and parents. Key features include real-time updates on children’s activities, 
                    secure messaging for both one-on-one and group conversations, and user-friendly interfaces tailored to different roles. The app integrates Firebase for real-time database management and secure data storage, ensuring robust performance and data integrity. Additionally, the project incorporated advanced obfuscation techniques using ProGuard and R8 to protect the app from reverse engineering, 
                    demonstrating proficiency in mobile application security. </p>
            </div>
            <div className="project">
                <a href="https://github.com/adamxandria/RouteSav" target="_blank" rel="noreferrer"><img src={RouteSav} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adamxandria/RouteSav" target="_blank" rel="noreferrer"><h2>RouteSav</h2></a>
                <p>RouteSav is a real-time route optimization tool I developed to enhance urban navigation, specifically designed for tourist bus operations in Singapore. Built using Python and PyQt5, the application integrates geospatial data from OpenStreetMap and real-time traffic updates from the LTA Datamall API. It employs advanced algorithms, including Dijkstra’s algorithm, to compute the fastest and most cost-effective routes while accounting for factors like electronic road pricing (ERP) charges, fuel consumption, and traffic incidents. The application features a user-friendly desktop interface that allows seamless route planning and visualizes optimized paths using Plotly. By leveraging data preprocessing, dynamic traffic analysis, and route comparison, 
                    RouteSav ensures efficient navigation, reducing operational costs and enhancing the travel experience for both operators and users. </p>
            </div>
            <div className="project">
                <a href="https://github.com/adamxandria/NutriForge" target="_blank" rel="noreferrer"><img src={NutriForge} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adamxandria/NutriForge" target="_blank" rel="noreferrer"><h2>NutriForge</h2></a>
                <p>NutriForge is a 2D educational game designed to teach children aged 4 to 7 about healthy eating habits in a fun and engaging way. Developed using the Java Programming Language and the LibGDX framework, the game leverages Object-Oriented Programming (OOP) principles to ensure scalability and maintainability. Players navigate the game by collecting healthy food, avoiding unhealthy food and obstacles, and earning points, with dynamic scoring bonuses for special items. The game features a custom-built game engine with reusable components for collision detection, input-output management, and seamless state transitions. Designed with cross-platform compatibility, NutriForge dynamically scales its user interface across various devices, providing an enjoyable experience regardless of screen resolution. By combining interactive gameplay with visually appealing graphics, NutriForge not only 
                    promotes health awareness among young children but also serves as a foundation for future game development projects using its modular and reusable architecture.</p>
            </div>
            <div className="project">
                <a href="https://github.com/adamxandria/Designed--Defend-and-Attack-an-Enterprise-Network" target="_blank" rel="noreferrer"><img src={EnterpriseNetwork} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/adamxandria/Designed--Defend-and-Attack-an-Enterprise-Network" target="_blank" rel="noreferrer"><h2>Designed, Defend and Attack an Enterprise Network</h2></a>
                <p>This project focused on designing, defending, and attacking a secure enterprise network for the National Gallery Singapore. The solution involved implementing a robust network topology using Cisco devices, including routers, switches, and firewalls, to create a high-availability and scalable architecture. Key security measures such as TACACS+ for AAA management, port security, ACLs, and dynamic ARP inspection were integrated to enhance network defenses. Additional features like SNMP monitoring, Syslog for centralized logging, and Snort for intrusion detection ensured comprehensive protection against network threats. The implementation also incorporated best practices such as VLAN segmentation, NAT on firewalls, and high-availability configurations through port-channeling. This project highlights the integration of advanced network security protocols to protect critical infrastructure while providing efficient and secure communication channels across the enterprise.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;