// routes.js
import home from '../views/pages/home';
import favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Like from '../views/like'; // Pastikan Anda mengimpor modul Like dengan benar

const routes = {
  '/': home, // default page
  '/home': home,
  '/favorite': favorite,
  '/detail/:id': Detail,
  '/like': Like
};

export default routes;
