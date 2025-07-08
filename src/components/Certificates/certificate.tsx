import { Container } from "./styles";
import cert1 from "../../assets/cert1.jpg";
import cert2 from "../../assets/cert2.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function Certificates() {
  return (
    <Container id="project">
      <h2>Certifications</h2>
      <div className="certificate">
        <ScrollAnimation animateIn="flipInX">
          <a
            href="https://www.udemy.com/certificate/UC-c0255ecf-36df-4cb3-bccd-cbb5ee78f3a5/"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            <div className="project">
              <img src={cert1} alt="Certificate 1" className="cert-image" />
              <div className="body">
                <h3>The Complete Android 15 Course [Part 1] - Java & Kotlin</h3>
              </div>
            </div>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a
            href="https://www.udemy.com/certificate/UC-9f61d646-fa30-42c0-92ec-c766a65737df/"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            <div className="project">
              <img src={cert2} alt="Certificate 2" className="cert-image" />
              <div className="body">
                <h3>Android Jetpack Compose: The Comprehensive Bootcamp</h3>
              </div>
            </div>
          </a>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
