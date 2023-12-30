import React, { useState, useEffect } from "react";
import styKalkulator from "./Kalkulator.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ListItemMakan from "../ListItemMakanan/ListItemMakan";
import EmptyMakananTerpilih from "../EmptyMakananTerpilih/EmptyMakananTerpilih";
import { Icon } from "@iconify/react";

function Kalkulator() {
  const [keyword, setKeyword] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalGula, setTotalGula] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Fungsi untuk menambahkan item yang dipilih
  const handleSelectItem = (selectedItem) => {
    setSelectedItems((prevItems) => [...prevItems, selectedItem]);
  };

  // Fungsi untuk menghapus item yang dipilih
  const handleRemoveItem = (index) => {
    const newItems = [...selectedItems];
    newItems.splice(index, 1);
    setSelectedItems(newItems);
  };

  // Fungsi untuk menghitung total kandungan gula
  const calculateTotalGula = () => {
    const total = selectedItems.reduce(
      (acc, item) => acc + item.kandunganGula,
      0
    );
    setTotalGula(total);
  };

  // Menghitung total kandungan gula setiap kali selectedItems berubah
  useEffect(() => {
    calculateTotalGula();
  }, [selectedItems]);

  const paginatedItems = selectedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(selectedItems.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <SearchBar setKeyword={setKeyword} />
      <ListItemMakan keyword={keyword} onSelectItem={handleSelectItem} />

      <h1 className={styKalkulator.totalGula}>
        Total gula harian anda: {totalGula} Gram
      </h1>
      <h2 className={styKalkulator.makananTerpilih}>Makanan Anda Hari Ini</h2>
      <div className={styKalkulator.divMakananTerpilih}>
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item, index) => (
            <div key={index} className={styKalkulator.containerMakananTerpilih}>
              <div className={styKalkulator.containerImg}>
                <div className={styKalkulator.divNamaMakanan}>
                  <h1 className={styKalkulator.namaMakanan}>
                    {item.namaMakanan}
                  </h1>
                </div>
                <img
                  src="/assets/tudungMakanan.png"
                  alt=""
                  className={styKalkulator.imageTudungMakanan}
                />
              </div>
              <p className={styKalkulator.kandunganGula}>
                Total Kandungan Gula: {item.kandunganGula} Gram
              </p>
              <div
                className={styKalkulator.divIconTrash}
                onClick={() => handleRemoveItem(index)}
              >
                <Icon icon="ph:trash" className={styKalkulator.iconTrash} />
              </div>
              <div className={styKalkulator.containerButtomImg}>
                <img
                  src="/assets/gambarMakanan.png"
                  alt=""
                  className={styKalkulator.imageGambarMakanan}
                />
              </div>
            </div>
          ))
        ) : (
          <EmptyMakananTerpilih />
        )}
      </div>
      {selectedItems.length > itemsPerPage && (
        <div className={styKalkulator.paginationBtn}>
          <button
            onClick={handlePrevPage}
            className={styKalkulator.prevMakanan}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            className={styKalkulator.nextMakanan}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Kalkulator;
