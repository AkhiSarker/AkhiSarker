import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import design from "../../Assets/Projects/design.png";
import certificate from "../../Assets/Projects/certificate.png";
import tripform from "../../Assets/Projects/TripForm.jpg";
import tripit from "../../Assets/Projects/trip_it.png";
import designs_3d from "../../Assets/Projects/designs_3d.png";
import word_reco from "../../Assets/Projects/Handwritten_worrd_recognition.png";

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
              imgPath={tripit}
              isBlog={false}
              title="TripIt"
              description="A travel website with various features. Perfect for a travel enthusiast."
              ghLink="https://github.com/AkhiSarker/TripIT"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={word_reco}
              isBlog={false}
              title="Handwritten English Word Recognition Using CNN RNN Model"
              description="Recognizes almost any handwritten English words."
              ghLink="https://github.com/AkhiSarker/Handwritten-English-Word-Recognition-Using-CNN-RNN-Model"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripform}
              isBlog={false}
              title="TripForm"
              description="AN online form for registering for trips and parties."
              ghLink="https://github.com/AkhiSarker/TripForm"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              isBlog={false}
              title="My Designs"
              description="Visit my repo to check out my designs."
              ghLink="https://github.com/AkhiSarker/My_Designs/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={designs_3d}
              isBlog={false}
              title="My 3D Designs"
              description="Visit my repo to check out my 3D designs I made using Blender."
              ghLink="https://github.com/AkhiSarker/Blender_Projects/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certificate}
              isBlog={false}
              title="My Certificates"
              description="Check out my certificates for various courses I completed."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
