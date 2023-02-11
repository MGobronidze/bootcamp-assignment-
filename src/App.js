
import './App.css';
import HomePage from './components/HomePage';
import PriviteInfo from './components/PriviteInfo';
import Experience from './components/Experience';
import Education from './components/Education';
// import Resume from "./components/Resume"
import ResumeFinal from './components/ResumeFinal';
import { Route } from 'react-router';
import { Routes } from 'react-router';




function App() {
  return (
    
    <div className='container'>                    
         
          <Routes>
              <Route path="/PriviteInfo" element={<PriviteInfo />}/>
              <Route path="/" element={<HomePage />}/>
              <Route path="/Experience" element={<Experience />}/>
              <Route path="/Education" element={<Education />}/>
              <Route path="/ResumeFinal" element={<ResumeFinal/>}/>
          </Routes>


    </div>
  );
}

export default App;
