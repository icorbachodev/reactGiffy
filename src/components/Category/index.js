import React from "react";
import { Link } from "wouter";

export default function Category({name, options = []}) {
    return (
        <section>
            <h3>{name}</h3>
            <ul>
                {
                    options.map((singleOption) => (
                        <li key={singleOption}>
                            <Link to={`/search/${singleOption}`}>Gifs de {singleOption}</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}