import { CATEGORIES } from '../../data/products.js';

export class FiltersComponent {
  constructor(parent) { this.parent = parent; }

  getHTML(state) {
    const chips = CATEGORIES.map((c) =>
      `<button class="s-chip ${c === state.category ? 'active' : ''}" data-cat="${c}" type="button">${c}</button>`).join('');
    return `
      <div class="s-toolbar">
        <div class="s-chips">${chips}</div>
        <input id="search" class="form-control s-search" placeholder="Поиск" value="${state.query}">
      </div>`;
  }

  render(state, onCategory, onSearch) {
    this.parent.insertAdjacentHTML('beforeend', this.getHTML(state));
    this.parent.querySelectorAll('.s-chip').forEach((b) =>
      b.addEventListener('click', () => onCategory(b.dataset.cat)));
    this.parent.querySelector('#search').addEventListener('input', (e) => onSearch(e.target.value));
  }
}