import React, {FC, useEffect} from 'react';
import {Helmet} from "react-helmet";
import {useLocation} from "react-router-dom";
import {IFigure} from "../types/types";
import SliderList from "../components/slider/SliderList";

interface IndexProps {
    figures: IFigure[];
}

const Index: FC<IndexProps> = ({figures}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Helmet>
                <title>GEOMETRIUS | Главная</title>
            </Helmet>
            <main className="main">
                <section className="top">
                    <div className="container">
                        <div className="top__inner">
                            <h1 className="top__title">
                                GEOMETRIUS - ГЕОМЕТРИЧЕСКИЙ КАЛЬКУЛЯТОР
                            </h1>
                            <p className="top__text">
                                Не знаете ничего в геометрии? Не беда. С помощью наших коллекций
                                геометрических калькуляторов каждый может выполнять и понимать
                                полезные геометрические вычисления за считанные секунды. Вам не
                                нравится вычислять площадь или периметр круга в ручную? С нашим
                                калькулятором вы будете делать это с удовольствием! Наш
                                геометрический калькулятор разработан так, чтобы люди с разным
                                уровнем геометрических знаний могли легко решать сложные задачи.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="bottom">
                    <div className="container">
                        <div className="bottom__inner">
                            <h2 className="bottom__title flat">Плоские фигуры</h2>
                            <SliderList slides={figures}/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Index;