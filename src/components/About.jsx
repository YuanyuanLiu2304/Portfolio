import perfil from "../assets/perfil.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Wrapper>
      <div className="align-element grid md:grid-cols-2 items-center gap-20">
        <img src={perfil} alt="about" className="perfil" />
        <article>
          <h1 className="title">About me</h1>
          <p className="text-slate-800 mt-8 leading-loose">
            I am currently pursuing my diploma in Computer Programming at{" "}
            <i>Algonquin College</i>, with an expected graduation date in
            December 2023. I am passionate about embarking on a career in
            development, eagerly seeking opportunities to apply my skills and
            gain valuable experience. With a strong foundation in
            problem-solving, analytical thinking, and a collaborative spirit, I
            am well-prepared to make meaningful contributions to a professional
            environment.
          </p>
          <p className="text-slate-800 mt-3 leading-loose">
            I love programming and am highly self-motivated to expand my
            knowledge beyond the classroom. I find joy in the process of
            contemplating and solving problems. Outside of my academic studies,
            I am always eager to explore new technologies. I have acquired
            skills in the <i>React</i>, <i>AWS</i>, <i>Docker</i>,{" "}
            <i>Kubernetes</i>.
          </p>

          <p className="text-dark  mt-3 leading-loose">
            <strong>Hobbies</strong>: Hiking, Climbing, Travel, Reading, Music,
            Movie
          </p>
          <p className="text-dark mt-3 leading-loose">
            {" "}
            <strong>Contact</strong>: Racheliu9816@gmail.com
          </p>
        </article>
      </div>

      <div className="resume align-element">
        <div className="subtitle">
          <span className="circle-fill"></span>
          <span>Take risks and embrace the adventure of life</span>
          <h1>Resume</h1>
        </div>

        <div className="resume_container ">
          {/* Experience */}
          <div className="resume_block">
            <h2 className="text-decoration-underline fs-3 fw-bold ps-4">
              Experience
            </h2>

            <ul className="resume_experience list-unstyled mt-4">
              {/* peer tutor start here */}
              <li>
                <span className="circle-fill"></span>
                <h3 className="fs-5 fw-bold">Peer Tutor</h3>
                <small>Sep 2023 - Present | Algonquin College, Ottawa ON</small>
                <ul className="experience_context mt-2 ps-3 fw-medium">
                  <li>
                    <strong>Effectively communicated</strong> technical concepts
                    and programming principles to fellow students, ensuring
                    their comprehensive understanding and ability to apply these
                    principles effectively.
                  </li>
                  <li>
                    mentoring to guide students foster their{" "}
                    <strong>problem-solving</strong> abilities and critical
                    thinking skills through coding practices and debugging
                    exercises.
                  </li>
                </ul>
              </li>
              {/* freelance web developer start here */}
              <li>
                <span className="circle-fill"></span>
                <h3 className="fs-5 fw-bold">Freelance Developer </h3>
                <small>Jul 2023 - Present | Ottawa ON</small>
                <div className="e-commerce mt-3">
                  <h4 className="fw-medium">
                    Cozy Sloth E-Commerce |{" "}
                    <Link to="https://cozy-sloth.netlify.app/" className="link">
                      Website
                    </Link>
                  </h4>
                  <ul className="experience_context mt-2 ps-3 ">
                    <li>
                      Created a responsive e-commerce platform with HTML, CSS,
                      JavaScript, and React, offering user-friendly navigation,
                      secure payment processing via Stripe API, and improved
                      performance for a shopping experience.
                    </li>
                    <li>
                      Deployed the application on Netlify and established an
                      efficient CI/CD pipeline, leading to a remarkable 70%
                      reduction in deployment time.
                    </li>
                  </ul>
                </div>

                <div className="job-tracking mt-3">
                  <h4 className="fw-medium">
                    Job Application Tracking |{" "}
                    <Link
                      to="https://job-tracking-yl.netlify.app/"
                      className="link"
                    >
                      Website
                    </Link>
                  </h4>
                  <ul className="experience_context mt-2 ps-3 fw-medium">
                    <li>
                      Developed an efficient job application management system
                      using JavaScript and React, incorporating features such as
                      real-time job status updates, intuitive filtering, sorting
                      options, and interactive data visualizations.
                    </li>
                    <li>
                      Leveraged Redux for state management, along with REST APIs
                      for seamless data retrieval, resulting in an optimized job
                      application tracking experience.
                    </li>
                  </ul>
                </div>
              </li>
              {/* service assistant start here */}
              <li>
                <span className="circle-fill"></span>
                <h3 className="fs-5 fw-bold">Service Assistant</h3>
                <small>Mar 2022 - Jul 2022 | Synnex Pty Ltd, Australia</small>
                <ul className="experience_context mt-2 ps-3 fw-medium">
                  <li>
                    Increased customer loyalty by 80% through meticulous
                    implementation of quality control measures, ensuring{" "}
                    <strong>attention to detail</strong> and enhancing the
                    overall customer experience.
                  </li>
                  <li>
                    Contributed to a positive work environment and demonstrated
                    strong <strong>teamwork</strong> skills by collaborating
                    with team members to consistently meet daily packing quotas.
                  </li>
                  <li>
                    Enhanced overall efficiency by streamlining the packing
                    process through meticulous organization and maintenance of a
                    clean work area, showcasing exceptional{" "}
                    <strong>organizational</strong> skills.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Education */}
          <div className="resume_block">
            <h2 className="text-decoration-underline fs-3 fw-bold ps-4">
              Education
            </h2>

            <ul className="resume_experience list-unstyled mt-4">
              <li>
                <span className="circle-fill"></span>
                <h3 className="fs-5 fw-bold">
                  Diploma in Computer Programming
                </h3>
                <small>Sep 2022 - present | Algonquin College, Ottawa</small>
                <ul className="education_context mt-2 ps-3 fw-medium">
                  <li>
                    <strong>Programming</strong>: Java, Python, SQL, HTML/CSS,
                    JavaScript, PHP, Script
                  </li>
                  <li>
                    <strong>Databases</strong>: MySQL, Oracle, PostgreSQL,
                    Microsoft SQL Server
                  </li>
                  <li>
                    <strong>Network</strong>: HTTP, TCP, UDP, IP, OSI model,
                    socket programming
                  </li>
                  <li>
                    <strong>Operating Systems</strong>: Windows, MacOS, Linux,
                    Android
                  </li>
                  <li>
                    <strong>Frameworks</strong>: Spring Boot, Hibernate, React,
                    Redux, Bootstrap, Axios
                  </li>
                  <li>
                    <strong>Software & Tools</strong>: Git, Docker, Kubernetes,
                    AWS, Restful, Maven, UML
                  </li>
                </ul>
              </li>
              <li>
                <span className="circle-fill"></span>
                <h3 className="fs-5 fw-bold">Bachelor's Degree in Japanese</h3>
                <small>2015 - 2019 | Yangtze Normal University, China</small>
                <p className="mt-2">
                  During my studies, I acquired a strong understanding of the
                  language and culture. Additionally, I gained knowledge in
                  Japanese economics, which provided me with an insight into the
                  country's business practices and policies. I also studied
                  Japanese culture, which enabled me to appreciate and
                  understand Japan's customs and social practices.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .perfil {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .link {
    color: #2563eb;
    text-decoration: underline;
    font-weight: 500;
  }
  .circle-fill {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #ffd109;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .resume {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem auto 1rem;
  }

  .subtitle {
    text-align: center;
    h1 {
      padding-top: 20px;
      font-size: 30px;
    }
  }

  .resume_container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 4rem 0;
  }

  @media screen and (max-width: 576px) {
    .resume {
      margin-top: 4rem;
    }

    .resume_container {
      padding: 1.25rem 0;
    }
  }
  .resume_block {
    width: 50%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
  }

  .resume_experience {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .resume_experience li {
    padding-left: 25px;
    position: relative;
  }

  ul {
    list-style-type: circle;
  }

  .list-unstyled {
    list-style: none;
  }

  .bullet {
    padding-right: 0.5rem;
    font-size: 0.5rem;
  }
  .resume_experience li .circle-fill {
    position: absolute;
    left: 0;
    font-size: 12px;
    padding-left: 0;
  }
  .experience_context li,
  .education_context li,
  .resume_experience p {
    width: 100%;
    color: #1e293b;
    margin-top: 0.5rem;
    font-weight: 400;
    padding-left: 0.5rem;
    line-height: 26px;
    max-width: 550px;
  }
`;
export default About;
