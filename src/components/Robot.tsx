import React,{useContext} from "react";

import style from './Robot.module.scss';
// import { appContext } from "../index"
import { appContext,appSetStateContext } from "../AppState"
import {WidthAddToCar} from "./WithAddToCar"

// 定义接口
export interface RobortProps {
  id: number,
  name: string,
  email: string,
  addToCart:(id,name) =>void
}


const Robot: React.FC<RobortProps> = ({ id, name, email,addToCart }) => {
  const value = useContext(appContext)
  // const setState = useContext(appSetStateContext)
  // return <appContext.Consumer>
  //   {(value)=><li key={id} className={style.cardContainer} >
  //     <img src={`https://robohash.org/${id}`} alt="" />
  //     <h2>{name}</h2>
  //     <p>{email}</p>
  //     <p>作者:{value.username}</p>
  //   </li>}
  // </appContext.Consumer>

  // const addToCart = ()=>{
  //   if(setState){
  //     setState((state)=>{
  //   console.log(1212,setState,state)

  //       return { 
  //         ...state,
  //         shoppingCart: {
  //           items:[...state.shoppingCart.items,{id,name}]
  //         }
  //       }
  //     })
  //   }
  // }
  return (
    <li key={id} className={style.cardContainer} >
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者:{value.username}</p>
      <button type="button" onClick={()=>addToCart(id,name)}>加入购物车</button>
    </li>
  )

}

export default WidthAddToCar(Robot);
