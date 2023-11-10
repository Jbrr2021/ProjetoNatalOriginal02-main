import React from "react";
import { useHistory } from "react-router-dom";

function FinalizarCompra() {
    const history = useHistory();

    const continuarComprando = () => {
        history.goBack(); // Navega de volta para a página anterior
    }

    return (
        <div>
            <h2>Finalizar Compra</h2>
            <button className="btn btn-primary" onClick={continuarComprando}>Continuar Comprando</button>
            {/* Adicione os elementos necessários para finalizar a compra */}
        </div>
    );
}

export default FinalizarCompra;
