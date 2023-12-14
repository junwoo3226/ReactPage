import React from 'react'
function LabBox(props) {
    return (


        <li className="design-labs__item post--card">
            <div className="post__thumbnail__wrap">
                <a href={`/etc/Labs/${props.lab}`}>
                    <img
                        width="2000"
                        height="1000"
                        src={props.image}
                        className="post__thumbnail lab wp-post-image"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet={`${props.image} 2000w, ${props.image} 1024w, ${props.image} 1920w, ${props.image} 768w, ${props.image} 1536w, ${props.image} 1440w, ${props.image} 780w, ${props.image} 480w, ${props.image} 1000w" `}
                        sizes="(max-width: 2000px) 100vw, 2000px"
                    />
                </a>
            </div>

            <div className="post__details design-labs__details">
                <h3 className="post__title design-labs__title">
                    <a href="#">
                        {props.title}
                    </a>
                </h3>

                <div className="post__tags design-labs__tags">
                    Keywords: {props.keyword}
                </div>

                <p className="post__person design-labs__professor">
                    Prof. {props.name}
                </p>
            </div>
        </li>
    )
}

export default LabBox




