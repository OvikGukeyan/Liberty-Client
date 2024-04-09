import { useEffect } from 'react';
import './App.css';
import ContactForm from './pages/ContactForm';
import Home from './pages/Home';
import { useAppDispatch } from './redux/store';
import { checkAuth } from './redux/Slices/AuthSlice';
import { Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])

  return (
    <div className="App">
      <Routes>
      
        <Route path='/' element={<Navigate to="/contact" />}/>
        {/* <Route path='/' element={<Home />}/> */}


        <Route path='/formular' element={<ContactForm/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
