import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiXampp,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiWindows,
  SiMicrosoftoffice,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp title="XAMPP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma title="Figma" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop title="Photoshop" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator title="Illustrator" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva title="Canva" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice title="MS Office Suite" />
      </Col>
    </Row>
  );
}

export default Toolstack;
