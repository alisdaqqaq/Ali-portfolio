import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Daqqaq</span> based in <span className="purple">Saudi Arabia.</span>
            <br />
            I am a driven <span className="purple">Supply Chain & Data Analytics professional</span> with a strong academic background in E-Commerce and Logistics Support.
            <br />
            Currently, I am working as a <span className="purple">Stock Controller at Almarai Company</span>, where I bridge the gap between physical operations and data-driven logistics insights.
            <br />
            <br />
            Beyond tracking metrics and managing stock, here are some areas I am deeply passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building interactive BI dashboards & performance tracking pipelines
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring modern FMCG inventory optimization models and smart warehousing
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous learning in business intelligence framework methodologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming raw operational data into clear business insights to drive smarter execution."{" "}
          </p>
          <footer className="blockquote-footer">Ali Daqqaq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;