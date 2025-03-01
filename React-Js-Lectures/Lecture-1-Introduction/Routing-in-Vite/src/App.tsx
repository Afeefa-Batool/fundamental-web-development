

// const App = () => {
//   return (
//     <>
//    <h1 className="text-4xl font-bold text-sky-400 underline bg-pink-400">
//   Hello world!
// </h1>

//     </>
//   )
// }

// export default App

import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>


  );
};

export default App;
