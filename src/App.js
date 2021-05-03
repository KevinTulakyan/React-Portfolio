import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import githubLogo from "../src/assests/logos/github.png";
import linkedinLogo from "../src/assests/logos/linkedin.png"
import stackLogo from "../src/assests/logos/stack.png";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [AboutSelected, setAboutSelected] = useState(true);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [ResumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        AboutSelected={AboutSelected}
        setAboutSelected={setAboutSelected}
        PortfolioSelected={PortfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        ResumeSelected={ResumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {contactSelected
          ? (<><ContactForm></ContactForm></>)
          : (<></>)}
        {AboutSelected
          ? (<><About></About> </>)
          : (<></>)}
        {PortfolioSelected
          ? (<><Portfolio></Portfolio></>)
          : (<></>)}
        {ResumeSelected
          ? (<><Resume></Resume></>)
          : (<></>)}
      </main>
      <footer className="footer" >
        <a href="https://github.com/KevinTulakyan" target="_blank" rel="noreferrer">
          <img src={githubLogo} className="github-logo" alt="Github Logo"></img></a>
        <a href="https://www.linkedin.com/in/kevin-tulakyan-267032201/" target="_blank" rel="noreferrer">
          <img src={linkedinLogo} className="linkedin-logo" alt="Github Logo"></img></a>
        <a href="https://stackoverflow.com/users/15821701/kevin-tulakyan" target="_blank" rel="noreferrer">
          <img src={stackLogo} className="stack-logo" alt="Github Logo"></img></a>
      </footer>
    </div>
  );
}

export default App;
