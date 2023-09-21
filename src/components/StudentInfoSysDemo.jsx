import styled from "styled-components";
import add_stu_record from "../assets/add_stu_record.png";
import view_record from "../assets/view_record.png";
import update_record from "../assets/update_record.png";
import delete_record from "../assets/delete_record.png";
import s_info_sys from "../assets/s_info_sys.png";

const StudentInfoSysDemo = () => {
  return (
    <Wrapper>
      {" "}
      <div className="bg-emerald-50 header">
        <h1>Student Information System</h1>
        <p>
          Web Application &nbsp; | &nbsp; HTML &nbsp; CSS &nbsp; PHP &nbsp;
          MySQL
        </p>
        <div className="alert alert-success mt-5 fs-5">
          This project involved designing and implementing a user-friendly
          interface and server-side functionality using HTML, CSS, and PHP. It
          also included integrating a MySQL database to enable adding, updating,
          viewing, and deleting student information.
        </div>
      </div>
      <div className="demo_container">
        <div className="tag">
          <span>Screenshots</span>
        </div>
        <div className="container-fluid demo_bg">
          <div className="row">
            <div className="col-12">
              <img
                src={s_info_sys}
                alt="Student Information System home page"
              ></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <img
                src={view_record}
                style={{ height: "85%" }}
                alt="view record"
              ></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={add_stu_record} alt="add record"></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={delete_record} alt="delete record"></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={update_record} alt="update record"></img>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #334155;

  .header {
    padding: 4rem;
    align-items: center;
  }

  .header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .demo_container {
    margin: 80px 0;
  }

  .tag {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px 15px;
    margin-bottom: 80px;
  }

  .tag span {
    color: #8a90a2;
    background-color: #f9fafb;
    padding: 15px 35px;
    font-size: 20px;
    font-weight: 500;
  }

  .demo_bg {
    background-color: #292930;
    padding-bottom: 40px;
  }

  .col-md-6 img {
    width: 100%;
    padding: 25px;
  }

  .col-12,
  .col-12 img {
    width: 100%;
    margin: 0 auto;
    padding: 25px 30px;
  }
`;
export default StudentInfoSysDemo;
