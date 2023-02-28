import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EmployeeRecordSystem from "../../Assets/Projects/EmployeeRecordSystem.png";
import LibraryManagementSystem from "../../Assets/Projects/LibraryManagementSystem.png";
import ClassManagementSystem from "../../Assets/Projects/ClassManagementSystem.png";
import PetsRecognitionSystem from "../../Assets/Projects/PetsRecognitionSystem.png";
import SupplyandDemandManagementSystem from "../../Assets/Projects/SupplyandDemandManagementSystem.png";
import EmpoweringtheFuture from "../../Assets/Projects/EmpoweringtheFuture.png";
import BringingJoytotheNation from "../../Assets/Projects/BringingJoytotheNation.png";
import OptimizingEfficiency from "../../Assets/Projects/OptimizingEfficiency.png";
import DivingintoAdventure from "../../Assets/Projects/DivingintoAdventure.png";


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
              imgPath={EmployeeRecordSystem}
              isBlog={true}
              title="Employee Record System"
              description="Completed a mini project in my first year of studies to develop an employee record system using C programming language.
              Designed and implemented the system to store and manage employee information, including name, ID, salary, and other details.
              Developed the program to perform various operations such as add, edit, and delete records, as well as generate reports and perform searches."
              ghLink="https://github.com/iamHarinda/Employee-Record-System"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LibraryManagementSystem}
              isBlog={true}
              title="Library Management System"
              description="Completed an Object-Oriented Programming (OOP) mini project to develop a library management system using Java and NetBeans.
              Integrated the system with a MySQL database to store and manage information on books, authors, members, and transactions.
              Implemented various features such as adding, editing, and deleting books and members, generating reports, and performing searches."
              ghLink="https://github.com/iamHarinda/Library-Management-System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClassManagementSystem}
              isBlog={true}
              title="Class Management System"
              description="Completed a Skills Development Project in my second year of studies to develop a class management system using HTML, CSS, JavaScript, PHP, and MySQL.
              Designed and implemented a web-based system to manage student and teacher information, class schedules, assignments, and grades.
              Developed the system with a focus on user experience and ease of use, ensuring that all features were accessible and intuitive."
              ghLink="https://github.com/iamHarinda/Class-Management-System"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PetsRecognitionSystem}
              isBlog={true}
              title="Pets Recognition System"
              description="Completed a Research Project in my third year of studies to develop a pests recognition system using Machine Learning and TensorFlow.
              Designed and implemented an Android app using Figma, Android Studio, Flutter, and Dart, to allow farmers and growers to easily identify pests in their crops.
              Trained a machine learning model using TensorFlow to recognize different types of pests based on images captured by the app."
              ghLink="https://github.com/iamHarinda/Pets-Recognition-System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SupplyandDemandManagementSystem}
              isBlog={true}
              title="Supply and Demand Management System"
              description="Completed a Research Project in my fourth year of studies to develop a supply and demand management system using AI and ML.
              Designed and implemented a web-based platform that uses AI and ML algorithms to predict supply and demand trends and make recommendations to optimize inventory management.
              Built the platform using HTML, CSS, JavaScript, PHP, and MySQL, ensuring that it was both functional and user-friendly."
              ghLink="https://github.com/iamHarinda/Supply-and-Demand-Management-System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmpoweringtheFuture}
              isBlog={true}
              title="Empowering the Future"
              description="Created a website for the scholarship agency to provide information and resources for students seeking financial aid for their university education in Australia.
              Designed and developed the website using Wordpress and Elementor, incorporating HTML, CSS, and JavaScript, ensuring a user-friendly and visually appealing interface.
              Managed the project from start to finish, collaborating with stakeholders and ensuring timely delivery."
              ghLink="https://github.com/iamHarinda/Empowering-the-Future"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BringingJoytotheNation}
              isBlog={true}
              title="Bringing Joy to the Nation"
              description="Developed a website for the annual Christmas event broadcasted by R TV, a popular and biggest TV channel in Bangladesh.
              Designed and built the website using Wordpress and Elementor, incorporating HTML, CSS, PHP, and MySQL to create a dynamic and interactive user experience.
              Managed the project from start to finish, ensuring that the website was delivered on time and met the needs of the client."
              ghLink="https://github.com/iamHarinda/Bringing-Joy-to-the-Nation"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OptimizingEfficiency}
              isBlog={true}
              title="Optimizing Efficiency"
              description="Developed a backend for a company's staff tracking app using Laravel API, PHP, HTML, CSS and Bootstrap.
              Implemented real-time tracking of staff members' time and location through smartphones.
              Provided access to top-end management to monitor staff performance and tracking information.
              Managed back-end data storage and ensured the seamless integration of the app and API."
              ghLink="https://github.com/iamHarinda/Optimizing-Efficiency"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DivingintoAdventure}
              isBlog={true}
              title="Diving into Adventure"
              description="
              Developed a booking platform for diving events in Australia's coral and rivers, allowing customers to easily reserve their spots and pay online.
              Built the platform using Laravel, MySQL, PHP, HTML, CSS and Bootstrap, ensuring a user-friendly and intuitive experience for customers.
              Managed the project from start to finish, working closely with the client to ensure that their requirements were met and the platform was delivered on time."
              ghLink="https://github.com/iamHarinda/Diving-into-Adventure"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
