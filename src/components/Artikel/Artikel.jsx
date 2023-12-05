import React, { useState } from "react";
import { Link } from "react-router-dom";
import { paginateData } from "../../utility/pagination";
import EmptyInbox from "../emptyInbox/EmptyInbox";
import styleArtikel from "./Artikel.module.css";
import dataArtikel from "../../utility/dataArtikel";

function Artikel() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(dataArtikel.length / itemsPerPage);
  const paginatedData = paginateData(dataArtikel, itemsPerPage, currentPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  function limitWords(text, limit) {
    const words = text.split(' ');
  
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
  
    return text;
  }

  return (
    <div>
      <h1 className={styleArtikel.h1}>Baca Artikel</h1>
      <div className={styleArtikel.container}>
        {paginatedData.length > 0 ? (
          paginatedData.map((artikel, id) => (
            <div className={styleArtikel.containerIsi} key={id}>
              <img
                src={artikel.image}
                alt={`Gambar ${artikel.judul}`}
                className={styleArtikel.foto}
              />
              <div>
                <p className={styleArtikel.judul}>{artikel.judul}</p>
                <p className={styleArtikel.isi}>{limitWords(artikel.isi, 15)}</p>
              </div>
              <div className={styleArtikel.containerLink}>
                <Link className={styleArtikel.link}>
                  <span>baca selengkapnya</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <EmptyInbox />
        )}
      </div>
      <div className={styleArtikel.paginationInfo}>
        <p>Page: {currentPage}</p>
      </div>
      <div className={styleArtikel.nextPrevKategori}>
        <div>
          <button
            className={styleArtikel.prevKatgeori}
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : 1
              )
            }
          >
            Prev
          </button>
        </div>
        <div>
          <button
            className={styleArtikel.prevKatgeori}
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage < pageCount ? prevPage + 1 : pageCount
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Artikel;
