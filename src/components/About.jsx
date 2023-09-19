import aboutImg from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="about" className="w-full h-64" />
        <article>
          <h1 className="title">About me</h1>
          <p className="text-slate-600 mt-8 leading-loose">
            what ever in here, a little bit introduce yourself
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
