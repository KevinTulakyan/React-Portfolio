import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      name: "Bloc",
      pageLink: "https://bloc-v1.herokuapp.com/",
      repo:"https://github.com/jcc83267/Hrd-Cpy",
      img:0,
    },
    {
      name: "Musix",
      pageLink: "https://evanteems.github.io/Musix-Genre/",
      repo:"https://github.com/evanteems/Musix-Genre",
      img:1,
    },
    {
      name: "The Bloc 2.0",
      pageLink: "https://the-bloc.herokuapp.com/",
      repo:"https://github.com/jmrendon48/bloc-2.0",
      img:6,
    },
    {
      name: "Weather Dashboard",
      pageLink: "https://kevintulakyan.github.io/weather-app/",
      repo:"https://github.com/KevinTulakyan/weather-app",
      img:2,
    },
    {
      name: "Budget Tracker",
      pageLink: "https://peaceful-lake-26196.herokuapp.com/",
      repo:"https://github.com/KevinTulakyan/Budget-Tracker",
      img:3,
    },
    {
      name: "Run Buddy",
      pageLink: "https://kevintulakyan.github.io/run-buddy/",
      repo:"https://github.com/KevinTulakyan/run-buddy",
      img:5,
    }
  ])

  const apps = projects.map((apps,i) =>
  <div className="px-2">
    <h2>{apps.name}</h2>
    <a href={apps.pageLink} target="_blank" rel="noreferrer">Link</a>
    <a href={apps.repo} target="_blank" rel="noreferrer">Github</a>
    <div className={`project${i} repoBG`}></div>
  </div>
  )
  return (
    <section className="my-5">
      <h1 id='about' >Portfolio</h1>
        <div className= "flex-row">
         {apps}
        </div>
    </section>
  );
}
export default Portfolio;
