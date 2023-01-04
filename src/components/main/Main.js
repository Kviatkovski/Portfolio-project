import { useState, useEffect } from "react";
import Navigation from "./navbar/Navigation";
import AllProjects from "../pages/AllProjects";
import HtmlCss from "../pages/HtmlCss";
import Javascript from "../pages/Javascript";
import React from "../pages/React";
import { Routes, Route } from "react-router-dom";

import styles from "./Main.module.css";

const projects = [
  {
    name: "Quote Generator",
    image: "../../assets/images/img-1.jpg",
    url: "https://lukas-quote-generator.netlify.app/",
    type: "js",
    id: 1,
  },
  {
    name: "Omnifood Template",
    image: "../../assets/images/img-2.jpg",
    url: "https://lukas-omnifood-site.netlify.app/",
    type: "html/css",
    id: 2,
  },
  {
    name: "Monster Rolodexs",
    image: "../../assets/images/img-3.jpg",
    url: "https://luka-monster-site.netlify.app/",
    type: "react",
    id: 3,
  },
  {
    name: "Joke Teller",
    image: "../../assets/images/img-4.jpg",
    url: "https://lukas-joke-teller.netlify.app/",
    type: "js",
    id: 4,
  },
  {
    name: "Infinite Scroll",
    image: "../../assets/images/img-5.jpg",
    url: "https://lukas-infinite-scroll.netlify.app/",
    type: "js",
    id: 5,
  },
  {
    name: "Picture In Picture",
    image: "../../assets/images/img-6.jpg",
    url: "https://lukas-picture-in-picture.netlify.app/",
    type: "js",
    id: 6,
  },
  {
    name: "Light And Dark Mode",
    image: "../../assets/images/img-7.jpg",
    url: "https://lukas-light-dark-mode.netlify.app/",
    type: "js",
    id: 7,
  },
  {
    name: "Animated Template",
    image: "../../assets/images/img-8.jpg",
    url: "https://lukas-animated-template.netlify.app/",
    type: "js",
    id: 8,
  },
  {
    name: "Animated Navigation",
    image: "../../assets/images/img-9.jpg",
    url: "https://lukas-animated-navigation.netlify.app/",
    type: "js",
    id: 9,
  },
  {
    name: "Music Player",
    image: "../../assets/images/img-10.jpg",
    url: "https://lukas-music-player.netlify.app/",
    type: "js",
    id: 10,
  },
  {
    name: "Costume Countdown",
    image: "../../assets/images/img-11.jpg",
    url: "https://lukas-costume-countdown.netlify.app/",
    type: "js",
    id: 11,
  },
  {
    name: "Book keeper",
    image: "../../assets/images/img-12.jpg",
    url: "https://lukas-book-keeper.netlify.app/",
    type: "js",
    id: 12,
  },
  {
    name: "Crwn Clothing",
    image: "../../assets/images/img-13.jpg",
    url: "https://lukas-crwn-clothing.netlify.app/",
    type: "react",
    id: 13,
  },
  {
    name: "Video Player",
    image: "../../assets/images/img-14.jpg",
    url: "https://lukas-video-player.netlify.app/",
    type: "js",
    id: 14,
  },
  {
    name: "Form Validation",
    image: "../../assets/images/img-15.jpg",
    url: "https://lukas-form-validation.netlify.app/",
    type: "js",
    id: 15,
  },
  {
    name: "Spock Rock Game",
    image: "../../assets/images/img-16.jpg",
    url: "https://lukas-spock-rock-game.netlify.app/",
    type: "js",
    id: 16,
  },
  {
    name: "NASA API Pictures",
    image: "../../assets/images/img-17.jpg",
    url: "https://lukas-nasa-api-pictures.netlify.app/",
    type: "js",
    id: 17,
  },
  {
    name: "Math Sprint Game",
    image: "../../assets/images/img-18.jpg",
    url: "https://lukas-math-sprint-game.netlify.app/",
    type: "js",
    id: 18,
  },
];

const Main = () => {
  const [htmlCssProjects, setHtmlCssProjects] = useState([]);
  const [jsProjects, setJsProjects] = useState([]);
  const [reactProjects, setReactProjects] = useState([]);

  useEffect(() => {
    const filteredHtmlCss = () => {
      const htmlCssPro = projects.filter((project) => {
        return project.type === "html/css";
      });
      setHtmlCssProjects(htmlCssPro);
    };

    const filteredJs = () => {
      const jsPro = projects.filter((project) => {
        return project.type === "js";
      });
      setJsProjects(jsPro);
    };
    const filteredReact = () => {
      const reactPro = projects.filter((project) => {
        return project.type === "react";
      });
      setReactProjects(reactPro);
    };

    filteredHtmlCss();
    filteredJs();
    filteredReact();
  }, []);

  return (
    <main className={styles.main}>
      <Navigation />
      <section className={styles.section}>
        <Routes>
          <Route path="/" element={<AllProjects projects={projects} />} />
          <Route
            path="/htmlcss"
            element={<HtmlCss projects={htmlCssProjects} />}
          />
          <Route
            path="/javascript"
            element={<Javascript projects={jsProjects} />}
          />
          <Route path="/react" element={<React projects={reactProjects} />} />
        </Routes>
      </section>
    </main>
  );
};

export default Main;
