Feature("Liking restaurant");

Scenario("Like and Unlike a restaurant", ({ I }) => {
  // Menjalankan aplikasi, sesuaikan dengan URL aplikasi Anda
  I.amOnPage("/");

  // Menyukai restoran
  I.click(locate(".like-button")); // Sesuaikan dengan selector tombol "like" di aplikasi Anda
  I.see("Restaurant liked!", ".toast-message"); // Sesuaikan dengan pesan yang muncul setelah menyukai restoran

  // Memeriksa bahwa restoran disukai
  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item"); // Sesuaikan dengan selector elemen restoran di halaman favorit

  // Membatalkan menyukai restoran
  I.click(locate(".like-button")); // Sesuaikan dengan selector tombol "unlike" di aplikasi Anda
  I.see("Restaurant removed from favorite!", ".toast-message"); // Sesuaikan dengan pesan yang muncul setelah menghapus restoran dari favorit

  // Memeriksa bahwa restoran tidak lagi disukai
  I.amOnPage("/#/favorite");
  I.dontSeeElement(".restaurant-item"); // Pastikan tidak ada elemen restoran di halaman favorit
});
