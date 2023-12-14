import React from 'react'
function PublicationCardBox(props) {
    return (
        <article
            className="post--card post--ajax  type-post status-publish format-standard has-post-thumbnail hentry category-publication"
            data-tags="[]"
        >
            <a
                href={`/Work/Publication/${props.id}`}
                rel="bookmark"
                className="post__link"
            >
                <div className="post__thumbnail__wrap">
                    <img
                        width="880"
                        height="500"
                        src={props.image}
                        className="post__thumbnail wp-post-image"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet={`${props.image} 880w, ${props.image} 440w" `}
                        sizes="(max-width: 880px) 100vw, 880px"
                    />
                </div>

                <div className="post__details">
                    <h2 className="post__title">
                        {props.title}
                    </h2>

                    <div className="post__info">
                        <time
                            className="post__date post__posted-on"
                            dateTime="2019-06-18T12:00:00+09:00"
                        >
                            <span className="visually-hidden">
                                Posted on
                            </span>
                            {props.date}
                        </time>
                    </div>
                </div>
            </a>
        </article>

    )
}

export default PublicationCardBox



