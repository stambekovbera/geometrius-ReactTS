import React, {FC, useEffect, useState} from 'react';
import logoWhite from "../../../assets/logos/logo-white.png";
import searchSvg from "../../../assets/img/search.svg";
import {Link, useLocation} from "react-router-dom";
import {IFigure} from "../../../types/types";
import useSizing from '../../../context/useSizing';
import {addBodyClass, removeBodyClass} from "../../../utils/bodyClassNameFunc";
import {searchFunc} from "../../../utils/searchFunc";
import HeaderModal from "../../UI/HeaderModal/HeaderModal";

interface HeaderProps {
    figures: IFigure[];
}

const Header: FC<HeaderProps> = ({figures}) => {
    const {pathname} = useLocation();

    const {sizing, setSizing} = useSizing();

    const [modal, setModal] = useState(false);

    const location = useLocation();

    const headerClass = ["header"];

    const burgerClass = ['burger'];

    const headerInnerClass = ['header__inner'];

    const searchNavClass = ['search__nav'];

    window.onscroll = () => {
        if (window.pageYOffset > 10) {
            setSizing(true);
        } else {
            setSizing(false);
        }
    }

    if (location.pathname !== '/') {
        headerClass.push('header-second');
    }

    if (sizing) {
        headerInnerClass.push('_fixed');
        searchNavClass.push('_sizing');
    }

    if (modal) {
        burgerClass.push('_active');
        headerClass.push('_active');
        addBodyClass('_active');
    } else {
        removeBodyClass('_active');
    }

    const showMenu = () => {
        modal ? setModal(false) : setModal(true);
    }

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchFunc(e, '.search__nav-menu-link', '.search__nav');
    }

    useEffect(() => {
        setModal(false);
        removeBodyClass('_active');
    }, [pathname]);

    return (
        <header className={headerClass.join(' ')} id="myHeader">
            <div className="container">
                <div className={headerInnerClass.join(' ')}>
                    <div className={burgerClass.join(' ')} onClick={showMenu}>
                        <span/>
                    </div>
                    <Link className="logo" to="/">
                        <img src={logoWhite} alt="GEOMETRIUS"/>
                    </Link>
                    <div className="search">
                        <div className="search__form">
                            <img src={searchSvg} alt=""/>
                            <input
                                id="search__input"
                                className="search__form-item"
                                type="text"
                                aria-label="Поисковая строка"
                                onInput={searchHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <HeaderModal visible={modal}>
                <div className="container">
                    <div className="sidebar__inner">
                        <ul className="sidebar__menu">
                            <h2 className="sidebar__title">Плоские фигуры</h2>
                            {figures.map(figure => {
                                return (
                                    <li key={figure.id}>
                                        <Link className="menu-link"
                                              to={`/${figure.infoTitle}`}>{figure.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </HeaderModal>
            <div className={searchNavClass.join(' ')}>
                <ul className="search__nav-menu">
                    {figures.map(figure => {
                        return figure.searchLinks.map(link => {
                            return (
                                <li key={link.title}>
                                    <Link className="search__nav-menu-link"
                                          to={`/${figure.infoTitle}/${link.calcTitle}`}>{link.title}</Link>
                                </li>
                            )
                        })
                    })}
                </ul>
            </div>
        </header>
    );
};

export default Header;