import React, { useEffect, useState } from "react";
import styleArtikel from "./Artikel.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import EmptyInbox from "../emptyInbox/EmptyInbox";

function Artikel() {
  var [data, setData] = useState([]);
  var [showData, setShowData] = useState([]);
  var [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getdataartikel", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        setShowData(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setShowData(data.slice(page * 3, page * 3 + 3));
  }, [data, page]);

  function truncateText(text, maxWords) {
    const words = text.split(" ");

    if (words.length > maxWords) {
      const truncatedText = words.slice(0, maxWords).join(" ") + "...";
      return truncatedText;
    }

    return text;
  }

  return (
    <div>
      <h1 className={styleArtikel.h1}>Baca Artikel</h1>
      <div className={styleArtikel.container}>
        {showData.length > 0 ? (
          showData.map((artikel, id) => {

            const truncatedDesc = truncateText(artikel.descIsi, 30);

            return (
              <div className={styleArtikel.containerIsi} key={id}>
                <img
                  src={"http://localhost:3000/" + artikel.image}
                  className={styleArtikel.foto}
                />
                <p className={styleArtikel.judul}>{artikel.judul}</p>
                <p className={styleArtikel.isi}>{truncatedDesc}</p>
                <div className={styleArtikel.containerLink}>
                  <Link className={styleArtikel.link}>
                    <span>baca selengkapnya</span>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyInbox />
        )}
      </div>
      <div className={styleArtikel.paginationInfo}>
        <p>Page: {page + 1}</p>
      </div>
      <div className={styleArtikel.nextPrevKategori}>
        <div>
          <button
            className={styleArtikel.prevKatgeori}
            onClick={() =>
              setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0))
            }
          >
            prev
          </button>
        </div>
        <div>
          <button
            className={styleArtikel.prevKatgeori}
            onClick={() =>
              setPage((prevPage) =>
                prevPage < Math.ceil(data.length / 5) + 1
                  ? prevPage + 1
                  : prevPage
              )
            }
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Artikel;
