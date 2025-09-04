import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import excel from "../../Assets/Projects/excel.jpg";
import image from "../../Assets/Projects/image.png";
import Uday_dairy_equipments from "../../Assets/Projects/Uday_dairy_equipments.png";
import house from "../../Assets/Projects/house.jpg";
import deploy from "../../Assets/Projects/deploy.png";
import todolist from "../../Assets/Projects/todolist.png";

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
              imgPath={Uday_dairy_equipments}
              isBlog={false}
              title="Uday Dairy Equipment"
              description="Developed a Mini E-Commerce System for Uday Dairy Equipment using Python, Flask, and SQLite with features like product showcase, shopping cart, checkout, and user authentication."
              ghLink="https://github.com/ONLYCAKE/Uday-dairy-equipment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Mission: Possible - Student Edition"
              description="Mission: Possible - Student Edition is a productivity and mindfulness web app that helps students manage tasks, track progress, stay focused with a Pomodoro timer, and take mindful breaks. Built with HTML, CSS, and JavaScript, it offers task management, dashboard stats, dark mode, and local data storage."
              ghLink="https://github.com/ONLYCAKE/To-Do-List"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Image Decryption"
              description="Developed a Streamlit-based Image Steganography App in Python that hides and retrieves secret text messages inside images using LSB (Least Significant Bit) technique"
              ghLink="https://github.com/ONLYCAKE/imageDecryption"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excel}
              isBlog={false}
              title="Excel Analytics Platform"
              description="Built an Excel Analytics Platform MERN stack enabling users to upload Excel files, preview data, and generate interactive charts. Implemented real-time dashboard updates, secure authentication, and modern UI with TailwindCSS."
              ghLink="https://github.com/ONLYCAKE/Excel-Analytics-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="House-Price-Prediction"
              description="Built a House Price Prediction System using Machine Learning, integrated with Flask & Django for web deployment,Implemented real-time prediction of Bangalore home prices with trained regression and random forest models."
              ghLink="https://github.com/ONLYCAKE/House-Price-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deploy}
              isBlog={false}
              title="DeployWhisper"
              description="Created an AI-powered tool to automate app deployment with a single command,Reduced deployment time by 60% and improved developer efficiency."
              ghLink="https://github.com/ONLYCAKE/DeployWhisper"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
