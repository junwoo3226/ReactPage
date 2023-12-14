import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function PublicationDetail() {
    const { id } = useParams();

    const [Publication, setPublication] = useState([]);

    useEffect(() => {
        fetch('/api/publication/')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        setPublication(data[i]);
                    }
                }
                console.log(data);
            });
    }, [])





    return (
        <main id="primary" className="site__main layout--single">


            <article className=" post type-post status-publish format-standard has-post-thumbnail hentry category-publication category-work">
                <header className="single__header">
                    <div className="single__hero">
                        <img
                            width="4781"
                            height="3384"
                            src={Publication.image}
                            className="attachment-hero size-hero wp-post-image"
                            alt=""
                            decoding="async"
                            fetchpriority="high"
                            srcSet={`${Publication.image} 4781w, ${Publication.image} 1024w, ${Publication.image} 1526w, ${Publication.image} 768w, ${Publication.image} 1536w, ${Publication.image} 2048w, ${Publication.image} 2034w, ${Publication.image} 1271w, ${Publication.image} 551w, ${Publication.image} 452w" `}
                            sizes="(max-width: 4781px) 100vw, 4781px"
                        />
                    </div>

                    <div className="single__details">

                        <h1 className="single__title">
                            {Publication.title}
                        </h1>




                        <time className="single__date" dateTime="2023-07-18T19:13:59+09:00">
                            <span className="visually-hidden">Posted on</span>
                            {Publication.date}
                        </time>

                    </div>
                </header>

                <div className="single__content block-area">
                    <div dangerouslySetInnerHTML={{ __html: Publication.text }} />

                </div>
            </article>

            <aside className="closer__wrap">
                <img className="closer" width="30" height="15" src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg" />
            </aside>

        </main >
    )
}