import React from 'react';

function About() {
  return (
    <section>
      <h1 id="about">About me</h1>
      <p></p>
      <img 
      src="./assets/images/me.jpeg" alt="Profile Photo"
      className="roundImage"
      ></img>
      
      <p className="mx-2 my-2">
      With over 9 years of hands-on experience architecting and implementing IT infrastructure. Specializing in data center architecture, data center migrations, and implementation of converged hardware, virtual systems, and project management.  I'm looking forward to using my Full Stack Development certificate for pursue a career in Infrastructure Automation. 
      </p>


    </section>
  );
}

export default About;