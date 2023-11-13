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
  const [clienteFormData, setClienteFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    email: "",
    rua: "",
    complemento: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone: "",
  });
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const [total, setTotal] = useState(0);
  const [clienteCadastrado, setClienteCadastrado] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/DecoracaoBolas/${id}")
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

  const handleClienteChange = (e) => {
    const { name, value } = e.target;
    setClienteFormData({
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

  const handleClienteSubmit = (e) => {
    e.preventDefault();
    if (
      clienteFormData.nomeCompleto &&
      clienteFormData.cpf &&
      clienteFormData.email &&
      clienteFormData.rua &&
      clienteFormData.complemento &&
      clienteFormData.cidade &&
      clienteFormData.estado &&
      clienteFormData.cep &&
      clienteFormData.telefone
    ) {
      setClienteCadastrado(true);
    }
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h2>Carrinho de compras</h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
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
          {/* Formulário do Cartão */}
          <form
            className="for-container-cartao"
            onSubmit={handleSubmit}
            className="form-container"
          >
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
              <strong>Cadastre um cartão para continuar sua compra.</strong>
            </div>
          )}
          {/* Formulário de Cadastro de Cliente */}
          <form>
            <label htmlFor="nomeCompleto" className="form-label">
              Nome Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="nomeCompleto"
              name="nomeCompleto"
              value={clienteFormData.nomeCompleto}
              onChange={handleClienteChange}
              required
            />
            <label htmlFor="nomeCompleto" className="form-label">
              CPF
            </label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              name="cpf"
              value={clienteFormData.cpf}
              onChange={handleClienteChange}
              required
            />
            <label htmlFor="nomeCompleto" className="form-label">
              E-mail
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={clienteFormData.email}
              onChange={handleClienteChange}
              required
            />
            <label htmlFor="nomeCompleto" className="form-label">
              Rua
            </label>
            <input
              type="text"
              className="form-control"
              id="rua"
              name="rua"
              value={clienteFormData.rua}
              onChange={handleClienteChange}
              required
            />
            <label htmlFor="nomeCompleto" className="form-label">
              Complemento
            </label>
            <input
              type="text"
              className="form-control"
              id="complemento"
              name="complemento"
              value={clienteFormData.complemento}
              onChange={handleClienteChange}
              required
            />
            <label htmlFor="nomeCompleto" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              className="form-control"
              id="cidade"
              name="cidade"
              value={clienteFormData.cidade}
              onChange={handleClienteChange}
              required
            />
            <label htmlFor="nomeCompleto" className="form-label">
              Estado
            </label>
            <input
              type="text"
              className="form-control"
              id="estado"
              name="estado"
              value={clienteFormData.estado}
              onChange={handleClienteChange}
              required
            />
            <label htmlFor="nomeCompleto" className="form-label">
              CEP
            </label>
            <input
              type="text"
              className="form-control"
              id="cep"
              name="cep"
              value={clienteFormData.cep}
              onChange={handleClienteChange}
              required
            />
            <label htmlFor="nomeCompleto" className="form-label">
              Telefone
            </label>
            <input
              type="text"
              className="form-control"
              id="nomeCompleto"
              name="nomeCompleto"
              value={clienteFormData.telefone}
              onChange={handleClienteChange}
              required
            />
          </form>
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
