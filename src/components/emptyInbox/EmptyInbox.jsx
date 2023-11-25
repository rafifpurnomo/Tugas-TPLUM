import React from 'react'
import styleEmptyInbox from './EmptyInbox.module.css'

function EmptyInbox() {
  return (
    <div className={styleEmptyInbox.container}>
        <img src="/assets/emptyInbox.png" alt="" className={styleEmptyInbox.illustration}/>
        <h1 className={styleEmptyInbox.h1}>Artikel Tidak Ditemukan</h1>
    </div>
  )
}

export default EmptyInbox