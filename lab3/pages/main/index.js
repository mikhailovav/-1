import { store } from '../../data/store.js';
import { HeaderComponent } from '../../components/header/index.js';
import { FiltersComponent } from '../../components/filters/index.js';
import { ProductCardComponent } from '../../components/product-card/index.js';
import { ButtonComponent } from '../../components/button/index.js';
import { showToast } from '../../components/toast/index.js';
import { CarouselComponent } from '../../components/carousel/index.js';

// Состояние фильтров живёт вне страницы, чтобы сохраняться при возврате
const state = { category: 'Все', query: '' };
let highlightId = null; // id только что добавленной карточки

export class MainPage {
  constructor(parent, navigate) {
    this.parent = parent;
    this.navigate = navigate;
  }

  get filtered() {
    const q = state.query.trim().toLowerCase();
    return store.getAll().filter((p) =>
      (state.category === 'Все' || p.category === state.category) &&
      p.title.toLowerCase().includes(q));
  }

  render() {
    this.parent.innerHTML = '';
    new HeaderComponent(this.parent).render('Каталог', () => this.navigate('/'));

    this.parent.insertAdjacentHTML('beforeend', `
      <main class="container-fluid px-4 pb-5">
        <div id="carousel"></div>
        <div id="filters"></div>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <p class="s-title" id="count"></p><div id="add-wrap"></div>
        </div>
        <div class="row g-4" id="grid"></div>
      </main>`);

    new FiltersComponent(document.getElementById('filters')).render(state,
      (cat) => { state.category = cat; this.render(); },
      (q) => { state.query = q; this.renderGrid(); });
    new ButtonComponent(document.getElementById('add-wrap')).render(
      { id: 'add-btn', text: '+ Добавить', variant: 'outline' },
      () => {
        const copy = store.addCopyOfFirst();
        if (!copy) return;
        // сбрасываем фильтры, чтобы новая карточка точно была видна
        state.category = 'Все';
        state.query = '';
        highlightId = copy.id;
        this.render();
        showToast(`Добавлена копия: ${copy.title}`);
      });

    this.renderCarousel();
    this.renderGrid();
  }

  // карусель «Новинки»: первые 8 товаров, по 4 в слайде
  renderCarousel() {
    new CarouselComponent(document.getElementById('carousel')).render(
      store.getAll().slice(0, 8),
      (id) => this.navigate(`/product/${id}`));
  }

  // перерисовываем только сетку, чтобы поле поиска не теряло фокус
  renderGrid() {
    const grid = document.getElementById('grid');
    const items = this.filtered;
    grid.innerHTML = '';
    document.getElementById('count').textContent = `Товаров: ${items.length}`;
    if (!items.length) { grid.innerHTML = '<div class="s-empty">Ничего не найдено</div>'; return; }
    const card = new ProductCardComponent(grid);
    items.forEach((p) => card.render(p,
      (id) => this.navigate(`/product/${id}`),
      (id) => { store.remove(id); this.renderCarousel(); this.renderGrid(); showToast('Карточка удалена'); }));
    if (highlightId) {
      grid.querySelector(`[data-id="${highlightId}"]`)?.classList.add('is-new');
      highlightId = null;
    }
  }
}