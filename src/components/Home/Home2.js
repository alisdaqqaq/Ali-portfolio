import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about bridging the gap between physical logistics and digital insights, turning raw operational data into actionable business intelligence.
              <br /><br />
              I am highly proficient in analytical tools like <i><b className="purple">SQL, Python, Excel, and Power BI</b></i>, with hands-on operational experience in <i><b className="purple">SAP and Warehouse Management Systems (WMS)</b></i>.
              <br /><br />
              My field of interest lies in <i><b className="purple">optimizing supply chain operations</b></i>, <i><b className="purple">building interactive KPI dashboards</b></i>, and <i><b className="purple">driving inventory accuracy</b></i> in fast-paced FMCG environments.
              <br /><br />
              Whenever possible, I apply my skills to streamline processes, mitigate risks, and support strategic decision-making through <i><b className="purple">data-driven execution.</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ali-daqqaq-5b3055133"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:alisdaqqaq@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;