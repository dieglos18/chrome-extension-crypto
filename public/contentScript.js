// Extraer el nombre de la criptomoneda desde la URL
function getCryptoName() {
    const path = window.location.pathname; // /currencies/bitcoin/
    const parts = path.split("/"); 
    return parts.length > 2 ? parts[2] : null; // bitcoin
  }
  
  // Enviar la criptomoneda al popup
  function sendCryptoName() {
    const crypto = getCryptoName();
    if (crypto) {
      chrome.runtime.sendMessage({ type: "SET_CRYPTO", crypto });
    }
  }
  
  // Ejecutar al cargar la página
  window.onload = sendCryptoName;
  