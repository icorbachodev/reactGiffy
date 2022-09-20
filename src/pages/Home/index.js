import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ["Vanitas", "League of Legends", "Anime", "Overwatch"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    console.log(path)

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
        console.log(keyword)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..." />
            </form>
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}