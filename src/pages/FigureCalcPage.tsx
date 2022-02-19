import React, {FC, useEffect} from 'react';
import {Navigate, useLocation, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {IFigure} from "../types/types";
import CalcTextContent from "../components/CalcTextContent";
import CalcFixedContent from "../components/CalcFixedContent";

interface FigureCalcPageProps {
    figures: IFigure[];
}

const FigureCalcPage: FC<FigureCalcPageProps> = ({figures}) => {
    const {pathname} = useLocation();

    const {calcTitle} = useParams();

    const {infoTitle} = useParams();

    let figureCalcContent, helmetTitle;

    const figure = figures.find(figure => {
        return figure.infoTitle === infoTitle;
    });

    figureCalcContent = figure?.calcInfo.find(content => {
        return content.calcTitle === calcTitle;
    })

    helmetTitle = figure?.searchLinks.find(link => {
        return link.calcTitle === calcTitle;
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        typeof figureCalcContent !== "undefined"
            ? <>
                <Helmet>
                    <title>GEOMETRIUS | {helmetTitle?.title}</title>
                </Helmet>
                <main className="main">
                    <section className="content">
                        <div className="container">
                            <div className="content__inner">
                                <div className="content__row">
                                    <CalcFixedContent figure={figureCalcContent}/>
                                    <CalcTextContent figure={figureCalcContent}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
            : <Navigate to={'/notfound'}/>
    );
};

export default FigureCalcPage;