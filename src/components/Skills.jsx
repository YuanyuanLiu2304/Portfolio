import { skills } from "../data";

const Skills = () => {
  return (
    <section className="align-element py-20" id="skills">
      <h1 className="title">tech stack</h1>
      <div className="grid py-16 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const { id, title, icon, text } = skill;
          return (
            <div key={id} className="card border-0">
              <span>{icon}</span>
              <h4 className="mt-6 font-bold">{title}</h4>
              <p className="mt-2 text-slate-500">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
