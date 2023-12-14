import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function NewsDetail() {
    const { lab } = useParams();


    const [LabsBox, setLabs] = useState([]);


    const decodedName = decodeURIComponent(lab);  // URL 디코딩

    useEffect(() => {
        fetch('/api/lab/')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].lab === decodedName) {  // 디코딩된 이름으로 비교
                        setLabs(data[i]);
                    }
                }
                console.log(data);
            });
    }, [decodedName]);  // 의존성 배열에 디코딩된 이름을 추가
    return (
        <main id="primary" className="site__main layout--single">


            <article className=" design-labs type-design-labs status-publish has-post-thumbnail hentry tag-electronics tag-embedded-system tag-service-robot tag-smart-mobility">
                <header className="single__header">
                    <div className="single__hero">
                        <img
                            width="2000"
                            height="1000"
                            src={LabsBox.image}
                            className="attachment-hero size-hero wp-post-image"
                            alt=""
                            decoding="async"
                            fetchpriority="high"
                            srcSet={`${LabsBox.image} 2000w, ${LabsBox.image} 1024w, ${LabsBox.image} 1920w, ${LabsBox.image} 768w, ${LabsBox.image} 1536w, ${LabsBox.image} 1440w,${LabsBox.image} 780w, ${LabsBox.image} 480w, ${LabsBox.image} 1000w" `}
                            sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                    </div>

                    <div className="single__details">

                        <h1 className="single__title">
                            {LabsBox.title}
                        </h1>





                    </div>
                </header>

                <div className="single__content block-area">

                    <div dangerouslySetInnerHTML={{ __html: LabsBox.text }} />
                </div>
            </article>

            <aside className="closer__wrap">
                <img className="closer" width="30" height="15" src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg" />
            </aside>

        </main>
    )
}
