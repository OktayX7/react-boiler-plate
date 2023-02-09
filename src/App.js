import {Routes, Route} from "react-router-dom";

// Pages
import Home from "views/Home";
import About from "views/About";
import Contact from "views/Contact";

// Layout
import Layout from "layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
