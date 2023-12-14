import React from 'react'
function NewsBox(props) {
    return (
        <article id="post-3316" className="news__card">

            <a href={`/etc/News/${props.id}`}>
                <div className="news__thumbnail__wrap">
                    <img
                        width="880"
                        height="500"
                        src={props.image}
                        className="news__thumbnail wp-post-image"
                        alt=""
                        decoding="async"
                        srcSet={`${props.image} 880w, ${props.image} 1760w, ${props.image} 440w`}
                        sizes="(max-width: 880px) 100vw, 880px"
                    />
                </div>

                <h4 className="news__title">
                    {props.title}
                </h4>

                <time
                    className="news__date"
                    dateTime="2021-12-20T21:22:59+09:00"
                >
                    {props.date}
                </time>
            </a>

        </article>
    )
}

export default NewsBox