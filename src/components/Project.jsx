import styled from "styled-components";
import { Link } from "react-router-dom";
const Project = ({ name, img, backgroundColor, url, tech }) => {
  return (
    <Wrapper>
      <div
        className="projects_img"
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={img} alt={name} />
      </div>
      <div className="projects_hover">
        <p>Application</p>
        <h1>{name}</h1>
        <p>{tech} </p>
        <button>
          <Link to={url} target="_blank">
            View Details
          </Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;

  .projects_img {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .projects_img img {
    width: 70%;
    margin: auto;
    padding: 5%;
    object-fit: contain;
  }

  &:hover .projects_hover {
    opacity: 1;
  }

  .projects_hover {
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    color: #f1f5f9;
    text-transform: capitalize;
    letter-spacing: 1px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.63);
    opacity: 0;
    transition: all 0.45s ease-in-out;
  }

  .projects_hover p {
    font-size: 1rem;
    font-weight: 500;
    /* padding: 10px; */
  }

  .projects_hover h1 {
    color: #f1f5f9;
    font-size: 1.75rem;
    padding-bottom: 0.5rem;
  }
  .projects_hover button {
    height: 50px;
    padding: 0 50px;
    margin-top: 1rem;
    background-color: #ffd109;
    border-radius: 10px;
    border: none;
  }

  .projects_hover button a {
    color: #0d6efd;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 1px;
    text-decoration: none;
  }

  @media only screen and (max-width: 576px) {
    .projects_hover p {
      font-size: 12px;
      padding: 3px;
    }

    .projects_hover h3 {
      font-size: 22px;
    }

    .projects_hover button {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
    }
  }
`;
export default Project;
