import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <div class="restaurant__info">
    <div class="restaurant__image">
      <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant__img" />
    </div>
    <h3>Information</h3>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Categories</h4>
    <ul>
      ${restaurant.categories.map((category) => `<li>${category.name}</li>`).join("")}
    </ul>
  </div>
  <div class="restaurant__menus">
    <h3>Menus</h3>
    <div class="restaurant__menu-group">
      <h4>Foods</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join("")}
      </ul>
    </div>
    <div class="restaurant__menu-group">
      <h4>Drinks</h4>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join("")}
      </ul>
    </div>
  </div>
  <div class="restaurant__reviews">
    <h3>Customer Reviews</h3>
    <ul>
      ${restaurant.customerReviews
        .map(
          (review) => `
        <li>
          <p>${review.name}</p>
          <p>${review.review}</p>
          <p>${review.date}</p>
        </li>
      `
        )
        .join("")}
    </ul>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
