import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/shivam.png";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import Footer from "../../components/Footer";

function Home() {
  return (
    <section>
      <div className=" sm:flex flex-col items-center justify-center">
        <Container fluid className="home-section" id="home">
          <Container className="home-content  ">
            <Row className="g-0  flex justify-center items-center">
              <Col
                md={6}
                className="home-header max-w-2xl mx-auto text-left
              sm:text-center lg:text-left lg:max-w-none lg:mx-0"
              >
                <h1
                  style={{ paddingBottom: 15 }}
                  className="heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                >
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <div className=" max-w-[26rem]">
                  <div className=" pl-[20px] text-[1.7rem] md:text-[1.9rem] lg:text-[2.5rem] font-bold mb-6">
                    I'M
                    <strong className="main-name text-[1.7rem] md:text-[1.9rem] lg:text-[2.5rem] ml-2">
                      Shivam Thapliyal
                    </strong>
                  </div>
                  <p className="heading-description blockquote text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-[90%] text-left hidden sm:block">
                    Full Stack Developer specializing in Cloud and DevOps
                    deployment.
                  </p>
                </div>
                <div className="heading-type w-full max-w-md md:text-sm sm:text-lg text-lg mt-2 ">
                  <TypeWriter />
                </div>
              </Col>
              <Col md={5} className="flex justify-left md:justify-end md:mr-7">
                <img
                  src={myImg}
                  className="profile-pic md:min-w-[248.62px] sm:max-h-[312.328px]"
                  alt="avatar"
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col
                md={12}
                className="home-about-social text-center max-w-4xl mx-auto py-8"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Get in Touch
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  {" "}
                  Whether you want to get in touch, or talk about a project
                  collaboration.
                  <br />
                  <strong>Feel free to connect with me</strong>
                </p>
                <SocialMedia />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      {/* <Footer /> */}
    </section>
  );
}

export default Home;
