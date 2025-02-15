let selectedCrypto = "";

// Un solo listener para manejar SET_CRYPTO y GET_CRYPTO
chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === "SET_CRYPTO") {
    selectedCrypto = message.crypto || ""; // Si es null, poner una cadena vacía
  } else if (message.type === "GET_CRYPTO") {
    sendResponse({ crypto: selectedCrypto || "Busca una cripto" });
  }
});
