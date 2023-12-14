
import React from 'react'
function PeopleNormalBox(props) {
    return (

        <article
            className="post--normal post type-post status-publish format-standard has-post-thumbnail hentry category-stories"
            data-tags="[]"
        >
            <a className="post__link" href={`/People/Story/${props.id}`}>
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
                    <span className="post__interviewee">
                        {props.name}
                    </span>

                    <h2 className="post__title">
                        {props.role}
                    </h2>

                    <div className="post__info">
                        <time
                            className="post__date post__posted-on"
                            dateTime="2021-12-24T09:00:00+09:00"
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

export default PeopleNormalBox
