import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import SponsorshipContents from './pages/Home/SponsorshipContent/SponsorshipContents/SponsorshipContents';
import BrandedContents from './pages/Home/BrandedContents/BrandedContents/BrandedContents';
import Breakings from './pages/Home/Breaking/Breakings/Breakings';
import AiGenerateContents from './pages/Home/AiGenerateContent/AiGenerateContents/AiGenerateContents';
import Login from './pages/User/Login/Login';
import SignUp from './pages/User/SignUp/SignUp';
import NotFound from './pages/Shared/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sponsorship-content' element={<SponsorshipContents />}></Route>
        <Route path='/breaking' element={<Breakings />}></Route>
        <Route path='/branded-content' element={<BrandedContents />}></Route>
        <Route path='/ai-generate-content' element={<AiGenerateContents />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
