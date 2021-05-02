import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
    } = props;


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                    </span>{" "}
                    Kevin Tulakyan Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row px-1" >
                    <li className= "mx-1">
                        <span onClick={() => { setAboutSelected(true); setContactSelected(false); setPortfolioSelected(false); setResumeSelected(false) }}>
                            About Me
                        </span>
                    </li>
                    <li className= "mx-1">
                        <span onClick={() => { setAboutSelected(false); setContactSelected(false); setPortfolioSelected(true); setResumeSelected(false) }}>
                            Portfolio
                        </span>
                    </li>
                    <li className= "mx-1"> 
                        <span onClick={() => { setAboutSelected(false); setContactSelected(true); setPortfolioSelected(false); setResumeSelected(false) }}>
                        Contact
                        </span>
                    </li>
                    <li className= "mx-1">
                        <span onClick={() => {setAboutSelected(false); setContactSelected(false); setPortfolioSelected(false); setResumeSelected(true)}}>
                        Resume
                        </span>  
                    </li>                
                </ul>
            </nav>
        </header >
    );
}

export default Nav;