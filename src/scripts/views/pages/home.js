// home.js
import UrlParser from "../../routes/url-parser";
import restoDbSource from "../../data/restodb--source";
import createRestaurantItemTemplate from "../templates/createRestaurantItemTemplate";

// Move the function declaration to the top
function handleDetailButtonClick() {
  const restaurantId = this.getAttribute("data-id");
  sessionStorage.setItem("selectedRestaurantId", restaurantId);

  // Redirect to detail page
  UrlParser.navigateTo(`#/detail/${restaurantId}`);
}

const Home = {
  async render() {
    return `
      <main id="mainContent" tabindex="0">
        <div class="hero">
          <img src="./images/heros/hero-image_4.jpg" alt="" />
        </div>
        <div id="restaurants" class="restaurants-container">
          <!-- Restaurant items will be rendered here -->
        </div>
      </main>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.getElementById("restaurants");

    try {
      // Clear existing event listeners
      restaurantsContainer.innerHTML = "";

      const menu = await restoDbSource.menuutama();

      // Check if menu is not undefined and is an array
      if (menu !== undefined && Array.isArray(menu)) {
        menu.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });

        // Add event listener to each detail button
        const detailButtons = document.querySelectorAll(".restaurant-item__button");
        detailButtons.forEach((button) => {
          button.removeEventListener("click", handleDetailButtonClick);
          button.addEventListener("click", handleDetailButtonClick);
        });
      } else {
        console.error("Menu is undefined or not an array:", menu);
      }
    } catch (error) {
      console.error("Error fetching menuutama:", error);
    }
  },
};

export default Home;
