import React, { useState } from "react";
import style from "./Portfolio.module.css";

export default function Portfolio() {

  const [activeItem, setActiveItem] = useState(null)

  function handleClickedItem(key){
    setActiveItem(key)
  }



  return (
    <>
      <div className={`headerContainer text-uppercase text-center container`}>
        <h2 className={`py-4 ${style.portTitle}`}>portfolio component</h2>
          <i  className={`fas fa-star ${style.star} fa-1x`}  style={{ color: "rgb(43, 61, 79)" }}></i>
      </div>

      <div className="container gap-3">

        <div className="row">
          <div onClick={()=>{handleClickedItem(key)}} key={'1'} className={`p-3 col-12 col-sm-6 col-md-4 position-reletive`}>
            <div className={`${style.item}`}>
              <i style={{color:'white'}} className={`fas fa-plus fa-3x ${style.plus}`}></i>
            <img className=" w-100" src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="piece of cake" />
            </div>
          </div>
          <div onClick={()=>{handleClickedItem(key)}} key={'2'} className={`p-3 col-12 col-sm-6 col-md-4 position-reletive`}>
            <div className={`${style.item}`}>
              <i style={{color:'white'}} className={`fas fa-plus fa-3x position-absolute top-50 ${style.plus}`}></i>
            <img className=" w-100" src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="piece of cake" />
            </div>
          </div>
          <div onClick={()=>{handleClickedItem(key)}} key={'3'} className={`p-3 col-12 col-sm-6 col-md-4 position-reletive`}>
            <div className={`${style.item}`}>
              <i style={{color:'white'}} className={`fas fa-plus fa-3x position-absolute top-50 ${style.plus}`}></i>
            <img className=" w-100" src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="piece of cake" />
            </div>
          </div>

          <div onClick={()=>{handleClickedItem(key)}} key={'4'} className={`p-3 col-12 col-sm-6 col-md-4 position-reletive`}>
            <div className={`${style.item}`}>
              <i style={{color:'white'}} className={`fas fa-plus fa-3x position-absolute top-50 ${style.plus}`}></i>
            <img className=" w-100" src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="piece of cake" />
            </div>
          </div>
          <div onClick={()=>{handleClickedItem(key)}} key={'5'} className={`p-3 col-12 col-sm-6 col-md-4 position-reletive`}>
            <div className={`${style.item}`}>
              <i style={{color:'white'}} className={`fas fa-plus fa-3x position-absolute top-50 ${style.plus}`}></i>
            <img className=" w-100" src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="piece of cake" />
            </div>
          </div>
          <div onClick={()=>{handleClickedItem(key)}} key={'6'} className={`p-3 col-12 col-sm-6 col-md-4 position-reletive`}>
            <div className={`${style.item}`}>
              <i style={{color:'white'}} className={`fas fa-plus fa-3x position-absolute top-50 ${style.plus}`}></i>
            <img className=" w-100" src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="piece of cake" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
