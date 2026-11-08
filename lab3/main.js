// Роутер (C в MVC): адрес в hash -> страница
import { HomePage } from './pages/home/index.js';
import { MainPage } from './pages/main/index.js';
import { ProductPage } from './pages/product/index.js';
// джава находит элемент html и нужный тэг div
const root = document.getElementById('root');
const navigate = (path) => { location.hash = path; };

function route() {
  const path = location.hash.slice(1) || '/';
  const match = path.match(/^\/product\/(\d+)$/);
  let page;
  if (match) page = new ProductPage(root, match[1], navigate);
  else if (path === '/catalog') page = new MainPage(root, navigate);
  else page = new HomePage(root, navigate);
  page.render();
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
route();
