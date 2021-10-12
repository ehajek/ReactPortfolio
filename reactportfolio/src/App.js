import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  const [categories] = useState([
    {
      name: "About Me",
      description: <About></About>
    },
    {
      name: 'Portfolio',
      description: <Portfolio></Portfolio>
    },
    { 
      name: "Contact", 
      description: <ContactForm></ContactForm>
    },
    { 
      name: "Resume", 
      description: <Resume></Resume>
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
      <Gallery currentCategory={currentCategory}></Gallery>



      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;