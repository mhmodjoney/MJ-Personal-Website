import React from "react";
import NewCard from "./newcom";

export default function protfolio() {
  let imageurl = "images/portfolio/alsahm.png";
  let luxforlessuae = "images/portfolio/luxforlessuae.png";
  let alkhadhralandscaping = "images/portfolio/alkhadhralandscaping.png";
  let urban = "images/portfolio/urban-automotive.png";
  let imagemarten = "images/portfolio/martendo.png";
  let djblog = "images/portfolio/djblog.png";
  let webface = "images/portfolio/webface.png";
  return (
    <section id="portfolio">
      <h1 className="card-grid-title">some of My Work ❤️‍🔥</h1>
      <div class="card-grid">
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">Urban Automotive (UAE)🏎️💨</h2>
            <p className="card-description">
              Urban Automotive UAE truly understands the importance of owning a
              unique vehicle. Thier bespoke modification services in the UAE are
              tailored to each individual customer's requirements, ensuring that
              the full Urban Automotive experience will always exceed
              expectations.
            </p>
            <h3 className="card-freamwork">(at Golden Click)</h3>

            <a href="https://urban-automotive.ae/" className="card-freamwork">
              live website 🔴
            </a>
          </div>
          <div className="scroll-img">
            <NewCard url={urban} />
          </div>
        </div>

        <div className="card">
          <div className="scroll-img">
            <NewCard url={alkhadhralandscaping} />
          </div>
          <div className="card-content">
            <h2 className="card-title">Al Aradh Al Khadhra 🍀</h2>
            <p className="card-description">
              To Al Aradh Al Khadhra, the UAE's leading provider of landscaping
              services. With years of experience and a passion for green spaces,
              we specialize in creating and maintaining beautiful, sustainable
              landscapes that enhance your property and lifestyle. Explore our
              wide range of services and let us help you create the outdoor
              space of your dreams.
            </p>
            <h3 className="card-freamwork">(at Golden Click)</h3>
            <a
              href="https://alkhadhralandscaping.com/"
              className="card-freamwork"
            >
              live website 🔴
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">Lux For Less⚜️</h2>
            <p className="card-description">
              Lux For Less Furniture Trading LLC is Sharjah's favorite furniture
              store, offering top-quality original antique furniture from
              Jaipur, India. They have a wide variety of bedroom sets, dining
              tables, office furniture, and home décor items. They also provide
              furniture delivery services in Dubai, Abu Dhabi, Ajman, and other
              areas. Salalah Furniture Trading LLC specializes in custom-made
              furniture, including stylish designs for homes and offices, such
              as wooden beds and couches.
            </p>
            <h3 className="card-freamwork">(at Golden Click)</h3>

            <a href="https://luxforlessuae.com/" className="card-freamwork">
              live website 🔴
            </a>
          </div>
          <div className="scroll-img">
            <NewCard url={luxforlessuae} />
          </div>
        </div>

        <div className="card">
          <div className="scroll-img">
            <NewCard url={imageurl} />
          </div>
          <div className="card-content">
            <h2 className="card-title">Al Saham Al Asfar Typing Center ✈️</h2>
            <p className="card-description">
              Al Saham Al Asfar Typing Center (ASATC) is a government
              transaction center that offers services related to visas, permits,
              and regulatory requirements for individuals and businesses in the
              United Arab Emirates. Established in 2022.
            </p>
            <h3 className="card-freamwork">(at Golden Click)</h3>

            <a
              href="https://alsahamtypingcenter.ae/"
              className="card-freamwork"
            >
              live website 🔴
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2 className="card-title">Martendo 🚗</h2>
            <p className="card-description">
              Martendo is a delivery app that offers services related to food
              ,medicine, grocery delivery and other for individuals and
              businesses in the syria ,and also offer to see prices for meals in
              your city . Established in 2019.
            </p>
            <h3 className="card-freamwork">(at Robtic Mind)</h3>

            <a href="https://martendo.net/User/" className="card-freamwork">
              live website 🔴
            </a>
          </div>
          <div className="scroll-img">
            <NewCard url={imagemarten} />
          </div>
        </div>
        <div className="card">
          <div className="scroll-img">
            <NewCard url={djblog} />
          </div>
          <div className="card-content">
            <h2 className="card-title">Django blog 🐍</h2>
            <p className="card-description">
              Django app with essential features: user registration, login, and
              basic post management. Simplified interface for seamless content
              sharing and editing. Secure and efficient content management
              powered by Django.
            </p>
            <h3 className="card-freamwork">(Personal Project)</h3>

            <a
              href="https://django-blog-mj.onrender.com/"
              className="card-freamwork"
            >
              live website 🔴
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2 className="card-title">Face Recognition Wheelchair 🧑 </h2>
            <p className="card-description">
              Face Recognition Wheelchair: An innovative project merging facial
              recognition technology with wheelchair control. It empowers
              individuals with limited mobility to navigate effortlessly using
              facial expressions and gestures. With real-time recognition,
              intuitive controls, and adaptive obstacle detection, it
              revolutionizes mobility assistance for a seamless and personalized
              experience.
            </p>
            <h3 className="card-freamwork">(Personal Project)</h3>
            <a
              href="https://face-recognition-mj.onrender.com/"
              className="card-freamwork"
            >
              live website 🔴
            </a>
          </div>
          <div className="scroll-img">
            <NewCard url={webface} />
          </div>
        </div>
      </div>
    </section>
  );
}
