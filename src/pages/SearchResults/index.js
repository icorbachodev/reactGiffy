import React from "react";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";

export default function SearchResults({ params }) {
    const { keyword } = params
    const { gifs, setPage } = useGifs({ keyword })

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <>
        {
            <>
                <h3 className="App-title">Resultados de "{decodeURI(keyword)}"</h3>
                <ListOfGifs gifs={gifs} />
            </>
        }
        <button onClick={handleNextPage}>Get next page</button>
    </>
}