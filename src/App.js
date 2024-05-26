
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './Footer';
import MoreProjects from './MoreProjects';

import Home from './Pages/Home';
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App flex flex-col justify-between min-h-screen">
      
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<MoreProjects/>} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
