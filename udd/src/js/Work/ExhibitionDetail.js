import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function ExhibitionDetail() {
    const { id } = useParams();

    const [Exhibition, setExhibition] = useState([]);

    useEffect(() => {
        fetch('/api/exhibition/')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        setExhibition(data[i]);
                    }
                }
                console.log(data);
            });
    }, [])





    return (
        <main id="primary" className="site__main layout--single">


            <article className=" post type-post status-publish format-standard has-post-thumbnail hentry category-exhibition">
                <header className="single__header">
                    <div className="single__hero">
                        <img
                            width="2560"
                            height="1440"
                            src={Exhibition.image}
                            className="attachment-hero size-hero wp-post-image"
                            alt="" decoding="async" fetchpriority="high"
                            srcSet={`${Exhibition.image} 2560w, ${Exhibition.image} 1024w, ${Exhibition.image} 1920w, ${Exhibition.image} 768w, ${Exhibition.image} 1536w, ${Exhibition.image} 2048w, ${Exhibition.image} 1440w, ${Exhibition.image} 693w, ${Exhibition.image} 480w" `}
                            sizes="(max-width: 2560px) 100vw, 2560px"
                        />
                    </div>

                    <div className="single__details">

                        <h1 className="single__title">
                            {Exhibition.title}
                        </h1>


                        {Exhibition.startdate && Exhibition.startdate.trim() !== '' ? (
                            <>
                                <time
                                    className="single__date single__date--starts"
                                    dateTime="2021-03-15KST09:00:00+09:00>">
                                    {Exhibition.startdate}
                                </time>
                                <span
                                    className="single__date__separator">–</span>
                                <time
                                    className="single__date single__date--ends"
                                    dateTime="2021-03-26KST12:00:00+09:00>">
                                    {Exhibition.nowdate}
                                </time>
                            </>
                        ) : (
                            <time
                                className="single__date single__date--ends"
                                dateTime="2021-03-26KST12:00:00+09:00>">
                                {Exhibition.nowdate}
                            </time>
                        )}



                    </div>
                </header>

                <div className="single__content block-area">
                    <div dangerouslySetInnerHTML={{ __html: Exhibition.text }} />
                </div>
            </article>

            <aside className="closer__wrap">
                <img className="closer" width="30" height="15" src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg" />
            </aside>

        </main>
    )
}