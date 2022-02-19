import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IFigure} from "../types/types";
import useSizing from "../context/useSizing";

interface FigureNavigationProps {
    figure: IFigure;
}

const FigureNavigation: FC<FigureNavigationProps> = ({figure}) => {
    const {sizing} = useSizing();

    const className = ["row__nav"];

    if (sizing) className.push("_lowHead");

    return (
        <div className="content__nav">
            <nav className={className.join(" ")}>
                <h1 className="row__nav-title">Калькуляторы:</h1>
                {figure.allLinks.map(link => {
                    return (
                        <Link key={link.title} className="row__nav-link"
                              to={`/${figure.infoTitle}/${link.calcTitle}`}>{link.title}</Link>
                    )
                })}
            </nav>
        </div>
    );
};

export default FigureNavigation;