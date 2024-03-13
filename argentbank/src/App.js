import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ConnectPage } from './pages/ConnectPage/ConnectPage';
import Useraccount from './pages/Useraccount/Useraccount';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/connect-page" element={<ConnectPage />} />
    <Route path="/user-account" element={<Useraccount/>} />

    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
