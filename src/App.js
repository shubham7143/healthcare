import "./App.css";
import Header from "./nova-components/Header";
import Footer from "./nova-components/Footer";
import Body from "./nova-components/Body";
import About from "./nova-components/About";
import Departments from "./nova-components/Departments";
import Contact from "./nova-components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function App() {
  // const [data, setData] = useState("");

  // const getData = async () => {
  //   const response = await axios.get("http://localhost:5500/getData");
  //   setData(response.data);
  // }

  // useEffect(() => {
  //   getData()
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/departments" element={<Departments />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
