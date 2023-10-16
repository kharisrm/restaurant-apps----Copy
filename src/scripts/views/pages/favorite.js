// import restoDbSource from '../../data/restodb--source';

const favorite = {
  async render() {
    return `
    <div class="hero">
      <img src="./images/heros/hero-image_4.jpg" width="450" alt="" />
    </div>
    `;
  },

  async afterRender() {
    // Jika nantinya Anda menggunakan variabel restoDbSource, Anda dapat menyimpannya di sini.
    // const data = await restoDbSource.getData();
  },
};

export default favorite;
