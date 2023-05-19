import './App.css';
import { Route, Routes } from 'react-router-dom';

import { About, Blog, Contact, Course, Home } from './containers'
import { Footer, Navbar } from './components';

const App = () =>(
    <div>
        <Navbar />
        <Routes>
            <Route exact path='' element={<Home />}  />
            <Route path='/about-us' element={<About />} />
            <Route path='/courses' element={<Course />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
);

export default App;
