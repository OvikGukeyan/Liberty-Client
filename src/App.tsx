import { useEffect } from 'react';
import './App.css';
import LoginForm  from './components/LoginForm';
import ContactForm from './pages/ContactForm';
import Home from './pages/Home';
import { useAppDispatch } from './redux/store';
import { checkAuth } from './redux/Slices/AuthSlice';
import { Routes, Route } from 'react-router-dom';

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
      
        <Route path='/' element={<Home/>}/>

        <Route path='/contact' element={<ContactForm/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
