import React, { useState } from "react";
import Modal from "react-modal";
import { paginateData } from "../../utility/pagination";
import EmptyInbox from "../emptyInbox/EmptyInbox";
import styleArtikel from "./Artikel.module.css";
import dataArtikel from "../../utility/dataArtikel";

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

  const styleModal = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      zIndex: 1000,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '800px', 
      height: '400px', 
      overflow: 'auto',
    },
  }

  return (
    <div id="artikel-section">
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={styleModal}
      >
        <h2>{selectedArtikel && selectedArtikel.judul}</h2>
        <img
          src={selectedArtikel && selectedArtikel.image}
          alt={selectedArtikel && `Gambar ${selectedArtikel.judul}`}
          className={styleArtikel.modalImg}
        />
        <p>{selectedArtikel && selectedArtikel.isi}</p>
        <button onClick={closeModal} className={styleArtikel.modalClose}>Close</button>
      </Modal>

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
