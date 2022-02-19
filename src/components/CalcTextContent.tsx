import React, {FC} from 'react';
import HTMLReactParser from "html-react-parser";
import {ICalcInfo} from "../types/types";

interface CalcTextContentProps {
    figure: ICalcInfo | undefined;
}

const CalcTextContent: FC<CalcTextContentProps> = ({figure}) => {
    return (
        <>
            <div className="content__info">
                <>
                    <div className="content__info-title">{HTMLReactParser(figure?.calcTextContent.title as string)}</div>
                    <div className="content__info-content">{HTMLReactParser(figure?.calcTextContent.body as string)}</div>
                </>
            </div>
        </>
    );
};

export default CalcTextContent;