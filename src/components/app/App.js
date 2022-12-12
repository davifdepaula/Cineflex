import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContainer } from "./styles";

import Navbar from "../Navbar";
import Home from "../../pages/home";
import Sessoes from "../../pages/sessao"
import Seats from "../../pages/ seats";
import Sucess from "../../pages/success";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppContainer>
        <Routes>
          <Route path ="/" element={<Home />} ></Route>
          <Route path ="/sessoes/:id" element={<Sessoes />} ></Route>
          <Route path ="/seats/:id" element={<Seats />} ></Route>
          <Route path ="/sucess" element={<Sucess />} ></Route>
        </Routes>     
        </AppContainer> 
      </BrowserRouter>

    </>
  )
}

export default App;

