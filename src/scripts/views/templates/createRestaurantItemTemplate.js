import CONFIG from '../../globals/config';

// ... code sebelumnya ...

const createRestaurantItemTemplate = restaurant => `
  <div class="restaurant-item">
    <img class="restaurant-item__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant-item__info">
      <h3 class="restaurant-item__name">${restaurant.name}</h3>
      <p class="restaurant-item__city">${restaurant.city}</p>
      <p class="restaurant-item__rating">Rating: ${restaurant.rating}</p>
      <button class="restaurant-item__button" data-id="${restaurant.id}">Detail</button>
    </div>
  </div>
`;

export default createRestaurantItemTemplate;
