import {useContext} from 'react';
import {SizingContext} from "./sizingContext";

const useSizing = () => {
    return useContext(SizingContext);
};

export default useSizing;