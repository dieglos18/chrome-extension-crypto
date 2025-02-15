// Extraer el nombre de la criptomoneda desde la URL
function getCryptoName() {
  const path = window.location.pathname; // /currencies/bitcoin/
  const parts = path.split("/");
  return parts.length > 2 ? parts[2] : null; // bitcoin
}

// Enviar la criptomoneda al background script
function sendCryptoName() {
  const crypto = getCryptoName();
  chrome.runtime.sendMessage({
    type: "SET_CRYPTO",
    crypto: crypto || "", // Si no hay cripto, envía una cadena vacía
  });
}

// Detectar cambios en la URL sin recargar la página
let lastUrl = location.href;
new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    sendCryptoName();
  }
}).observe(document, { subtree: true, childList: true });

// Ejecutar al cargar la página
sendCryptoName();
