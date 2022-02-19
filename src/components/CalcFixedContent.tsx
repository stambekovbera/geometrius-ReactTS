import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import {SizingContext} from "../context/sizingContext";
import {useNavigate} from "react-router-dom";
import {validateFunc} from "../utils/validateFunc";
import {ICalcInfo} from "../types/types";

interface CalcFixedContentProps {
    figure: ICalcInfo | undefined;
}

const CalcFixedContent: FC<CalcFixedContentProps> = ({figure}) => {
    const {sizing} = useContext(SizingContext);

    const maxLength = 10;

    const className = ["content__calc"];

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    if (sizing) className.push("_lowHead");

    let calcNav = useRef(null);

    let [value, setValue] = useState<any>([
        {
            idVal: 'a',
            value: ''
        },
        {
            idVal: 'b',
            value: ''
        },
        {
            idVal: 'h',
            value: ''
        },
        {
            idVal: 'c',
            value: ''
        },
        {
            idVal: 'r',
            value: ''
        },
        {
            idVal: 'p',
            value: ''
        },
        {
            idVal: 'angle',
            value: ''
        },
        {
            idVal: 'd',
            value: ''
        },
    ]);

    const newValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        figure?.method(calcNav.current); // eslint-disable-next-line
    }, [value]);

    return (
        <div className="content__fixed">
            <div className={className.join(' ')}>
                <div className="calc__img">
                    {figure?.calcFixedContent.map(figure => {
                        return figure.img.map(img => {
                            return (
                                <img key={img.src} src={img.src} alt={img.alt}/>
                            )
                        })
                    })}
                </div>
                <div className="calc__nav" ref={calcNav}>
                    {figure?.calcFixedContent.map(calc => {
                        return calc.navigation.map(nav => {
                            return (
                                nav.id !== "res" && nav.id !== "resB" && nav.id !== "resC" && nav.id !== "d1" && nav.id !== "d2"
                                    ? <div key={nav.id} className={nav.className}>
                                        <label>{nav.title}</label>
                                        <input
                                            value={[...value].find(val => {
                                                return val.idVal === nav.id ? val.value : ''
                                            })}
                                            onChange={newValue}
                                            maxLength={maxLength}
                                            id={nav.id}
                                            type="text"
                                            onKeyPress={validateFunc}
                                        />
                                    </div>
                                    : <div key={nav.id} className={nav.className}>
                                        <label>{nav.title}</label>
                                        <input
                                            id={nav.id}
                                            type="text"
                                            readOnly
                                        />
                                    </div>

                            )
                        })
                    })}
                </div>
                <button onClick={goBack} className="exit__btn">
                    Назад
                </button>
            </div>
        </div>
    );
};

export default CalcFixedContent;