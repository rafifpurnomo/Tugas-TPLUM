import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { paginateData } from "../../utility/pagination";
import EmptyInbox from "../emptyInbox/EmptyInbox";
import styleArtikel from "./Artikel.module.css";
import dataArtikel from "../../utility/dataArtikel";
import ReactModal from "react-modal";
import AOS from 'aos';
import 'aos/dist/aos.css';

Modal.setAppElement("#root"); // Set the root element for accessibility

function Artikel() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArtikel, setSelectedArtikel] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const openModal = (artikel) => {
    setSelectedArtikel(artikel);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedArtikel(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <h1 className={styleArtikel.h1}>Baca Artikel</h1>
      <div className={styleArtikel.container}>
        {paginatedData.length > 0 ? (
          paginatedData.map((artikel, id) => (
            <div data-aos="fade-up" className={styleArtikel.containerIsi} key={id}>
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
                <p
                  className={styleArtikel.link}
                  onClick={() => openModal(artikel)}
                >
                  <span>Baca Selengkapnya</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <EmptyInbox />
        )}
      </div>

      {/* Modal */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={styleArtikel.Modal}
        overlayClassName={styleArtikel.Overlay}
      >
        <h2 className={styleArtikel.JudulArtikelSelected}>{selectedArtikel && selectedArtikel.judul}</h2>
        <img
          src={selectedArtikel && selectedArtikel.image}
          alt={selectedArtikel && `Gambar ${selectedArtikel.judul}`}
          className={styleArtikel.modalImg}
        />
        <p>{selectedArtikel && selectedArtikel.isi}</p>
        <button onClick={closeModal} className={styleArtikel.modalClose}>Close</button>
      </ReactModal>

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
