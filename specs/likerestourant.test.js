import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestoIdb from "../src/scripts/data/favorite-resto-idb";

describe("Liking A Restaurant", () => {
  it("should show the like button when the restaurant has not been liked before", async () => {
    // Arrange
    const restaurant = { id: "test1", name: "Sample Restaurant" };

    // Act
    await LikeButtonInitiator.init({
      likeButtonContainer: document.body,
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant,
    });

    // FIX: Ini tdk sesuai ama template creator createLikeButtonTemplate() - lihat aria labelnya
    // Km tulis bkn "like this movie" tapi restaurant
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    // Arrange
    const restaurant = { id: "test2", name: "Sample Restaurant" };

    // Act
    await LikeButtonInitiator.init({
      likeButtonContainer: document.body,
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant,
    });

    // FIX: Ini tdk sesuai ama template creator createLikeButtonTemplate() - lihat aria labelnya
    // ini hrsnya "unline" bkn "like"
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    const restaurant = { id: "test3", name: "Sample Restaurant" };

    // Act
    await LikeButtonInitiator.init({
      likeButtonContainer: document.body,
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant,
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    // Assert
    expect(await FavoriteRestoIdb.getRestaurant(restaurant.id)).toEqual(restaurant);
    await FavoriteRestoIdb.deleteRestaurant("test3");
  });

  it("should not add a restaurant again when it's already liked", async () => {
    const restaurant = { id: "test4", name: "Sample Restaurant" };

    // Act
    await LikeButtonInitiator.init({
      likeButtonContainer: document.body,
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant,
    });

    await FavoriteRestoIdb.putRestaurant(restaurant);

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    // Assert
    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([restaurant]);
    await FavoriteRestoIdb.deleteRestaurant("test4");
  });

  it("should not show the like button when the restaurant has been liked", async () => {
    // Arrange
    const restaurant = { id: "test5", name: "Sample Restaurant" };

    // Act
    await LikeButtonInitiator.init({
      likeButtonContainer: document.body,
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant,
    });

    await FavoriteRestoIdb.putRestaurant(restaurant);

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
    await FavoriteRestoIdb.deleteRestaurant("test5");
  });

  it("should be able to remove the liked restaurant", async () => {
    // Arrange
    const restaurant = { id: "test6", name: "Sample Restaurant" };

    // FIX: ini dimasukkin dlu ya baru init tombolnya
    await FavoriteRestoIdb.putRestaurant(restaurant);

    await LikeButtonInitiator.init({
      likeButtonContainer: document.body,
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant,
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    // Assert
    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
    await FavoriteRestoIdb.deleteRestaurant("test6");
  });
});
