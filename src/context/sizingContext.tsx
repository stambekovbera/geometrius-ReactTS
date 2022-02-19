import {createContext, FC, useState} from "react";
import {TypeSetState} from "../types/types";

interface ISizingContext {
    sizing: boolean,
    setSizing: TypeSetState<boolean>
}

export const SizingContext = createContext<ISizingContext>({} as ISizingContext);

export const SizingProvider: FC = ({children}) => {
    const [sizing, setSizing] = useState<boolean>(false);

    return (
        <SizingContext.Provider value={{sizing, setSizing}}>
            {children}
        </SizingContext.Provider>
    )
}