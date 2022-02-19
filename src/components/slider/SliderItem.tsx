import React, {FC, PropsWithChildren} from 'react';
import {Link} from "react-router-dom";
import {IFigure} from "../../types/types";

interface SliderItemProps {
    props?: PropsWithChildren<any>;
    slide: IFigure;
}

const SliderItem: FC<SliderItemProps> = (props) => {
    const className = ["slider__item", props.slide.className]
    return (
        <div className={className.join(' ')} {...props}>
            <h3 className="slider__title">{props.slide.title}</h3>
            <p className="slider__text">
                {props.slide.body}
            </p>
            <div className="slider__menu">
                {
                    props.slide.linksSlider.map(link => {
                        return <Link key={link.title} className="slider__menu-link"
                                     to={link.calcTitle ? `/${props.slide.infoTitle}/${link.calcTitle}` : `/${props.slide.infoTitle}`}>{link.title}</Link>
                    })
                }
            </div>
        </div>
    );
};

export default SliderItem;