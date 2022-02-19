import React, {FC} from 'react';
import HTMLReactParser from "html-react-parser";
import {IFigure} from "../types/types";

interface FigureInfoProps {
    figure: IFigure;
}

const FigureInfo: FC<FigureInfoProps> = ({figure}) => {
    return (
        <>
            {figure.content.map(content => {
                return (
                    <div key={figure.id} className="row__info">
                        <h1 className="row__info-title">{HTMLReactParser(content.mainContent.title)}</h1>
                        <div className="row__info-content">
                            {HTMLReactParser(content.mainContent.body)}
                        </div>
                        {content.secondContent
                            ? content.secondContent.map(secondContent => {
                                return (
                                    <div key={secondContent.title}>
                                        <h2 className="row__info-subtitle">{HTMLReactParser(secondContent.title)}</h2>
                                        <div className="row__info-content">
                                            {HTMLReactParser(secondContent.body)}
                                        </div>
                                    </div>
                                )
                            })
                            : null
                        }
                    </div>
                )
            })}
        </>
    );
};

export default FigureInfo;