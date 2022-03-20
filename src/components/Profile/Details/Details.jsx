import React from "react";
import { useHistory } from "react-router";
import style from "./detail.module.css";


function Details() {
  const history = useHistory();

  return (
    <div className={style.detailsbody}>
      <div className={style.contentbody}>
        <div className={style.smalldiv}>
          <p className={style.hi}>Hi, I am</p>
          <h1 className={style.name}>Vigneshprabu M</h1>
          <p className={style.fullstack}>
            Full-stack Web Developer | Competitive programmer
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1eaEl7KMnTT8gfhRaa9GLND0xAQhQ9OEO/view?usp=sharing"
          >
            {" "}
            <button className={style.resume}>RESUME</button>
          </a>
          <div style={{ marginTop: "20px" }}>
            <a target="_blank" href="https://github.com/Vigneshprabu1398">
              <img
                className={style.github}
                src="/github.svg"
                alt="github"
              ></img>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/vigneshprabu-m-a7372a1b8/">
              <img
                className={style.linkedin}
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>

            <a target="_blank" href="https://twitter.com/Vicky_prabu1398">
              <img className={style.twitter} src="/twitter.gif" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
