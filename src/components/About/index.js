import React from 'react';
import Me from '../../assests/images/me.jpg'
function About() {
    return (
        <section className="my-5 aboutme" >
            <div>
                <h1 id='about'>About Me</h1>
                
            </div>

            <p className="aboutme">
                <img src={Me} ></img>
                Front end web developer leveraging background in psychology to provide unique perspectives on how end-users interact with websites and software platforms.
                Earned a certificate in Full Stack Web Development from the UCLA Extension Coding Boot Camp.
                Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development.
                Strengths in creativity, teamwork, and building projects from ideation to execution.
            </p>


        </section>
    );
}

export default About;