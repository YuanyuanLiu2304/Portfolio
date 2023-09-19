import { projects } from "../data";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const Projects = () => {
  return (
    // <section className="align-element py-20 bg-gray-50" id="projects">
    //   <h1 className="title">Web Creations</h1>
    //   <div className=" grid mt-16 lg:grid-cols-2 xl:grid-cols-3 items-center gap-16">
    //     {projects.map((project) => {
    //       const { id, img, url, github, title, text } = project;
    //       return (
    //         <article key={id} className="bg-white rounded-lg shadow-md">
    //           <img
    //             src={img}
    //             alt="project image"
    //             className="w-full object-cover rounded-t-lg h-64"
    //           />
    //           <div className="p-8">
    //             <h2 className="title">{title}</h2>
    //             <p className="mt-2">{text}</p>
    //             <div className="flex mt-4 text-3xl text-slate-600">
    //               <a href={url}>
    //                 <TbWorldWww className="mr-4 hover:text-black" />
    //               </a>{" "}
    //               <a href={github}>
    //                 <FaGithubSquare className="mr-4 hover:text-black duration-300" />
    //               </a>
    //             </div>
    //           </div>
    //         </article>
    //       );
    //     })}
    //   </div>
    // </section>
    <section>
      <div className="portfolio_container">
        <img className="shape" alt="img"></img>
        <div className="portfolio_wrapper">
          <div className="portfolio">
            <h1>Portfolio</h1>
            <p>
              Creativity is a journey without a map, where the destination is
              constantly evolving.
            </p>
          </div>

          {/* <div className="rocket_container">
            <img src={rocket} alt="rocket" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
