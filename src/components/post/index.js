import React from 'react';
import { Link } from 'gatsby';

import style from "./style.module.scss";

const Post = ({ title, author, slug, date, body}) => {
  return (
    <div>
      <h2 className={style.title}>
        <Link to={slug} className={style.link}>{title}</Link>
      </h2>
      <p className={style.info}>{author} | {date}</p>
      <p className={style.content}>{body}</p>
    </div>
  );
}
export default Post;
