import React from 'react';

function Resume() {
    return(
        <section id="resume">
            <h1>Some of my skills</h1>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>javaScript</li>
                <li>jQuery</li>
                <li>responisive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySql, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
            <h1>Resume</h1>
            <a className="resume" href='https://docs.google.com/document/d/1nqjwShgkQaoMNcSMlu7b6HK3r5zV6ZazYAkDDNkuOSc/edit' target="_blank" rel="noreferrer">
                Link to Resume
            </a>
        </section>
    );
}

export default Resume;