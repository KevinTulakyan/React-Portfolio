import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      name: "Bloc",
      pageLink: "www",
      repo:"",
      img:1,
    },
    {
      name: "test",
      pageLink: "www",
      repo:"",
      img:1,
    },
    {
      name: "test",
      pageLink: "www",
      repo:"",
      img:1,
    },
    {
      name: "test",
      pageLink: "www",
      repo:"",
      img:1,
    },
    {
      name: "test",
      pageLink: "www",
      repo:"",
      img:1,
    },
    {
      name: "Run Buddy",
      pageLink: "www",
      repo:"",
      img:1,
    }
  ])

  const apps = projects.map((apps) =>
  <div className="px-2">
    <h2>{apps.name}</h2>
    <a href={apps.pageLink} target="_blank" rel="noreferrer">Link</a>
    <a href={apps.repo} target="_blank" rel="noreferrer">Github</a>
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
