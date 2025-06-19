import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import ECommerce from "../../Assets/Projects/ECommerce.png";
import suicide from "../../Assets/Projects/suicide.png";
import MediaPlus from "../../Assets/Projects/MediaPlus.png";
import foodHut from "../../Assets/Projects/foodHut.png";
import BioLife from "../../Assets/Projects/BioLife.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              isBlog={false}
              title="E-Commerce"
              description="A modern E-Commerce website built with React.js and Firebase. Allows users to browse products, add them to cart or wishlist, and securely place orders. Features real-time updates, user authentication, and responsive design."
              demoLink="https://illustrious-cajeta-1430e7.netlify.app/"
              ghLink="https://ephemeral-stardust-da5a96.netlify.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MediaPlus}
              isBlog={false}
              title="MediaPlus"
              description="MediaPlus is a responsive medical website built with HTML, CSS, and JavaScript. Designed for doctors to manage profiles, share medical updates, and connect with patients through a clean and professional interface."
              demoLink="https://taupe-medovik-4cab8b.netlify.app/"
              // ghLink="https://ephemeral-stardust-da5a96.netlify.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodHut}
              isBlog={false}
              title="foodHut"
              description="FoodHut is a sleek and responsive restaurant website built with HTML, CSS, and JavaScript. It allows users to explore the menu, book tables online, and view restaurant details with an elegant and user-friendly interface."
              ghLink="https://ephemeral-stardust-da5a96.netlify.app/"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BioLife}
              isBlog={false}
              title="BioLife"
              description="BioLife is a clean and responsive website for showcasing fresh fruits and organic products. Built with HTML, CSS, and JavaScript, it offers a smooth browsing experience, product highlights, and a natural, eco-friendly design feel."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://creative-kulfi-e04384.netlify.app/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="responsive personal portfolio website built with React.js. Showcases projects, skills, and contact details with smooth navigation, animations, and a modern UI to highlight professional presence online."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="http"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
