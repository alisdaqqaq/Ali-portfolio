import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiSap,
  SiGithub,
  SiLinux,
  SiVisualstudiocode,
  SiMicrosoftoffice
} from "react-icons/si";
import { FaWarehouse } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="SAP ERP System">
        <SiSap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Warehouse Management Systems (WMS)">
        <FaWarehouse />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Office Suite">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux Operating System">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code Environment">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git Version Control">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;