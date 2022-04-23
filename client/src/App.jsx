import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Vault from "./pages/Vault";
import Generator from "./pages/Generator";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/vault" element={<Vault />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
