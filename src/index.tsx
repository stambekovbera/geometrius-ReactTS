import React from 'react';
import ReactDOM from 'react-dom';
import {SizingProvider} from "./context/sizingContext";
import Layout from "./components/layout/Layout";
import './style/style.scss';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {figures} from "./data/figures";
import {routesList} from "./components/routes/RoutesList";

ReactDOM.render(
    <BrowserRouter>
        <SizingProvider>
            <Routes>
                <Route path="/" element={<Layout figures={figures}/>}>
                    {routesList.map(route => {
                        return (
                            route.index
                                ? <Route key={route.id} index element={route.element}/>
                                : <Route key={route.id} path={route.path} element={route.element}/>
                        )
                    })}
                    <Route path="*" element={<Navigate to={'/notfound'}/>}/>
                </Route>
            </Routes>
        </SizingProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

