import React, { useEffect, useState } from "react";

const Popup = () => {
  const [crypto, setCrypto] = useState("");

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "GET_CRYPTO" }, (response) => {
      if (response?.crypto) {
        setCrypto(response.crypto);
      }
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 p-4 bg-white text-black">
        <h2 className="text-lg font-bold">Crypto Insight</h2>
        <input
          type="text"
          placeholder="Buscar criptomoneda..."
          value={crypto}
          readOnly
          className="w-full p-2 border rounded mt-2 bg-gray-200"
        />
        <button
          className="w-full mt-2 p-2 bg-blue-500 text-white rounded"
          onClick={() => alert(`Buscando datos de ${crypto}`)}
        >
          Analizar {crypto}
        </button>
      </div>
    </div>
  );
};

export default Popup;
