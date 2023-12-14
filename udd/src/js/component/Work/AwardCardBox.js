import React from 'react'
function AwardCardBox(props) {
    return (
        <article
            className="post--card post--ajax type-post status-publish format-standard has-post-thumbnail hentry category-award category-work tag-83 tag-digital-service-design tag-ux"
            data-tags="[2021,Digital service design,UX]"
        >
            <a
                href={`/Work/Award/${props.id}`}
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
                        srcSet={`${props.image} 880w, ${props.image} 1760w, ${props.image} 440w" `}
                        sizes="(max-width: 880px) 100vw, 880px"
                    />
                    {props.brand === 'IF' && (
                        <img
                            width="32"
                            height="32"
                            src="https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-32x32.jpg"
                            className="post__award__icon wp-post-image"
                            alt=""
                            decoding="async"
                            srcSet="https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-32x32.jpg 32w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-320x320.jpg 320w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-160x160.jpg 160w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-390x390.jpg 390w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-480x480.jpg 480w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-64x64.jpg 64w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb.jpg 500w"
                            sizes="(max-width: 32px) 100vw, 32px"
                        />

                    )}
                    {props.brand === 'RED' && (
                        <img
                            width="32"
                            height="32"
                            src="https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-32x32.jpg"
                            className="post__award__icon wp-post-image"
                            alt=""
                            decoding="async"
                            loading="lazy"
                            srcSet="https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-32x32.jpg 32w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-320x320.jpg 320w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-160x160.jpg 160w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-480x480.jpg 480w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-64x64.jpg 64w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-150x150.jpg 150w"
                            sizes="(max-width: 32px) 100vw, 32px"
                        />

                    )}
                </div>

                <div className="post__details">
                    <h2 className="post__title">
                        {props.title}
                    </h2>

                    <div className="post__info">
                        <span className="post__person post__winner">
                            {props.name}
                        </span>
                        <time
                            className="post__date post__posted-on"
                            dateTime="2021-05-10T20:44:00+09:00"
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

export default AwardCardBox



