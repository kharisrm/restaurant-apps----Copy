import UrlParser from '../../routes/url-parser';
import restoDbSource from '../../data/restodb--source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await restoDbSource.detailMenu(url.id);

      this._renderRestaurantDetail(restaurant);
      this._renderLikeButton(restaurant);
    } catch (error) {
      console.error('Error rendering detail page:', error);
    }
  },

  _renderRestaurantDetail(restaurant) {
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },

  _renderLikeButton(restaurant) {
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId, // Perubahan disini
        rating: restaurant.rating,
        city: restaurant.city || 'Unknown City'
      }
    });
  }
};

export default Detail;
