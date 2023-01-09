import { useState, useEffect } from "react";
import Navigation from "./navbar/Navigation";
import AllProjects from "../pages/AllProjects";
import HtmlCss from "../pages/HtmlCss";
import Javascript from "../pages/Javascript";
import React from "../pages/React";
import { Routes, Route } from "react-router-dom";

import projects from "../../projects";

import styles from "./Main.module.css";

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
