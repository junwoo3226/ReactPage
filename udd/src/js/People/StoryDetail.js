import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function StoryDetail() {
    const { id } = useParams();

    const [People, setPeople] = useState([]);
    useEffect(() => {
        fetch('/api/people/')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        setPeople(data[i]);
                    }
                }
                console.log(data);
            });
    }, [])
    return (
        <main id="primary" className="site__main layout--single">


            <article
                className=" post type-post status-publish format-standard has-post-thumbnail hentry category-news">
                <header className="single__header">
                    <div className="single__hero">
                        <img width="4786"
                            height="3384"
                            src={People.image}
                            className="attachment-hero size-hero wp-post-image"
                            alt="" decoding="async"
                            fetchpriority="high"
                            srcSet={`${People.image} 4786w, ${People.image} 1024w, ${People.image} 1527w, ${People.image} 768w, ${People.image} 1536w, ${People.image} 2048w, ${People.image} 2037w, ${People.image} 1273w, ${People.image} 552w, ${People.image} 453w`}
                            sizes="(max-width: 4786px) 100vw, 4786px" />
                    </div>

                    <div className="single__details">
                        <span className="single__interviewee">
                            {People.name}
                        </span>
                        <h1 className="single__title">
                            {People.role}
                        </h1>




                        <time className="single__date" dateTime="2023-12-01T16:35:01+09:00">
                            <span className="visually-hidden">Posted on</span>
                            {People.date}
                        </time>

                    </div>
                </header>

                <div className="single__content block-area">

                    <div dangerouslySetInnerHTML={{ __html: People.text }} />


                </div>
            </article>

            <aside className="closer__wrap">
                <img className="closer" width="30" height="15" src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg" />
            </aside>

        </main>
    )
}
