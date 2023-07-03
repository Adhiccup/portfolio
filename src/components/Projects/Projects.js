import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import memorygame from "../../Assets/Projects/memoryGame.png";
import expensive from "../../Assets/Projects/expensify.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import chatapp from "../../Assets/Projects/chat_app.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";
import bookingCI from "../../Assets/Projects/booking_ci.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="ChatApp"
              description="Personal Chat App to share resources and hangout with friends build with react.js, Material-UI, and Firebase, Chat Engine."
              ghLink="https://github.com/Adhiccup/chat-app"
              demoLink="https://uni-chat.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-of-Code(my blog)"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Adhiccup/Bits-of-Code"
              demoLink="https://deploy-blog-url/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="CodeEditor"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Adhiccup/CodeEditor"
              // demoLink="https://"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensive}
              isBlog={false}
              title="Expensify"
              description="Split bills, request payments, and chat with friends."
              ghLink="https://github.com/Adhiccup/Expensify"
              demoLink="https://new.expensify.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memorygame}
              isBlog={false}
              title="Memory Game"
              description="take a break"
              ghLink="https://github.com/Adhiccup/memory-game.git"
              demoLink="https://webtips.dev/memory-game-in-javascript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookingCI}
              isBlog={false}
              title="Corporate Keys"
              description="BookingSite"
              ghLink=""
              demoLink="https://www.corporatekeysaustralia.com.au/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloging}
              isBlog={false}
              title="for my blog"
              description="BookingSite"
              ghLink=""
              demoLink="https://www.corporatekeysaustralia.com.au/"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
