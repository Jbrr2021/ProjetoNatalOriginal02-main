import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetApiDG() {
  //variaveis de estado
  const [valor, setValor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/DecoracaoGuirlandas")
      .then((res) => setValor(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="col-md-9">
      <div className="panel-body">
        <div className="pull-right"></div>
      </div>

      <div className="row product-list">
        {valor.map((d, i) => (
          <div className="col-md-4" key={i}>
            <section className="panel">
              <div className="pro-img-box">
                <img src={d.img} alt="" />
                <Link to={`/carrinho/${d.id}`} className="adtocart">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </div>
              <div className="panel-body text-center">
                <h4>
                  <Link to={`/detalhes/${d.id}`} className="pro-title">
                    {d.nome}
                  </Link>
                </h4>
                <p className="price">{d.valor}</p>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetApiDG;
//aqui
