import React, { useContext, useState } from "react";
import styles from "./Carousel.module.scss"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselContent from "./CarouselContent/CarouselContent";
import { Context } from "../../../ContextData";


const CarouselComp = () => {

    const [baseData] = useContext(Context);
    const project = baseData.contentForCarousel;

    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(project.length);
    const [progress, setProgress] = useState((1 / totalSlides) * 100);


    const arrowStyles = {
        position: 'absolute',
        top: 'calc(80%)',
        // height: 50,
        // width: 80,
        cursor: 'pointer',
    };

    const rightArrow = (onClickHandler, label) => {
        return (
            <div
                style={{ ...arrowStyles, left: '10%' }}
                onClick={onClickHandler}
                title={label}
            >
                <i className='fas fa-long-arrow-alt-right fa-5x arrow-icon'></i>
            </div>
        );
    };

    const leftArrow = (onClickHandler, label) => {
        return (
            <div
                style={{ ...arrowStyles, left: '30px', zIndex: 1 }}
                onClick={onClickHandler}
                title={label}
            >
                <i className='fas fa-long-arrow-alt-left fa-5x arrow-icon'></i>
            </div>
        );
    };

    const CarouselProps = {
        showThumbs: false,
        swipeable: true,
        autoPlay: true,
        interval: 8000,
        transitionTime: 800,
        infiniteLoop: true,
        stopOnHover: true,
        showStatus: false,
        showIndicators: false,
        showArrows: false,
    }

    const slideChange = (current) => {
        const value = Number((current + 1) / totalSlides) * 100;
        setCurrentSlide(current + 1);
        setProgress(value);
    };

    return (
        <div className={styles.carouselContainer}>
            <Carousel
                className={styles.carousel}
                {...CarouselProps}
                renderArrowNext={rightArrow}
                renderArrowPrev={leftArrow}
                onChange={(current) => {
                    slideChange(current);
                }}
            >
                {
                    project.map((item, key) => (
                        <CarouselContent title={item.title} content={item.content} img={item.img} key={key} />
                    ))
                }
            </Carousel>

            <div className={styles.carouselBar}>
                <div>0{currentSlide}</div>
                <div className={styles.mainBar}>
                    <span
                        className={styles.mainBarSpan}
                        style={{
                            background: 'linear-gradient(45deg, blue, red)',
                            width: `${progress}%`,
                            height: '5px',
                        }}
                    ></span>
                    <span
                        className={styles.mainBarSpan}
                        style={{
                            backgroundColor: 'gray',
                            width: `${100 - progress}%`,
                            height: '2px',
                        }}
                    ></span>
                </div>
                <div>0{totalSlides}</div>
            </div>
        </div>
    )
};

export default CarouselComp;