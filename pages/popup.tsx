import React, { useState } from 'react';

const Popup = () => {
  const [crypto, setCrypto] = useState('');

  return (
    <div className="w-64 p-4 bg-white text-black">
      <h2 className="text-lg font-bold">Crypto Insight</h2>
      <input
        type="text"
        placeholder="Buscar criptomoneda..."
        value={crypto}
        onChange={(e) => setCrypto(e.target.value)}
        className="w-full p-2 border rounded mt-2"
      />
      <button
        className="w-full mt-2 p-2 bg-blue-500 text-white rounded"
        onClick={() => alert(`Buscando datos de ${crypto}`)}
      >
        Analizar
      </button>
    </div>
  );
};

export default Popup;
