import API_ENDPOINT from '../globals/api-endpoint';

class restoDbSource {
  static async menuutama() {
    try {
      const response = await fetch(API_ENDPOINT.home);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();

      // Check if 'restaurants' property exists in the response
      if ('restaurants' in responseJson) {
        return responseJson.restaurants;
      }
      console.error('Error: "restaurants" property not found in response:', responseJson);
      return []; // Return an empty array if 'restaurants' property is not found
    } catch (error) {
      console.error('Error fetching menuutama:', error);
      throw error;
    }
  }

  // restodb--source.js
  static async detailMenu(id) {
    try {
      const response = await fetch(API_ENDPOINT.detail(id));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson.restaurant; // Ambil objek restaurant dari respons
    } catch (error) {
      console.error('Error fetching detailMenu:', error);
      throw error;
    }
  }
}

export default restoDbSource;
