import React, { useEffect, useState }  from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
    const {keyword} = params
    const [gifs, setGifs] = useState([])

    useEffect(() => {
      getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword])

    return <div>
      {
        gifs.map(singleGif => <Gif key={singleGif.id} id={singleGif.id} title={singleGif.title} url={singleGif.url} />)
      }
    </div>
}