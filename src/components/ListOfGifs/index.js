import React from "react";
import Gif from "../Gif";
import './ListOfGifs.css'

export default function ListOfGifs({ gifs }) {
    return <div className="ListOfGifs">
      {
        gifs.map(singleGif => <Gif key={singleGif.id} id={singleGif.id} title={singleGif.title} url={singleGif.url} />)
      }
    </div>
}