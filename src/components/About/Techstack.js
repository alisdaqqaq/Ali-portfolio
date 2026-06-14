import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import {
  SiMysql,
  SiPostgresql,
  SiMicrosoftexcel,
  SiPowerbi,
  SiTableau
} from "react-icons/si";

const TechCategory = ({ title, children }) => (
  <div>
    <h2 className="category-heading" style={{ textAlign: "left", fontSize: "1.4em", marginTop: "30px", marginBottom: "15px", color: "white" }}>
      {title}
    </h2>
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {children}
    </Row>
  </div>
);

const TechIcon = ({ title, children }) => (
  <Col xs={4} md={2} className="tech-icons" title={title}>
    {children}
  </Col>
);

function Techstack() {
  return (
    <div>
      <TechCategory title="Core Analytical Languages">
        <TechIcon title="Python"><DiPython /></TechIcon>
        <TechIcon title="MySQL"><SiMysql /></TechIcon>
        <TechIcon title="PostgreSQL"><SiPostgresql /></TechIcon>
      </TechCategory>

      <TechCategory title="Business Intelligence & Data Visualization">
        <TechIcon title="Power BI"><SiPowerbi /></TechIcon>
        <TechIcon title="Tableau"><SiTableau /></TechIcon>
        <TechIcon title="Advanced Excel"><SiMicrosoftexcel /></TechIcon>
      </TechCategory>
    </div>
  );
}

export default Techstack;