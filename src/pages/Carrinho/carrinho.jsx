import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../Carrinho/buttonCartao.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Carrinho() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [val, setVal] = useState(0);
  const [formData, setFormData] = useState({
    nome: "",
    numeroCartao: "",
    dataValidade: "",
    codigoSeguranca: "",
  });
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/DecoracaoBolas/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Calcular o total quando o estado val ou data for alterado
    const calcularTotal = () => {
      return (data.valor * val).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    };

    // Atualizar o total sempre que o estado val ou data for alterado
    setTotal(calcularTotal());
  }, [val, data]);

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
      <div style={{ textAlign: "center" }}>
        <h2>Carrinho de compras</h2>
        <div style={{ display: "inline-block", textAlign: "left" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={data.img}
                style={{
                  width: "180px",
                  height: "180px",
                  display: "block",
                  margin: "auto",
                }}
                alt={data.nome}
              />
            </div>
            <div>
              <h3>Nome do produto</h3>
              {data.nome}
            </div>
            <div>
              <h3>Valor do produto</h3>
              {data.valor}
            </div>
            <div>
              <label htmlFor="inputState" className="form-label">
                Quantidade de produtos:
              </label>
              <br />
              <select onChange={(e) => setVal(e.target.value)}>
                <option value="" disabled>
                  Quantidades do produto:
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </div>
            <br />
            <div>Total: {total} </div>
          </div>
        </div>
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
                Fechar Pedido
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
          <strong>Sucesso!</strong> Você conseguiu, parabéns!
        </div>
      )}
      <Footer />
    </>
  );
}

export default Carrinho;
