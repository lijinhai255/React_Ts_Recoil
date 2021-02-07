import React, { Component } from 'react'
import styles from './style.module.scss'
import { FiShoppingCart } from 'react-icons/fi'
import { appContext } from "../../AppState"
interface Props { }

interface State {
    isOpen: boolean;
}

class ShoppingCard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    // handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>):void {
    //     console.log("e.target ", e.target)
    //     console.log("e.currentTarget ", e.currentTarget)
    //     if ((e.target as HTMLElement).nodeName === "SPAN") {
    //         this.setState({ isOpen: !this.state.isOpen });
    //     }

    // }
    handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        console.log("e.target ", e.target)
        console.log("e.currentTarget ", e.currentTarget)
        if ((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({ isOpen: !this.state.isOpen });
        }

    }

    render() {
        return <appContext.Consumer >
            {(value) => (
                <div className={styles.cartContainer}>
                    <button
                        className={styles.button}
                        onClick={(e) => this.handleClick(e)}
                    >
                        <FiShoppingCart />
                        <span>购物车 {value.shoppingCart.items.length}(件)</span>
                    </button>
                    <div
                        className={styles.cartDropDown}
                        style={{
                            display: this.state.isOpen ? "block" : "none",
                        }}
                    >
                        <ul>
                            {
                                value.shoppingCart.items.map((item,idx)=><li key={idx}>{item.name}</li>)
                            }
                        </ul>
                    </div>
                </div>
            )}
        </appContext.Consumer>
    }
}
export default ShoppingCard