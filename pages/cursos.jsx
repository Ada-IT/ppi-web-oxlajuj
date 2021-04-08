import Hero from "../components/hero/Hero";
import Webinar from "../components/webinar/Webinar";
import CoursesOnline from "../components/coursesOnline/CoursesOnline";
import { Container } from "react-bootstrap";

const Courses = () => {
  return (
    <>
      <Hero />
      <Webinar />
      <Container fluid >
        <div className="m-4">
          <CoursesOnline />
        </div>
      </Container>
    </>
  );
};

export default Courses;