import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { SlBadge } from "react-icons/sl";
import { BiTrendingUp } from "react-icons/bi";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px", marginTop: "40px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Professional <strong className="purple">Credentials & Domains</strong>
      </h1>
      
      <Col md={5} className="mb-3">
        <Card className="quote-card-view" style={{ padding: "25px", textAlign: "left", height: "100%" }}>
          <h3 className="purple" style={{ fontSize: "1.3em", borderBottom: "1px solid #c770f0", paddingBottom: "10px" }}>
            <SlBadge style={{ marginRight: "10px", marginBottom: "3px" }} /> Core Certifications
          </h3>
          <ul style={{ marginTop: "15px", lineHeight: "1.8em", listStyleType: "none", paddingLeft: "0" }}>
            <li style={{ marginBottom: "15px" }}>
              🔹 <strong>CILT International Certification</strong> <br />
              <span style={{ fontSize: "0.85em", color: "#ccc" }}>The Chartered Institute of Logistics and Transport | 2025</span>
            </li>
            <li>
              🔹 <strong>Google Data Analytics Framework</strong> <br />
              <span style={{ fontSize: "0.85em", color: "#ccc" }}>Professional Data Tracking & Foundations | Coursera</span>
            </li>
          </ul>
        </Card>
      </Col>

      <Col md={5} className="mb-3">
        <Card className="quote-card-view" style={{ padding: "25px", textAlign: "left", height: "100%" }}>
          <h3 className="purple" style={{ fontSize: "1.3em", borderBottom: "1px solid #c770f0", paddingBottom: "10px" }}>
            <BiTrendingUp style={{ marginRight: "10px", marginBottom: "3px" }} /> Industry Expertise
          </h3>
          <ul style={{ marginTop: "15px", lineHeight: "1.8em", listStyleType: "none", paddingLeft: "0" }}>
            <li style={{ marginBottom: "15px" }}>
              🔹 <strong>FMCG Inventory Control & Audits</strong> <br />
              <span style={{ fontSize: "0.85em", color: "#ccc" }}>Almarai Company — Stock Accuracy & WMS Coordination</span>
            </li>
            <li>
              🔹 <strong>Operations Performance Analytics</strong> <br />
              <span style={{ fontSize: "0.85em", color: "#ccc" }}>Ministry of Hajj and Umrah Reporting Systems</span>
            </li>
          </ul>
        </Card>
      </Col>
    </Row>
  );
}

export default Github;