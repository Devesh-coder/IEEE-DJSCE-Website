import React, { createContext } from 'react'
import navLogoImg from "../images/IEEELogo.svg";
import testImg from "../images/homePageEventsCarousel.svg";

export const Context = createContext();

export const DataProvider = (props) => {
  const baseData = {
    name: "IEEE",
    navLogo: navLogoImg,

    contentForCarousel: [
      {
        title: 'PIXELATED',
        content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
        img: testImg,
      },
      {
        title: 'PIXELATED',
        content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
        img: testImg,
      },
      {
        title: 'PIXELATED',
        content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
        img: testImg,
      },
      {
        title: 'PIXELATED',
        content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
        img: testImg,
      },
    ],

    content: [
      {
        2017: [
          {
            title: 'PIXELATED',
            content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
            img: testImg,
          },
        ]
      },
      {
        2018: [
          {
            title: 'PIXELATED',
            content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
            img: testImg,
          },
        ]
      },
      {
        2019: [
          {
            title: 'PIXELATED',
            content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
            img: testImg,
          },
        ]
      },
    ]
  };

  return (
    <Context.Provider value={[baseData]}>
      {props.children}
    </Context.Provider>
  )
}