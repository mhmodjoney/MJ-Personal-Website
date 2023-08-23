import React from 'react'
import NewCard from './newcom'

export default function protfolio() {
  let imageurl = "images/portfolio/alsahm.png";
  let imagemarten = "images/portfolio/martendo.png";
  let djblog = "images/portfolio/djblog.png";
  let webface = "images/portfolio/webface.png";
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
     
      <div className="card-content">
        <h2 className="card-title">Martendo  🚗</h2>
        <p className="card-description">Martendo is a delivery app that offers services related to food  ,medicine, grocery delivery and other for individuals and businesses in the syria   ,and also offer to see prices for meals in your city   . Established in 2019.</p>
        <h3 className='card-freamwork' >ASP core (in Robtic Mind)</h3>
        <a href='https://martendo.net/User/' className='card-freamwork' >live demo 🔴</a>
      </div>
       <div className="image-container">
               <NewCard url={imagemarten} />
      </div>
    </div>
    <div className="card">
      <div className="image-container">
               <NewCard url={djblog} />
      </div>
      <div className="card-content">
        <h2 className="card-title">Django blog 🐍</h2>
        <p className="card-description">Django app with essential features: user registration, login, and basic post management. Simplified interface for seamless content sharing and editing. Secure and efficient content management powered by Django.</p>
        <h3 className='card-freamwork' >Django</h3>
        <a href='https://django-blog-mj.onrender.com/' className='card-freamwork' >live demo 🔴</a>
      </div>
    </div>
        <div className="card">
     
      <div className="card-content">
        <h2 className="card-title">Face Recognition Wheelchair  🧑 </h2>
        <p className="card-description">Face Recognition Wheelchair: An innovative project merging facial recognition technology with wheelchair control. It empowers individuals with limited mobility to navigate effortlessly using facial expressions and gestures. With real-time recognition, intuitive controls, and adaptive obstacle detection, it revolutionizes mobility assistance for a seamless and personalized experience.</p>
        <h3 className='card-freamwork' >python   ---- arduino</h3>
     
        <a href='https://face-recognition-mj.onrender.com/' className='card-freamwork' >live demo 🔴</a>
      </div>
       <div className="image-container">
               <NewCard url={webface} />
      </div>
    </div>
    </div>
    </section>
  )
}
