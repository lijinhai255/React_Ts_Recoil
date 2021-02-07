import React, { useContext } from 'react'
// import { RobotProps } from "./Robot";
import { appContext, appSetStateContext } from "../AppState"
import { RobortProps } from "./Robot"
export const WidthAddToCar = (ChildComponent: React.ComponentType<RobortProps>) => {
    // return class extends React.Component {}
    return (props) => {
        const setState = useContext(appSetStateContext)
        const addToCart = (id, name) => {
            if (setState) {
                setState((state) => {
                    console.log(1212, setState, state)

                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, { id, name }]
                        }
                    }
                })
            }
        }
        return <ChildComponent {...props} addToCart={addToCart}></ChildComponent>
    }
} 