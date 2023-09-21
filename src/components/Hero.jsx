import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import heroImg from "../assets/main.svg";
import { Skills, About, Projects, Contact } from ".";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Typed from "typed.js";

const Hero = () => {
  useEffect(() => {
    const typingEffect = new Typed(".author", {
      strings: ["Yuanyuan(Rachel) Liu", "Software Developer"],
      loop: true,
      typeSpeed: 120,
      backSpeed: 40,
      backDelay: 1500,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <div>
      <div className="bg-emerald-100  grid md:grid-cols-2 min-h-[90vh] gap-10 px-5  items-center">
        <article className="text-slate-700 tracking-wider lg:p-20">
          <h1 className="text-7xl mb-24">Hello_ </h1>
          <h2 className="text-5xl font-bold">
            I'm <span className="author"></span>
          </h2>
          <p className="mt-3">
            Turing ideas into interactive reality, I am dedicated and
            self-motivated, continually seeking opportunities to expand my skill
            set and grow into a proficient developer.
          </p>
          <Link to="/about">
            <button className="about-btn">A little about me</button>
          </Link>
          <div className="flex gap-x-4 mt-4">
            <Link to="https://github.com/YuanyuanLiu2304">
              {" "}
              <AiFillGithub className="h-8 w-10 hover:text-emerald-500 duration-300" />
            </Link>
            <Link to="mailto:racheliu9816@gmail.com">
              {" "}
              <AiOutlineMail className="h-8 w-10 hover:text-emerald-500 duration-300" />
            </Link>
            <Link to="https://www.linkedin.com/in/yuanyuan-liu-4b9a57259/">
              {" "}
              <CiLinkedin className="h-8 w-10 hover:text-emerald-500 duration-300" />
            </Link>
          </div>
        </article>

        <article className="hidden md:block ms-20">
          <img src={heroImg} alt="img" className="h-80 lg:h-96" />
        </article>
      </div>

      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Hero;
