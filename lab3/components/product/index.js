export class ProductComponent {
    constructor(parent) { this.parent = parent; }
  
    getHTML(p) {
      return `
        <div class="row g-5 s-detail">
          <div class="col-md-6 col-lg-5 offset-lg-1"><div class="photo"><img src="${p.image}" alt="${p.title}"></div></div>
          <div class="col-md-6 col-lg-5">
            <p class="s-title text-secondary mb-2">${p.category}</p>
            <h1>${p.title}</h1>
            <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
            <p>${p.description}</p>
            <div class="s-sizes mt-4">${p.sizes.map((s) => `<span>${s}</span>`).join('')}</div>
            <dl>
              <div><dt>Цвет</dt><dd>${p.color}</dd></div>
              <div><dt>Состав</dt><dd>${p.material}</dd></div>
              <div><dt>Артикул</dt><dd>12S-${String(p.id).padStart(4, '0')}</dd></div>
            </dl>
            <div id="detail-actions" class="d-flex gap-3 mt-4"></div>
          </div>
        </div>`;
    }
  
    render(p) { this.parent.insertAdjacentHTML('beforeend', this.getHTML(p)); }
  }