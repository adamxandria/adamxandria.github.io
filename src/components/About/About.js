import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/profile.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Fiqri Adam</strong>. I'm currently a Penultimate Information and Communication Technology Majoring in Information Security Undergraduate at the Singapore Insititute of Technology(SIT). 
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I'm passionate about Full stack Development and Machine Learning.  I've completed modules including Secure Software Development, Machine Learning, Mobile Security, Web Security,  Integrative Team Project and Applied Cryptography
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            My true passion lies in the art of building websites and apps, where I immerse myself in the creative process of crafting personalized digital experiences. I’m committed to delivering the best possible user interactions, ensuring that every detail enhances the user’s journey. Alongside this, I’m deeply passionate about machine learning—exploring its potential to create intelligent systems that can learn, adapt, and improve over time.              
            
            </ScrollAnimation>

            <br /><br />


            <ScrollAnimation animateIn="fadeInLeft">
            As I continue to grow and evolve in the tech world, I’m eager to take on new challenges and contribute to projects that push the boundaries of what’s possible. Let’s build the future together.
            <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>


            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
