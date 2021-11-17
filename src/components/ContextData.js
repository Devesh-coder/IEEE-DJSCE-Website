import React, { createContext } from 'react'
import navLogoImg from "../images/IEEELogo.svg";

export const Context = createContext();

export const DataProvider = (props) => {
  const baseData = {
    name: "IEEE",
    navLogo: navLogoImg,
  };

  return (
    <Context.Provider value={[baseData]}>
      {props.children}
    </Context.Provider>
  )
}