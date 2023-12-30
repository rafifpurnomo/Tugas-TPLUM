import React, { useState } from "react";
import dataMakanan from "../../utility/dataMakanan";
import styleListMakanan from "./ListItemMakan.module.css";
import EmptyDataMakanan from "../EmptyDataMakanan/EmptyDataMakanan";

function ListItemMakan(props) {
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = dataMakanan.filter((data) =>
    data.namaMakanan.toLowerCase().includes(props.keyword.toLowerCase())
  );
  const sortedData = filteredData.sort((a, b) =>
    a.namaMakanan.localeCompare(b.namaMakanan)
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className={styleListMakanan.listMakanan}>
        {paginatedData.length > 0 ? (
          paginatedData.map((data, id) => (
            <div key={id} className={styleListMakanan.divContainer} onClick={() => props.onSelectItem(data)}>
              <div className={styleListMakanan.containerImg}>
                <div className={styleListMakanan.divNamaMakanan}>
                  <h1 className={styleListMakanan.namaMakanan}>
                    {data.namaMakanan}
                  </h1>
                </div>
                <img
                  src="/assets/tudungMakanan.png"
                  alt=""
                  className={styleListMakanan.imageTudungMakanan}
                />
              </div>
              <p className={styleListMakanan.kandunganGula}>
                Total Kandungan Gula: {data.kandunganGula} Gram
              </p>
              <div className={styleListMakanan.containerButtomImg}>
                <img
                  src="/assets/gambarMakanan.png"
                  alt=""
                  className={styleListMakanan.imageGambarMakanan}
                />
              </div>
            </div>
          ))
        ) : (
          <EmptyDataMakanan/>
        )}
      </div>
      <span className={styleListMakanan.infoPage}>{`Page ${currentPage}`}</span>
      <div className={styleListMakanan.paginationBtn}>
        <button
          onClick={handlePrevPage}
          className={styleListMakanan.prevMakanan}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className={styleListMakanan.nextMakanan}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ListItemMakan;
