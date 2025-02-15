let selectedCrypto = "";

// Listener to handle the message of SET_CRYPTO
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "SET_CRYPTO") {
    selectedCrypto = message.crypto;
  }
});

// Listener to handle the message of GET_CRYPTO
chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === "GET_CRYPTO") {
    sendResponse({ crypto: selectedCrypto });
  }
});
