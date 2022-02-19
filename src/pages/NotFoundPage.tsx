import React, {FC, useEffect} from 'react';
import {Helmet} from "react-helmet";
import {useLocation} from "react-router-dom";

const NotFoundPage: FC = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Helmet>
                <title>GEOMETRIUS | 404</title>
            </Helmet>
            <main className="main">
                <section className="content">
                    <div className="container">
                        <div className="content__info">
                            <h1 className="content__info-title">Ошибка 404: страница не найдена!</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default NotFoundPage;