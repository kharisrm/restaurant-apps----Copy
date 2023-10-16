import FavoriteRestaurantIdb from '../data/favorite-resto-idb';
// Pada file like.js
import createRestaurantItemTemplate from './templates/createRestaurantItemTemplate';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurants</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach(restaurant => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  }
};

export default Like;
