import { ButtonComponent } from '../../components/button/index.js';

// Титульная страница с названием бренда; кнопка «Домой» ведёт сюда
export class HomePage {
  constructor(parent, navigate) {
    this.parent = parent;
    this.navigate = navigate;
  }

  render() {
    this.parent.innerHTML = `
      <section class="s-hero">
        <p class="s-hero-top">Женская одежда · Коллекция осень — зима</p>
        <h1 class="s-hero-logo">12Storeez</h1>
        <p class="s-hero-sub">Каталог одежды</p>
        <div id="hero-btn"></div>
        <p class="s-hero-bottom">Лабораторная работа №3</p>
      </section>`;
    new ButtonComponent(document.getElementById('hero-btn')).render(
      { id: 'to-catalog', text: 'Смотреть каталог' },
      () => this.navigate('/catalog'));
  }
}
