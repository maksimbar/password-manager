import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Vault from './pages/Vault';
import Generator from './pages/Generator/Generator';
import Auth from './pages/Auth/Auth';
import { Backdrop } from './App.styles';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute } from './ProtectedRoute';

const App = () => {
  return (
    <Backdrop>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/vault" element={<Vault />} />
            <Route path="/generator" element={<Generator />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Navigate replace to="/vault" />} />
          <Route path="*" element={<Vault to="/vault" replace />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Backdrop>
  );
};

export default App;
