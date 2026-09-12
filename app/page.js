"use client";

import "./globals.css";

export default function Home() {
  return (
    <main>

      {/*NAVIGATION*/}

      <nav className="navbar">

        <div className="nav-logo">
          <span className="logo-mark">B</span>
          <div>
            <strong>ALBAY</strong>
            <small>BICOL • PHILIPPINES</small>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#experiences">Experiences</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Visit</a>
        </div>

        <a href="#location" className="nav-button">
          Plan Your Trip
        </a>

      </nav>


      {/*HERO*/}

      <section id="home" className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-label">
            <span></span>
          WELCOME TO BICOL
          </div>

          <h1>
            Discover
            <br />
            <em>Albay.</em>
          </h1>

          <p>
            A beautiful destination where majestic landscapes,
            local experiences, and the natural charm of Albay
            come together.
          </p>

          <div className="hero-actions">

            <a href="#discover" className="primary-button">
              Explore Albay
              <span>→</span>
            </a>

            <a href="#gallery" className="secondary-button">
              View Gallery
            </a>

          </div>

        </div>

      </section>

      {/*INTRO*/}

      <section className="intro section">

        <div className="intro-number">
          01
        </div>

        <div className="intro-content">

          <p className="eyebrow">
            A PLACE TO SLOW DOWN
          </p>

          <h2>
            Find your way to
            <br />
            <span>Albay.</span>
          </h2>

          <p className="intro-text">
            Albay offers a refreshing escape surrounded by
            beautiful landscapes and the natural beauty of
            the Bicol Region. Whether you're looking for
            peaceful views, outdoor experiences, or a chance
            to discover local places, Albay gives you space
            to explore at your own pace.
          </p>

          <a href="#experiences" className="text-link">
            Discover experiences <span>↗</span>
          </a>

        </div>

        <div className="intro-image">

          <img
            src="https://lakbaypinas.com/wp-content/uploads/2025/04/snapins-ai_3032288557114569818.jpg"
            alt="Mayon Volcano in Albay"
          />

          <div className="image-caption">
            <span>01</span>
            ALBAY, BICOL
          </div>

        </div>

      </section>


      {/*DISCOVER*/}

      <section id="discover" className="discover section">

        <div className="section-header">

          <div>

            <p className="eyebrow">
              EXPLORE THE DESTINATION
            </p>

            <h2>
              Discover <span>Albay</span>
            </h2>

          </div>

          <p>
            Explore the scenery, atmosphere, and experiences
            that make Albay worth discovering.
          </p>

        </div>


        <div className="destination-grid">

          {/* CARD 1 */}

          <article className="destination-card large-card">

            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAKvm1lf0Khtv44plMGKIY4Jxeb2PIRBuwXNGNIL-tysjYr0mdIn2IuGYKSld3uTS1cfpHUmOrw6LfWV6hAuQVEFc4BkZeTy-pZYoRm-_PhTtJpQGOAsasZZ_UGYdEEOh8xibu9VdkG4M/s1600/Mayon+2.JPG"
              alt="Scenic Albay"
            />

            <div className="card-overlay"></div>

            <div className="card-info">

              <span>01</span>

              <h3>
                Scenic Views
              </h3>

              <p>
                Take in the beautiful scenery and discover
                breathtaking views around Albay.
              </p>

            </div>

          </article>

          {/* CARD 2 */}

          <article className="destination-card">

            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLGCRsS6t7jCGDDL1R_8L4CwVnEweQewTvM9oxWa_a46VpNse-E1nF_0560Wlgi1JbEoie4YDmSR5udREBP3MVBk39LfjaVe4YdQxPVmU5f0esSiXOo7I8kCZyQqJZ7EQNsxDhYD8hru4I/s1373/vera-falls-in-albay-philippines-blairvillanueva-02.jpg"
              alt="Nature in Albay"
            />

            <div className="card-overlay"></div>

            <div className="card-info">

              <span>02</span>

              <h3>
                Nature Escape
              </h3>

              <p>
                Step away from the busy routine and enjoy
                the natural beauty and peaceful environment
                of Albay.
              </p>

            
            </div>

          </article>

          {/* CARD 3 */}

          <article className="destination-card">

            <img
              src="https://www.ikea.com/images/festival-photo-by-hitoshi-namura-participants-in-bright-colo-72933adf2e849181de5f7db9cf896796.jpg"
              alt="Albay destination"
            />

            <div className="card-overlay"></div>

            <div className="card-info">

              <span>03</span>

              <h3>
                Local Experience
              </h3>

              <p>
                Experience the atmosphere, culture, and
                character of the local communities in Albay.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/*EXPERIENCES*/}

      <section id="experiences" className="experiences">

        <div className="experience-image">

          <img
            src="https://legazpi.gov.ph/wp-content/uploads/2023/04/318698104_197718762818499_980917034408178879_n-1.jpg"
            alt="Albay experience"
          />

        </div>

        <div className="experience-content">

          <p className="eyebrow">
            THE ALBAY EXPERIENCE
          </p>

          <h2>
            More than a
            <br />
            destination.
          </h2>

          <p>
            Sometimes the best travel memories come from
            slowing down, appreciating the scenery, and
            experiencing a place without rushing.
          </p>

          <div className="experience-list">

            <div>
              <span>01</span>
              <strong>Explore</strong>
              <p>Discover places and scenic surroundings.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Experience</strong>
              <p>Enjoy the local atmosphere and environment.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Remember</strong>
              <p>Take home memories from your journey.</p>
            </div>

          </div>

        </div>

      </section>


      {/*GALLERY*/}

      <section id="gallery" className="gallery section">

        <div className="gallery-header">

          <div>

            <p className="eyebrow">
              VISUAL JOURNEY
            </p>

            <h2>
              See <span>Albay.</span>
            </h2>

          </div>

          <p>
            A glimpse of the scenery and atmosphere waiting
            to be discovered.
          </p>

        </div>


        <div className="photo-grid">

          <div className="photo photo-one">

            <img
              src="https://trevallytravel.com/wp-content/uploads/2015/11/Sumlang-Lake2-Camalig-Albay-1.jpeg"
              alt="Albay view"
            />

          </div>

          <div className="photo photo-two">

            <img
              src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/afcttxmzfahzkwbzukdl/MisibisBayResortDayTourinAlbayBicol.jpg"
              alt="Albay relax and chill"
            />

          </div>

          <div className="photo photo-three">

            <img
              src="https://lakbaypinas.com/wp-content/uploads/2024/08/Snapinsta.app_446230455_850010336939020_1289556016244100657_n_1080-2.jpg.webp"
              alt="Albay destination"
            />

          </div>

          <div className="photo photo-four">

            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLq_Hj4q3ZV3L_9kxlTnNKxX1eUyJWRY4hD7rzvYEomXu4erMObtuhBcOu7kv8msnV9dkD_SNiHYBJOvM9zeQpzi2y6u-acsx0Weql9x3MnN-Z_0rCGtmesHNVmtXoM5vFMGlmc8mo3vxV/s2048/IMG_7599.jpg"
              alt="Albay scenery"
            />

          </div>

          <div className="photo photo-five">

            <img
              src="https://cdn.getyourguide.com/img/tour/70f90eb9e50d67438d9b3b3ca590da05c4e6e2504f4f5f108d701f15db63cb55.jpg/148.jpg"
              alt="Albay Bicol"
            />

          </div>

        </div>

      </section>


      {/*LOCATION*/}

      <section id="location" className="location">

        <div className="location-background"></div>

        <div className="location-content">

          <p className="eyebrow">
            PLAN YOUR JOURNEY
          </p>

          <h2>
            Albay is
            <br />
            waiting for you.
          </h2>

          <p>
            Start planning your journey and discover
            Albay, Bicol.
          </p>

          <div className="location-card">

            <div className="location-pin">
              ⌖
            </div>

            <div>

              <small>DESTINATION</small>

              <h3>
                Albay, Bicol
              </h3>

              <p>
                Bicol Region, Philippines
              </p>

            </div>

          </div>

          <a
            href="https://www.google.com/maps/search/Albay,+Bicol"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Open in Google Maps
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}