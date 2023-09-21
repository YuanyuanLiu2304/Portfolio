import { links } from "../data";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const isLinkActive = (path) => {
    return useLocation().pathname === path;
  };
  return (
    <nav className="align-element py-6 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
      <Link to="/">
        <h2 className="text-3xl font-bold">
          Web <span className="text-emerald-600">Dev</span>
        </h2>
      </Link>
      <div className="flex gap-x-10">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <Link
              key={id}
              to={href}
              className={
                isLinkActive(href)
                  ? "active-link text-xl capitalize hover:text-emerald-500 duration-300"
                  : "text-lg capitalize hover:text-emerald-500 duration-300"
              }
            >
              {text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
