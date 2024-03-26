import './App.css';
import LoginForm  from './components/LoginForm';
import ContactForm from './pages/ContactForm';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Home/> */}
      <ContactForm/>
    </div>
  );
}

export default App;
