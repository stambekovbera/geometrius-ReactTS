import Index from "../../pages/Index";
import {figures} from "../../data/figures";
import FigureInfoPage from "../../pages/FigureInfoPage";
import NotFoundPage from "../../pages/NotFoundPage";
import FigureCalcPage from "../../pages/FigureCalcPage";

export const routesList = [
    {
        id: 1,
        index: true,
        element: <Index figures={figures}/>
    },
    {
        id: 2,
        path: ':infoTitle',
        element: <FigureInfoPage figures={figures}/>
    },
    {
        id: 3,
        path: ':infoTitle/:calcTitle',
        element: <FigureCalcPage figures={figures}/>
    },
    {
        id: 4,
        path: 'notfound',
        element: <NotFoundPage/>
    },
]