import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { About, Blog, Contact, Courses, Home, Navbar, Footer } from './scenes'

const App = () =>(
    <div>
        <Navbar />

        <Routes>
            <Route exact path='' element={<Home />} />

            <Route path='/about-us' element={<About />} />

            <Route path='/courses' element={<Courses />} />

            <Route path='/blogs' element={<Blog />} />

            <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
    </div>
);

export default App;
