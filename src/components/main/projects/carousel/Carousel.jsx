import React, {useEffect, useRef} from "react";

function Carousel(props) {
    const data = [
        {
            "src": `${process.env.PUBLIC_URL}/assets/img/Carousel/boolflix.webp`,
            "alt": "Boolflix",
            "url": "https://lorenzo-calzi.github.io/vue-boolflix/Milestone%205/"
        },
        {
            "src": `${process.env.PUBLIC_URL}/assets/img/Carousel/boolzapp.webp`,
            "alt": "Boolzapp",
            "url": "https://lorenzo-calzi.github.io/vue-boolzapp/Milestone_5/"
        },
        {
            "src": `${process.env.PUBLIC_URL}/assets/img/Carousel/hubspot.webp`,
            "alt": "Hubspot",
            "url": "https://lorenzo-calzi.github.io/htmlcss-hubspot/"
        },
        {
            "src": `${process.env.PUBLIC_URL}/assets/img/Carousel/spotify.webp`,
            "alt": "Spotify",
            "url": "https://lorenzo-calzi.github.io/html-css-spotifyweb/"
        }
    ]

    let slide = '';
    let slideTotal = data.length - 1;
    let slideCurrent = 0;

    const carousel = useRef(null);

    useEffect(() => {
        resizeCarousel()

        window.addEventListener("resize", resizeCarousel)
    }, [props.theme])

    const resizeCarousel = () => {
        if (carousel.current.offsetWidth) {
            document.getElementById('slider-content').style.height = `${carousel.current.offsetWidth * 0.5625}px`;
        }
        slide = document.querySelectorAll('.slider-single')
        changeSlide('initial')
    }

    function goToIndexSlide(index) {
        const sliding = (slideCurrent > index) ? () => changeSlide('right') : () => changeSlide('left');
        while (slideCurrent !== index) {
            sliding();
        }
    }

    function activeBullet() {
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        })
    }

    const changeSlide = (type: string) => {
        let beforeSlide;
        let afterSlide;
        let activeSlide;

        if (!slide) {
            slide = document.querySelectorAll('.slider-single')
        }

        if (type === 'initial') {
            slideCurrent = 0;
            beforeSlide = slide[slideTotal];
            activeSlide = slide[slideCurrent];
            afterSlide = slide[slideCurrent + 1];

            slide.forEach((elem) => {
                let thisSlide = elem;
                if (thisSlide.classList.contains('before-hidden')) {
                    thisSlide.className = 'slider-single'
                    thisSlide.classList.add('after-hidden');
                }
                if (thisSlide.classList.contains('before')) {
                    thisSlide.className = 'slider-single'
                    thisSlide.classList.add('before-hidden');
                }
            });
        } else if (type === 'right') {
            if (slideCurrent < slideTotal) {
                slideCurrent++;
            } else {
                slideCurrent = 0;
            }

            if (slideCurrent > 0) {
                beforeSlide = slide[slideCurrent - 1];
            } else {
                beforeSlide = slide[slideTotal];
            }

            activeSlide = slide[slideCurrent];

            if (slideCurrent < slideTotal) {
                afterSlide = slide[slideCurrent + 1];
            } else {
                afterSlide = slide[0];
            }

            slide.forEach((elem) => {
                let thisSlide = elem;
                if (thisSlide.classList.contains('before-hidden')) {
                    thisSlide.className = 'slider-single'
                    thisSlide.classList.add('after-hidden');
                }
                if (thisSlide.classList.contains('before')) {
                    thisSlide.className = 'slider-single'
                    thisSlide.classList.add('before-hidden');
                }
            });
        } else if (type === 'left') {
            if (slideCurrent > 0) {
                slideCurrent--;
            } else {
                slideCurrent = slideTotal;
            }

            if (slideCurrent < slideTotal) {
                afterSlide = slide[slideCurrent + 1];
            } else {
                afterSlide = slide[0];
            }

            activeSlide = slide[slideCurrent];

            if (slideCurrent > 0) {
                beforeSlide = slide[slideCurrent - 1];
            } else {
                beforeSlide = slide[slideTotal];
            }

            slide.forEach((elem) => {
                let thisSlide = elem;
                if (thisSlide.classList.contains('after')) {
                    thisSlide.className = 'slider-single';
                    thisSlide.classList.add('after-hidden');
                }
                if (thisSlide.classList.contains('after-hidden')) {
                    thisSlide.className = 'slider-single';
                    thisSlide.classList.add('before-hidden');
                }
            });
        }

        if (beforeSlide) {
            beforeSlide.className = 'slider-single';
            beforeSlide.classList.add('before');
        }
        if (activeSlide) {
            activeSlide.className = 'slider-single';
            activeSlide.classList.add('active');
        }
        if (afterSlide) {
            afterSlide.className = 'slider-single';
            afterSlide.classList.add('after');
        }

        activeBullet()
    }

    return (
        <div id="slider-container">
            <div className="slider-left" style={{color: props.theme ? 'white' : 'black'}}
                 onClick={() => changeSlide('left')}>
                <i className="fa-solid fa-circle-chevron-left"/>
            </div>

            <div className="slider-center-content">
                <div id="slider-content" ref={carousel}>
                    {
                        data.map((element, index) => (
                            <div className="slider-single" key={index}>
                                <a href={element.url} target="_blank" aria-label={element.alt}>
                                    <img className="slider-single-image" src={element.src} alt={element.alt}/>
                                </a>
                                <a href={element.url} target="_blank" aria-label={element.alt}>
                                    <h1 className={`slider-single-title shadow-${!props.theme ? "light" : "dark"}`}>
                                        {element.alt}
                                        <i className="fa-solid fa-arrow-up-right-from-square"/>
                                    </h1>
                                </a>
                            </div>
                        ))
                    }
                </div>

                <div className="bullet-container">
                    {
                        data.map((element, index) => (
                            <div className={`bullet shadow-${!props.theme ? "light" : "dark"}`}
                                 onClick={() => goToIndexSlide(index)} id={`bullet-index-${index}`}
                                 key={index}></div>
                        ))
                    }
                </div>
            </div>

            <div className="slider-right" style={{color: props.theme ? 'white' : 'black'}}
                 onClick={() => changeSlide('right')}>
                <i className="fa-solid fa-circle-chevron-right"/>
            </div>
        </div>
    );
}

export default Carousel;