import React from "react"
import style from "./style.module.scss"
import Layout from "../layout"
import { Maze } from "../components/maze"
import profile from "../static/images/profile.png"
import cv from "../static/cv/cv.pdf"

const App = () => (
  <Layout>
    <div className={style.container}>
      <Maze />
      <div className={style.wrapper}>
        <div className={style.circleWarpper}>
          <div className={style.circle} />
          <img className={style.avatar} src={profile} alt="avatar" />
        </div>
        <h1 className={style.title}>MOHSEN SHAFIEI</h1>
        <h1 className={style.role}>Frontend Engineer</h1>
        <div className={style.wlink}>
          <a
            className={style.link}
            href={cv}
            rel="noopener noreferrer"
            target="_blank"
          >
            CV
          </a>
          <a
            className={style.link}
            rel="noopener noreferrer"
            href="https://github.com/mohsenshafiei"
            target="blank"
          >
            Github
          </a>
          <a
            className={style.link}
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mohsen-shafiei-tafreshi-7250847b/"
            target="blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default App
