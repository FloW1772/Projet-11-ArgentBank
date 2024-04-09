import './App.scss';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ConnectPage } from './pages/ConnectPage/ConnectPage';
import Useraccount from './pages/Useraccount/Useraccount';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import {useSelector} from "react-redux"

function App() {
  const token = useSelector((state)=>state.auth.token)
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/connect-page" element={<ConnectPage />} />
    <Route path="/user-account" element={token ? <Useraccount/> : <Navigate to="/connect-page"/>} />

    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
