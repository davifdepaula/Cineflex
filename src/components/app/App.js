import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContainer } from "./styles";

import Navbar from "../Navbar";
import Home from "../../pages/home";
import Sessoes from "../../pages/sessao"
import Assentos from "../../pages/assentos";
import Sucesso from "../../pages/successo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppContainer>
        <Routes>
          <Route path ="/" element={<Home />} ></Route>
          <Route path ="/sessoes/:id" element={<Sessoes />} ></Route>
          <Route path ="/assentos/:id" element={<Assentos />} ></Route>
          <Route path ="/sucesso" element={<Sucesso />} ></Route>
        </Routes>     
        </AppContainer> 
      </BrowserRouter>

    </>
  )
}

export default App;

