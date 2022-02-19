import {Dispatch, SetStateAction} from "react";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IFigure {
    id: number,
    infoTitle: string,
    className: string,
    title: string,
    body: string;
    content: IContent[];
    calcInfo: ICalcInfo[];
    linksSlider: ILinksSlider[];
    searchLinks: ISearchLinks[];
    allLinks: IAllLinks[];
}

export interface IContent {
    mainContent: IMainContent;
    secondContent: ISecondContent[];
}

export interface ICalcInfo {
    calcTitle: string;
    method: (item: HTMLDivElement | null) => void;
    calcTextContent: ICalcTextContent;
    calcFixedContent: ICalcFixedContent[];
}

export interface IMainContent {
    title: string;
    body: string;
}

export interface ISecondContent {
    title: string;
    body: string;
}

export interface ICalcTextContent {
    title: string;
    body: string;
}

export interface ICalcFixedContent {
    img: ICalcFixedImg[];
    navigation: ICalcFixedNav[];
}

export interface ILinksSlider {
    title: string;
    calcTitle?: string;
}

export interface ISearchLinks {
    title: string;
    calcTitle?: string;
}

export interface IAllLinks {
    title: string;
    calcTitle?: string;
}

export interface ICalcFixedImg {
    src: string;
    alt: string;
}

export interface ICalcFixedNav {
    id: string;
    title: string;
    className: string;
}