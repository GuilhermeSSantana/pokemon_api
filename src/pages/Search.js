import React, {useState} from "react";
import "../style/Pokemon.css"

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" className="searchbar-input" onChange={onChangeHandler} />
                <button className="search-button" onClick={onButtonClickHandler} >🔎</button>
            </div>
        </div>
    )
}

export default Searchbar;