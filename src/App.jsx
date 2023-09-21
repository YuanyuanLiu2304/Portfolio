import {
  Navbar,
  Hero,
  About,
  Projects,
  Contact,
  ToDoList,
  Calculator,
  StudentInfoSysDemo,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/todo-list" element={<ToDoList />} />
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/stu-sys" element={<StudentInfoSysDemo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
