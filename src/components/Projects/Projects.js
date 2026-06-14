import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ciltImg from "../../Assets/cilt-cert.jpeg"; 
import courseraPdf from "../../Assets/coursera-cert.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* --- Experience Section --- */}
        <h1 className="project-heading">
          Professional <strong className="purple">Experience & Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a breakdown of my industry experience and supply chain background.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          
          <Col md={5} className="project-card">
            <ProjectCard
              title="Stock Controller"
              company="Almarai Company"
              duration="2025 - Present"
              location="Saudi Arabia"
              description={
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Manage Warehouse Management System (WMS) and generate daily, weekly, and monthly inventory reports.</li>
                  <li>Ensure high inventory accuracy by executing continuous stock reconciliation processes.</li>
                  <li>Handle order requests, track approvals, and utilize SAP systems for daily operational tasks.</li>
                  <li>Coordinate with the Quality Department to ensure strict compliance with international standards and procedures.</li>
                </ul>
              }
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              title="Seasonal Operations & Data Reporting"
              company="Ministry of Hajj and Umrah - Adilla Company"
              duration="2022"
              location="Saudi Arabia"
              description={
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Monitored employee performance metrics to identify operational strengths and weaknesses during peak seasons.</li>
                  <li>Prepared comprehensive daily and monthly reports, including performance evaluations and active data analysis.</li>
                  <li>Implemented effective feedback mechanisms to gather, analyze, and act on employee suggestions to optimize workflows.</li>
                </ul>
              }
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              title="Integrated E-Commerce Platform"
              company="Graduation Project"
              duration="Academic"
              location="University"
              description={
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Designed an innovative, end-to-end e-commerce platform architecture.</li>
                  <li>Mapped out complete supporting supply chain operations, fulfillment pipelines, and backend logistics architecture to simulate real-world physical and digital integration.</li>
                </ul>
              }
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              title="Event Operations & Volunteering"
              company="Saudi Logistics Academy & Taibah University"
              duration="2023 - 2025"
              location="Saudi Arabia"
              description={
                <ul style={{ paddingLeft: "20px" }}>
                  <li><strong>Saudi Logistics Academy:</strong> Served as a Volunteer Photographer and operational support for the Founding Day Event (2025).</li>
                  <li><strong>Taibah University:</strong> Engaged in organizing, presenting, and media editing for various institutional events (2023-2024), honing planning and communication skills.</li>
                </ul>
              }
            />
          </Col>
        </Row>

        {/* --- Clickable Certifications Section --- */}
        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          Professional <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          You can click directly on the certificate images or buttons below to open and verify the credentials.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Card 1: The Clickable JPEG Image Certificate */}
          <Col md={5} className="project-card">
            <div className="custom-clickable-card">
              <a href={ciltImg} target="_blank" rel="noopener noreferrer">
                <ProjectCard
                  imgPath={ciltImg} 
                  isProject={true}
                  ghLink={ciltImg}   
                  title="International Introductory Certificate in Logistics and Transport"
                  company="The Chartered Institute of Logistics and Transport (CILT)"
                  duration="March 2026"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>Awarded by the global authority for logistics and transport professionals.</p>
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>Validates foundational expertise in global shipping, inventory workflows, and modern distribution networks.</li>
                        <li><strong>Certificate No:</strong> 05032026030064</li>
                      </ul>
                    </div>
                  }
                />
              </a>
            </div>
          </Col>

          {/* Card 2: The Clickable PDF Certificate Card */}
          <Col md={5} className="project-card">
            <div className="custom-clickable-card">
              <a href={courseraPdf} target="_blank" rel="noopener noreferrer">
                <ProjectCard
                  imgPath={courseraPdf} 
                  isProject={true}
                  ghLink={courseraPdf}  
                  title="Foundations: Data, Data, Everywhere"
                  company="Google (via Coursera)"
                  duration="May 2026"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>Professional course authorized by Google covering fundamental ecosystem data analysis.</p>
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>Focuses on spreadsheet execution, data handling concepts, structured analytical thinking, and business decision tracking.</li>
                        <li><strong>Verification Link:</strong> coursera.org/verify/44NAXO7WC9AW</li>
                      </ul>
                    </div>
                  }
                />
              </a>
            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;