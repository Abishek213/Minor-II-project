import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SearchEvent from './Pages/SearchEvent';
import CreateEvent from './Pages/CreateEvent';
import About from './Pages/About/About';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';
import LoginSignup from './Pages/LoginSignup';


const App = () => {
  return (
    <Router>
      <Layout>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-event" element={<SearchEvent />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;