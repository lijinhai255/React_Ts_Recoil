import React, { useState } from 'react';

// 定义类型
interface AppStateValue {
    username: string;
    shoppingCart: { items: { id: number, name: string }[] }
}

const defaultContextValue: AppStateValue = {
    username: "lijinhai",
    shoppingCart: {
        items: []
    }
}
export const appContext = React.createContext(defaultContextValue)
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined)
export const AppStateProvider: React.FC = (props) => {
    const [state, setState] = useState(defaultContextValue)
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    )
}