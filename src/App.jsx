import { Route, Routes } from 'react-router-dom';

import { About, Blog, Contact, Courses, Home } from './containers'
import { Footer, Navbar } from './components';
import './App.css';

const App = () =>(
    <div>
        <Navbar />
        <Routes>
            <Route exact path='' element={<Home />}  />
            <Route path='/about-us' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
);

export default App;
