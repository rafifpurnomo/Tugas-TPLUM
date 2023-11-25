import React from 'react'
import Artikel from '../components/Artikel/Artikel'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'
import Tentang from '../components/tentang/Tentang'
import ZeroSection from '../components/ZeroSection/ZeroSection'
import styleHome from './Home.module.css'

function Home() {
  return (
    <div>
      <div className={styleHome.conatinerhome}>
        <Navbar/>
        <div className={styleHome.zeroSection}>
          <ZeroSection/>
        </div>
        <Tentang/>
      </div>
        <SearchBar/>
        <Artikel/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non similique harum atque in hic, qui sequi accusamus voluptatibus officia facilis illum assumenda alias voluptatem? Nam aliquid laboriosam quos reiciendis?</p>
    </div>
  )
}

export default Home
