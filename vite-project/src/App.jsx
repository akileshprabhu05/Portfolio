import Profile from "./Pages/Profile";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import WebLayout from "./Layout/WebLayout";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const app = () => {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<WebLayout/>}>
              <Route path="/" element={<Profile/>}/>
              <Route path="/Project" element={<Project/>}/>
              <Route path="/Contact" element={<Contact/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default app