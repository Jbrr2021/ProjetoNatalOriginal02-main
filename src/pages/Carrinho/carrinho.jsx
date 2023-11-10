import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../Carrinho/buttonCartao.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Carrinho() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    numeroCartao: "",
    dataValidade: "",
    codigoSeguranca: "",
  });
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/produtos/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário submetido:", formData);
    // Verifica se os campos do formulário estão preenchidos
    if (
      formData.nome &&
      formData.numeroCartao &&
      formData.dataValidade &&
      formData.codigoSeguranca
    ) {
      setCompraFinalizada(true);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h2>teste de renderização</h2>
        <img
          src={data.img}
          style={{ width: "150px", height: "150px" }}
          alt={data.nome}
        />
        <br />
        <h3>Nome do produto</h3>
        {data.nome} <br />
        <h3>Valor do produto</h3>
        R$ {data.valor},00
      </div>
      {!compraFinalizada ? (
        <>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="numeroCartao" className="form-label">
                Número do Cartão
              </label>
              <input
                type="text"
                className="form-control"
                id="numeroCartao"
                name="numeroCartao"
                value={formData.numeroCartao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dataValidade" className="form-label">
                Data de Validade
              </label>
              <input
                type="text"
                className="form-control"
                id="dataValidade"
                name="dataValidade"
                value={formData.dataValidade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="codigoSeguranca" className="form-label">
                Código de Segurança
              </label>
              <input
                type="text"
                className="form-control"
                id="codigoSeguranca"
                name="codigoSeguranca"
                value={formData.codigoSeguranca}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nome" className="form-label">
                Nome no Cartão
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-success">
                Finalizar Compra
              </button>
              <Link to="/" className="btn btn-primary">
                Continuar Comprando
              </Link>
            </div>
          </form>
          {formData.nome &&
          formData.numeroCartao &&
          formData.dataValidade &&
          formData.codigoSeguranca ? null : (
            <div className="mensagem-cadastro">
              Cadastre um cartão para continuar sua compra.
            </div>
          )}
        </>
      ) : (
        <div>
          <h3>Obrigado por comprar em nossa loja!</h3>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Carrinho;
