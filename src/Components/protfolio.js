import React from 'react'
import NewCard from './newcom'

export default function protfolio() {
  let imageurl = "images/portfolio/alsahm.png";
  let imagemarten = "images/portfolio/marten.jpg";
  return (  <section id="portfolio">
  <h1 className="card-grid-title">My Work ❤️‍🔥</h1>
    <div class="card-grid">
      
 <div className="card">
      <div className="image-container">
             
               <NewCard url={imageurl} />
      </div>
      <div className="card-content">
        <h2 className="card-title">Al Saham Al Asfar Typing Center ✈️</h2>
        <p className="card-description">Al Saham Al Asfar Typing Center (ASATC) is a government transaction center that offers services related to visas, permits, and regulatory requirements for individuals and businesses in the United Arab Emirates. Established in 2022.</p>
        <h3 className='card-freamwork' >wordprees</h3>
        <a href='https://alsahamtypingcenter.ae/' className='card-freamwork' >live demo 🔴</a>
      </div>
    </div>

    <div className="card">
      <div className="image-container">
               <NewCard url={imagemarten} />
      </div>
      <div className="card-content">
        <h2 className="card-title">martendo  🚗</h2>
        <p className="card-description">'martendo is a delivery app that offers services related to food  ,medicine, grocery delivery and other for individuals and businesses in the syria   ,and also offer to see prices for meals in your city   . Established in 2019.</p>
        <h3 className='card-freamwork' >wordprees</h3>
        <a href='https://martendo.net/User/' className='card-freamwork' >live demo 🔴</a>
      </div>
    </div>
    </div>
    </section>
  )
}
