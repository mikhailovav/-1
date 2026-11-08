export class ProductCardComponent {
    constructor(parent) { this.parent = parent; }
  
    getHTML(p) {
      return `
        <div class="col-6 col-md-4 col-lg-3">
          <article class="s-card" data-id="${p.id}">
            <div class="photo"><img src="${p.image}" alt="${p.title}"></div>
            ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}
            <button class="del" data-del="${p.id}" title="Удалить" type="button">×</button>
            <div class="name">${p.title}</div>
            <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
          </article>
        </div>`;
    }
  
    // onOpen / onDelete получают id карточки
    render(p, onOpen, onDelete) {
      this.parent.insertAdjacentHTML('beforeend', this.getHTML(p));
      const card = this.parent.lastElementChild.querySelector('.s-card');
      card.addEventListener('click', (e) => {
        if (e.target.dataset.del) { onDelete(e.target.dataset.del); return; }
        onOpen(card.dataset.id);
      });
    }
  }