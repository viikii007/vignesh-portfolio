import { Container } from "./styles";
import Vignesh from "../../assets/Vignesh.webp";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import compose from "../../assets/compose.svg";

import ktor from "../../assets/k-tor.svg";
import swift from "../../assets/swift-logo.svg";
import androidstudio from "../../assets/android-studio.svg";
import kotlin from "../../assets/kotlin.svg";
import firebase from "../../assets/fire-base.svg";
import flutter from "../../assets/flutter.svg";
import xml from "../../assets/xml-logo.svg";
import xcode from "../../assets/x-code.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm an Android Developer with expertise in Kotlin, Jetpack Compose, Java, and Python.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            My skill set includes ML Kit, Retrofit, NDK, Android security, Dependency Injection, Firebase, Google Maps, and payment gateway integration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I've successfully delivered 6 Android projects, 1 cross-platform app using Flutter, and 1 iOS app.
          </p>
        </ScrollAnimation>

        
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3>
             <h4>Android Developer</h4>
            <p>Solutech Software Pvt Ltd | 2025 - Present</p>
            <p>Kochi, Kerala</p>
            <br/> 
          </div>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
           <h4>Android Developer</h4>
            <p>Aggregate Intelligence Inc | 2023 - 2025</p>
            <p>Coimbatore, Tamil Nadu</p>
            <br/>
          </div>
        </ScrollAnimation>

           <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
           <h4>Junior Android Developer</h4>
            <p>Skyraan Technologies | 2022 - 2023</p>
            <p>Coimbatore, Tamil Nadu</p>
          </div>
        </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bsc Information Technology</h4>
            <p>VLB Janakiammal College of arts and science, Coimbatore | 2016 - 2019</p>
            <p>7.2 CGPA</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">

        <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={kotlin} alt="JavaScript" />
            </ScrollAnimation>
          </div>

           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={compose} alt="Wordpress" />
            </ScrollAnimation>
          </div>

             <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>

             <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={firebase} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={flutter} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>

          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={xml} alt="Vue" />
            </ScrollAnimation>
          </div>

         
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={ktor} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={swift} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={androidstudio} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={xcode} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="about-image">
    <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
      <img src={Vignesh} alt="vignesh" />
    </ScrollAnimation>
  </div>

    </Container>
  )
}
