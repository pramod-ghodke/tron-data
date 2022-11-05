import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from './Pages/About';
import Contact from './Pages/Contact';

import SingleBlogPage from "./Pages/SingleBlogPage";
import './App.css';
import Details from "./Pages/Details";
import Notfound from "./Pages/Notfound";
import Navmenu from "./Component/Navmenu";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Details>
     <BrowserRouter>
      <Navmenu/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/blogs" element = {<Projects />} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path=":category/:articleid" element = {<SingleBlogPage/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
     </Details>
      

    </div>
  );
}

export default App;
