import React from 'react'
function PublicationNormalBox(props) {



    return (
        <article
            className="post--normal post type-post status-publish format-standard has-post-thumbnail hentry category-publication category-work tag-104 tag-paper tag-security"
            data-tags="[2023,paper,security]"
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
                        srcSet={`${props.image} 880w, ${props.image} 1760w, ${props.image} 440w" `}
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
                            dateTime="2023-04-19T12:00:00+09:00"
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

export default PublicationNormalBox