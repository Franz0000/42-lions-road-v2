import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Members from './components/Members';
import Developer from './components/Developer';
import Album from './components/Album';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Album /> */}
      <Members />
      <Developer/>
      <Footer />
      {/* <ImageUpload /> */}
    </React.Fragment>
  );
}

export default App;
