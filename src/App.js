import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import SingleBlogPage from "./Pages/SingleBlogPage";
import "./App.css";
import Details from "./Pages/Details";
import Notfound from "./Pages/Notfound";

import Admin from "./layout/Admin";
import User from "./layout/User";
import ScrollToTop from "./Component/ScrollToTop";
import AdminLogin from "./Pages/Admin/AdminLogin";
import Dashboard from "./Pages/Admin/Dashboard";
import AddPro from './Pages/Admin/AddPro'

function App() {
  return (
    <div className="App">
      <Details>
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
         <Route path="/" element={<User/>}>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path=":category/:articleid" element={<SingleBlogPage />} />
              <Route path="*" element={<Notfound />} />
            </Route> 

            <Route path="/admin" element={<Admin/>}>
              <Route path="/admin" element={<AdminLogin/>} />
              <Route path="/admin/dashboard" element={<Dashboard/>} />
              <Route path="/admin/add-project" element={<AddPro/>}/>
            </Route>

          </Routes>
        </BrowserRouter>
      </Details>
    </div>
  );
}

export default App;
