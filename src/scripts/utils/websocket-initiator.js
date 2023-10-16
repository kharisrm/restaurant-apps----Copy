const RestoWebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log('Received raw message:', message.data);

    try {
      const parsedMessage = JSON.parse(message.data);
      console.log('Parsed message:', parsedMessage);

      // Lakukan sesuatu dengan data yang telah diparsing
      // Contoh: Memperbarui tampilan atau logika aplikasi berdasarkan pesan WebSocket
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  }
};

export default RestoWebSocketInitiator;
