import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ produto }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <div className="col-md-9">
      <div className="panel-body">
        <div className="pull-right">
          <button onClick={() => adicionarAoCarrinho(produto)} className="adtocart">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <div className="row product-list">
        <div className="col-md-4">
          <section className="panel">
            <div className="pro-img-box">
              <Link to={`/carrinho/${produto.id}`}>
                <img src={produto.img} alt="" />
              </Link>
            </div>
            <div className="panel-body text-center">
              <h4>
                <Link to={`/carrinho/${produto.id}`} className="pro-title">
                  {produto.nome}
                </Link>
              </h4>
              <p className="price">${produto.valor}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Card;
