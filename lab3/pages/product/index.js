import { store } from '../../data/store.js';
import { HeaderComponent } from '../../components/header/index.js';
import { ProductComponent } from '../../components/product/index.js';
import { ButtonComponent } from '../../components/button/index.js';
import { showToast } from '../../components/toast/index.js';

export class ProductPage {
  constructor(parent, id, navigate) {
    this.parent = parent;
    this.id = id;
    this.navigate = navigate;
  }

  render() {
    this.parent.innerHTML = '';
    const product = store.getById(this.id);
    new HeaderComponent(this.parent).render('Карточка товара', () => this.navigate('/'));
    this.parent.insertAdjacentHTML('beforeend', '<main class="container py-5" id="detail"></main>');
    const detail = document.getElementById('detail');

    if (!product) {
      detail.innerHTML = '<div class="s-empty">Товар не найден</div>';
      return;
    }
    new ProductComponent(detail).render(product);
    const actions = document.getElementById('detail-actions');
    new ButtonComponent(actions).render({ id: 'back-btn', text: 'Назад', variant: 'outline' }, () => this.navigate('/catalog'));
    new ButtonComponent(actions).render({ id: 'del-btn', text: 'Удалить' },
      () => { store.remove(product.id); showToast('Карточка удалена'); this.navigate('/catalog'); });
  }
}