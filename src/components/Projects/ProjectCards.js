import React from "react";
import Card from "react-bootstrap/Card";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlineLocationOn, MdWorkOutline } from "react-icons/md";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Conditionally render an image only if one is provided */}
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ padding: "20px", borderRadius: "30px" }} />
      )}
      
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        {/* Job Title / Project Name */}
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "15px" }}>
          {props.title}
        </Card.Title>
        
        {/* Company Name */}
        {props.company && (
          <h5 className="purple" style={{ marginBottom: "15px", fontSize: "1.1em", textAlign: "center" }}>
            <MdWorkOutline style={{ marginBottom: "4px", marginRight: "5px" }} /> 
            {props.company}
          </h5>
        )}

        {/* Duration and Location */}
        {(props.duration || props.location) && (
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            fontSize: "0.9em", 
            color: "#b49bc8", 
            marginBottom: "20px",
            paddingBottom: "10px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <span>
              <BsCalendar3 style={{ marginBottom: "3px", marginRight: "5px" }} /> 
              {props.duration}
            </span>
            <span>
              <MdOutlineLocationOn style={{ marginBottom: "3px", fontSize: "1.2em", marginRight: "2px" }} /> 
              {props.location}
            </span>
          </div>
        )}

        {/* Description */}
        <Card.Text style={{ textAlign: "left", lineHeight: "1.7em", fontSize: "0.95em" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;