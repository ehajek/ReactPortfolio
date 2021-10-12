import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
      {
      name: 'Portfolio',
      description: 'This is a portfolio of my Coding Projects.'
    },
    { 
      name: 'Resume', 
      description: 'Take a look and Download a copy.' 
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}


export default App;