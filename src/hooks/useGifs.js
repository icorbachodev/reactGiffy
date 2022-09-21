import {useContext, useEffect} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(() => {
        // recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')

        getGifs({ keyword: keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            // guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, setGifs])

    return { gifs }
}
