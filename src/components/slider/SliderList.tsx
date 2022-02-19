import React, {FC} from 'react';
import SliderItem from "./SliderItem";
import Slider from 'react-slick';
import {IFigure} from "../../types/types";

interface SliderListProps {
    slides: IFigure[];
}

const SliderList: FC<SliderListProps> = ({slides}) => {
    const settings = {
        className: "bottom__slider",
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
        waitForAnimate: false,
    };

    return (
        <Slider {...settings}>
            {slides.map(slide => {
                return <SliderItem key={slide.title} slide={slide}/>
            })}
        </Slider>
    );
};

export default SliderList;