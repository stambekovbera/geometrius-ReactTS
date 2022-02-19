import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {IFigure} from "../../types/types";

interface LayoutProps {
    figures: IFigure[];
}

const Layout: FC<LayoutProps> = ({figures}) => {
    return (
        <div className="wrapper">
            <Header figures={figures}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;