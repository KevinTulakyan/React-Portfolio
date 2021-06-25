import React, { useState } from 'react';
import img1 from '../../assests/images/run.PNG'
import img2 from '../../assests/images/funds.png'
import img3 from '../../assests/images/musix.png'
import img4 from '../../assests/images/weather.png'
import img5 from '../../assests/images/bloc2.png'
import img6 from '../../assests/images/the-bloc.png'


function Portfolio() {
  const [projects] = useState([
    {
      name: "Bloc",
      pageLink: "https://bloc-v1.herokuapp.com/",
      repo: "https://github.com/jcc83267/Hrd-Cpy",
      imgId: img6,
    },
    {
      name: "Musix",
      pageLink: "https://evanteems.github.io/Musix-Genre/",
      repo: "https://github.com/evanteems/Musix-Genre",
      imgId: img3,
    },
    {
      name: "The Bloc 2.0",
      pageLink: "https://the-bloc.herokuapp.com/",
      repo: "https://github.com/jmrendon48/bloc-2.0",
      imgId: img5,
    },
    {
      name: "Weather Dashboard",
      pageLink: "https://kevintulakyan.github.io/weather-app/",
      repo: "https://github.com/KevinTulakyan/weather-app",
      imgId: img4,
    },
    {
      name: "Budget Tracker",
      pageLink: "https://peaceful-lake-26196.herokuapp.com/",
      repo: "https://github.com/KevinTulakyan/Budget-Tracker",
      imgId: img2,
    },
    {
      name: "Run Buddy",
      pageLink: "https://kevintulakyan.github.io/run-buddy/",
      repo: "https://github.com/KevinTulakyan/run-buddy",
      imgId: img1,
    }
  ])

  const apps = projects.map((apps, i) =>
  
    <div className="px-2"
      
      onClick={() => window.open(`${apps.pageLink}`, "_blank")}>
      <div><h2 className= "titles">{apps.name}</h2></div>
      <div className={`project${i} repoBG`} style={{
        backgroundImage: `url(${apps.imgId})`
      }}></div>
    </div>
  )
  return (
    <section className="my-5">
      <h1 id='about' >Portfolio</h1>
      <div className="flex-row">
        {apps}
      </div>
    </section>
  );
}
export default Portfolio;
