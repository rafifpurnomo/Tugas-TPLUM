import React from 'react'
import styleSearchBar from './Search.module.css'

function SearchBar(props) {
  return (
    <div id="kalkulator-section">
        <h1 className={styleSearchBar.h1}>Gluko Meter</h1>
        <div className={styleSearchBar.containerSearchBar}>
            <input type="textarea" name="" id="search bar" placeholder='Cari Makanan' className={styleSearchBar.searchBar} onChange={(e)=>{props.setKeyword(e.target.value)}}/>
        </div>
    </div>
  )
}

export default SearchBar