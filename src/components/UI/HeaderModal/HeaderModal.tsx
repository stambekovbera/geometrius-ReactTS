import React, {FC} from 'react';
import style from "./HeaderModal.module.scss";
import useSizing from "../../../context/useSizing";

interface HeaderModalProps{
    visible: boolean;
}

const HeaderModal: FC<HeaderModalProps> = ({children, visible}) => {
    const rootClasses = [style.left__sidebar]

    const {sizing} = useSizing();

    if (sizing) rootClasses.push(style._sizing);

    if (visible) rootClasses.push(style._active);

    return (
        <div className={rootClasses.join(' ')}>
            {children}
        </div>
    );
};

export default HeaderModal;