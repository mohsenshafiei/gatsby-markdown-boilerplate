import React from "react"
import { Link } from "gatsby"

import style from "./style.module.scss"

const COLOR_NAMES = [
  "#92dbff",
  "#9696ff",
  "#96f6a1",
  "#ff9793",
  "#acf49d",
  "#6ff3e4",
  "#f0aeff",
  "#f6abb6",
  "#dec3c3",
  "#63ace5",
  "#f9caa7",
  "#83d0c9",
  "#88d8b0",
]

const getRandomArbitrary = (min, max) =>
  Math.round(Math.random() * (max - min) + min)

const random = pallete => {
  switch (pallete) {
    case "light":
      const randomNumber = getRandomArbitrary(0, COLOR_NAMES.length - 1)
      return COLOR_NAMES[randomNumber]
    default:
      return pallete
  }
}

const Post = ({ title, author, slug, date, body }) => {
  return (
    <div
      className={style.container}
      style={{
        background: random("#282c35"),
      }}
    >
      <h2 className={style.title}>
        <Link to={slug} className={style.link}>
          {title}
        </Link>
      </h2>
      <p className={style.info}>
        <span className={style.by}>By</span><span className={style.author}>{author}</span><span className={style.date}>{date}</span>
      </p>
      <p className={style.content}>{body}</p>
    </div>
  )
}
export default Post
