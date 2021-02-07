import React,{useContext} from "react";

import style from './Robot.module.scss';
// import { appContext } from "../index"
import { appContext,appSetStateContext } from "../AppState"
import {useAddToCar} from "./UseAddToCar"
// 定义接口
interface RobortProps {
  id: number,
  name: string,
  email: string,

}
const RobotDiscount: React.FC<RobortProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const addToCart = useAddToCar()
  return (
    <li key={id} className={style.cardContainer} >
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者:{value.username}</p>
      <button type="button" onClick={()=>addToCart(id,name)}>加入购物车</button>
    </li>
  )

}

export default RobotDiscount;
