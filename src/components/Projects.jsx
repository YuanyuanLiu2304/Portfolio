import { projects } from "../data";
import rocket from "../assets/rocket.png";
import shape from "../assets/shape.png";
import styled from "styled-components";
import Project from "./Project";
const Projects = () => {
  return (
    <Wrapper>
      <article className="projects-header">
        <img src={shape} className="shape" alt="img"></img>
        <div className="projects-wrapper">
          <div className="header-title">
            <h1>Portfolio</h1>
            <p>
              Creativity is a journey without a map, where the destination is
              constantly evolving.
            </p>
          </div>

          <div className="rocket_container">
            <img src={rocket} alt="rocket" />
          </div>
        </div>
      </article>
      <article className="projects-container">
        <div className="title-wrapper">
          <h2>
            <span
              className="circle-fill"
              style={{ backgroundColor: "#ffd109" }}
            ></span>
            portfolio
          </h2>

          <h1>
            <span className="underline">Creative</span> Work
          </h1>
        </div>
        <div className="projects_cards">
          {projects.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .projects-header {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-color: #423ef3;
  }

  .projects-wrapper {
    display: flex;
    position: relative;
    width: 100%;
    padding: 30px 60px;
    align-items: center;
    justify-content: space-between;
  }

  .shape {
    position: absolute;
    left: 40px;
    bottom: 5px;
  }

  .header-title h1 {
    font-size: 80px;
    color: #fff;
    max-width: 400px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 25px;
    letter-spacing: 2px;
    text-align: left;
  }

  .header-title p {
    width: 100%;
    color: #fff;
    line-height: 30px;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
  }

  .circle-fill {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #ffd109;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .header-title img {
    display: flex;
    width: 300px;
    height: 350px;
    justify-content: right;
    align-items: right;
  }

  h1 {
    color: #334155;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.75rem 0;
  }
  h2 {
    font-size: 20px;
    color: #8a90a2;
  }

  .rocket_container {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: right;
    align-items: center;
  }

  .rocket_container img {
    max-width: 90%;
    max-height: 90%;
    padding-right: 7%;
  }

  .projects-container {
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }

  .title-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 3rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .underline {
    color: #5956e9;
    font-size: 50px;
    font-weight: 600;
    margin: 20px 15px 50px;
    letter-spacing: 1px;
    text-decoration: underline;
    text-decoration-color: #ffd109;
  }

  .projects_cards {
    display: grid;
    width: 100%;
    margin-bottom: 80px;
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: 1fr; */
  }

  @media only screen and (max-width: 576px) {
    .rocket_container img {
      display: none;
    }

    .header-title h1 {
      max-width: 350px;
      font-size: 48px;
      line-height: 1.2;
      margin-bottom: 20px;
    }

    .header-title p {
      font-size: 16px;
      max-width: 300px;
      line-height: 26px;
    }
  }
  @media only screen and (max-width: 768px) {
    .projects_cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default Projects;
