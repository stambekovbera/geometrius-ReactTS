import React, {FC, useEffect} from 'react';
import {Navigate, useLocation, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {IFigure} from "../types/types";
import FigureNavigation from "../components/FigureNavigation";
import FigureInfo from "../components/FigureInfo";

interface FigureInfoPageProps {
    figures: IFigure[];
}

const FigureInfoPage: FC<FigureInfoPageProps> = ({figures}) => {
    const {pathname} = useLocation();

    const {infoTitle} = useParams();

    const figure = figures.find(figure => {
        return figure.infoTitle === infoTitle;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {figure
                ? <>
                    <Helmet>
                        <title>GEOMETRIUS | {figure.title}</title>
                    </Helmet>
                    <main className="main">
                        <section className="content">
                            <div className="container">
                                <div className="content__inner">
                                    <div className="content__row">
                                        <FigureNavigation figure={figure}/>
                                        <FigureInfo figure={figure}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </>
                : <Navigate to={'/notfound'}/>
            }
        </>
    );
};

export default FigureInfoPage;