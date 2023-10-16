import CONFIG from './config';

const API_ENDPOINT = {
  home: `${CONFIG.BASE_URL}list`,
  detail: id => `${CONFIG.BASE_URL}detail/${id}` // <-- huruf "d" kecil
};

export default API_ENDPOINT;
