import React, { useState } from "react";

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        onSubmit({keyword})
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..." />
            <button className="btn" type="submit">Buscar</button>
        </form>
    )
}

export default React.memo(SearchForm)