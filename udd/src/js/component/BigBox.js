import React from "react";
export default function BigBox(props) {
  return (
    <article
      id="post-7268"
      className="post--big post-7268 post type-post status-publish format-standard has-post-thumbnail hentry category-award category-work"
      data-tags="[]"
    >
      <a href={props.url} rel="bookmark" className="post__link">
        <div className="post__thumbnail__wrap">
          <img
            width="800"
            height="428"
            src={props.image}
            className="post__thumbnail wp-post-image"
            alt=""
            decoding="async"
            fetchpriority="high"
            srcSet={`${props.image} 800w, ${props.image} 768w, ${props.image} 729w, ${props.image} 480w" `}
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        <div className="post__details">
          <h2 className="post__title">{props.title}</h2>

          <div className="post__info">
            <time
              className="post__date post__posted-on"
              dateTime="2023-08-31T15:13:41+09:00"
            >
              <span className="visually-hidden">Posted on</span>
              {props.date}
            </time>
          </div>
        </div>
      </a>
    </article>
  );
}
