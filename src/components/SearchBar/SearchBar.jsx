import React from 'react'
import styleSearchBar from './Search.module.css'

function SearchBar() {
  return (
    <div>
        <h1 className={styleSearchBar.h1}>Gluko Meter</h1>
        <div className={styleSearchBar.containerSearchBar}>
            <input type="textarea" name="" id="search bar" placeholder='Cari Makanan' className={styleSearchBar.searchBar}/>
        </div>
    </div>
  )
}

export default SearchBar