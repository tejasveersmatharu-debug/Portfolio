"use client";
import myntrass from "../images/myntraSS.png";
import socially from "../images/socially.png";
import weather from "../images/weather.png";
import currently from "../images/currently.png";
import pyclima from "../images/pyclima.png";
import gitpro from "../images/gitpro.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useState, useEffect } from "react";

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [vw, setVw] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  // Handle screen width
  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Disable animation on mobile
  const isMobile = vw < 700;
  // Calculate exact scroll distance
  useEffect(() => {
    const update = () => {
      const gallery = containerRef.current?.querySelector(".gallery");
      const container = containerRef.current;

      if (!gallery || !container) return;

      const scrollWidth = gallery.scrollWidth;
      const containerWidth = container.offsetWidth;

      setMaxTranslate(scrollWidth - containerWidth + 20); // keep your padding
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -maxTranslate],
  );

  return (
    <div id="example" className="outer">
      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          <h1 className="impact">Projects.</h1>

          <motion.div className="gallery" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{
                  "--item-color": item.color,
                  "--item-image": `url(${item.image})`,
                }}
              >
                <div className="item-content">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="project-img"
                  />
                  <span className="item-number">0{item.id}</span>

                  <h2>{item.label}</h2>

                  <p className="item-desc">{item.description}</p>

                  <div className="tech-stack">
                    {item.tech.map((t, i) => (
                      <span key={i} className="tech">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="buttons">
                    <a href={item.live} target="_blank" className="btn live">
                      Visit Site
                    </a>

                    <a href={item.github} target="_blank" className="btn code">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="outro-section">
        <p className="big"></p>
      </section>

      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            body {
                overflow-x: hidden;
            }

            #example {
                height: auto;
                overflow: visible;
            }

            .intro-section {
                height: 35vh;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                text-align: center;
                padding-bottom: 0px;
            }

            .intro-section h1 {
                font-size: clamp(36px, 8vw, 72px);
                color: #f5f5f5;
                margin: 0;
                text-transform: uppercase;
            }

            .scroll-container {
                height: 300vh;
                position: relative;
            }

            .sticky-wrapper {
                position: sticky;
                top: 0;
                height: 100vh;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                overflow: hidden;
            }

            .gallery {
                display: flex;
                gap: 30px;
                will-change: transform;
                padding-left: 50px; /* IMPORTANT: gives left start space */
            }

            .project-img {
                  width: 100%;
                  height: 200px;
                  object-fit: cover;
                  border-radius: 10px;
                  margin-bottom: 12px;

                  display: block;
                  margin-left: auto;
                  margin-right: auto;
            }
            .gallery-item {
                flex-shrink: 0;
                flex: 0 0 400px;
                width: 400px;
                height: 500px;
                border-radius: 12px;
                position: relative;
                overflow: hidden;
                background-size: cover;
                background-position: center;
            }

            .gallery-item::before {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    to bottom,
                    transparent 40%,
                    var(--item-color)
                );
                mix-blend-mode: multiply;
            }

            .item-content {
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 1;
            }
            .item-content {
                position: absolute;
                inset: 0;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;   /* centers horizontally */
                justify-content: flex-start; /* top aligned */
                text-align: center;
              }


            .item-number {
                font-size: 14px;
                color: var(--item-color);
                font-family: "Azeret Mono", monospace;
                display: block;
                margin-bottom: 8px;
            }

            .gallery-item h2 {
                font-size: 28px;
                font-weight: 600;
                color: #f5f5f5;
                margin: 0;
            }

            .outro-section {
                height: 0vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #0B0F19;
            }

            @media (max-width: 700px) {
                .sticky-wrapper {
                    width: 100%;
                }

                .gallery {
                    gap: 15px;
                    padding-left: 0 !important;
                    margin-right: 0 !important;
                    margin-left: 0 !important;
                }

                .gallery-item {
                    width: min(90vw, 340px) !important;
                    height: 440px !important;
                    flex: 0 0 440px !important;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .gallery {
                    transform: none !important;
                }
                .scroll-container {
                    height: auto;
                }
                .sticky-wrapper {
                    position: relative;
                    height: auto;
                    width: 100%;
                    overflow-x: auto;
                    padding: 50px 0;
                }
            }
        `}</style>
  );
}

/**
 * ==============   Data   ================
 */

const items = [
  {
    id: 1,
    color: "#005cf08a",
    label: "E-Commerce Clone",
    image: myntrass,
    description:
      "Clone of an E-Commerce WebApp, which allows us to add, discard, and total the items in Cart.",
    tech: ["React", "JavaScript", "CSS", "HTML", "API"],
    live: "https://e-commerce-clone-i576olzym-tejasveersmatharu-debugs-projects.vercel.app/",
    github: "https://github.com/tejasveersmatharu-debug/E-Commerce-Clone",
  },
  {
    id: 2,
    color: "#005cf08a",
    label: "PyClima Expert",
    image: pyclima,
    description:
      "A platform where you can upload netCDF files to get visual illustrations!",
    tech: ["React", "JavaScript", "HTML", "CSS", "Python-Backend"],
    live: "https://py-clima.vercel.app/",
    github: "https://github.com/tejasveersmatharu-debug/pyClima",
  },
  {
    id: 3,
    color: "#005cf08a",
    label: "Social.ly",
    image: socially,
    description:
      "A Social Media Dashboard, allowing us to Delete and Add custom posts, making changes to APIs.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Router"],
    live: "https://soci-tztz.vercel.app/",
    github: "https://github.com/tejasveersmatharu-debug/Soci",
  },
  {
    id: 4,
    color: "#005cf08a",
    label: "EzWeather",
    image: weather,
    description:
      "Easy to Read Weather Dashboard which shows Weather information we need in day-to-day life.",
    tech: ["API", "JavaScript", "HTML", "CSS"],
    live: "https://weather-app-v1-gamma.vercel.app/",
    github: "https://github.com/tejasveersmatharu-debug/Weather-App-V1-",
  },
  {
    id: 5,
    color: "#005cf08a",
    label: "Current.ly",
    image: currently,
    description:
      "Interactive Dashboard which lets us fetch Live exchange rates between different Currencies.",
    tech: ["API", "JavaScript", "HTML", "CSS"],
    live: "https://crurrent-ly-7iul.vercel.app/",
    github: "https://github.com/tejasveersmatharu-debug/Crurrent-ly",
  },
  {
    id: 6,
    color: "#005cf08a",
    label: "GitHub Profile-finder",
    image: gitpro,
    description: "Interactive dashboard with real-time UI updates.",
    tech: ["JavaScript", "API", "CSS"],
    live: "https://github-profile-finder-jet-two.vercel.app/",
    github: "https://github.com/tejasveersmatharu-debug/Github-Profile-Finder",
  },
];

const ITEM_WIDTH = 400;
const GAP = 30;
