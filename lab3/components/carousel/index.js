// Карусель из карточек (Bootstrap Carousel): в каждом слайде по 4 карточки
export class CarouselComponent {
  constructor(parent) { this.parent = parent; }

  getHTML(items, title = 'Новинки', perSlide = 4) {
    const groups = [];
    for (let i = 0; i < items.length; i += perSlide) groups.push(items.slice(i, i + perSlide));

    const slides = groups.map((group, i) => `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <div class="row g-4 px-5">
          ${group.map((p) => `
            <div class="col-6 col-lg-3">
              <div class="s-mini" data-id="${p.id}">
                <div class="photo"><img src="${p.image}" alt="${p.title}"></div>
                <div class="name">${p.title}</div>
                <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`).join('');

    const dots = groups.length > 1
      ? `<div class="carousel-indicators">${groups.map((_, i) => `
          <button type="button" data-bs-target="#new-carousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active"' : ''}></button>`).join('')}</div>`
      : '';
    const arrows = groups.length > 1
      ? `<button class="carousel-control-prev" type="button" data-bs-target="#new-carousel" data-bs-slide="prev"><span class="s-arrow">‹</span></button>
         <button class="carousel-control-next" type="button" data-bs-target="#new-carousel" data-bs-slide="next"><span class="s-arrow">›</span></button>`
      : '';

    return `
      <section class="s-carousel">
        <p class="s-title mb-3">${title}</p>
        <div id="new-carousel" class="carousel slide">
          <div class="carousel-inner">${slides}</div>
          ${arrows}
          ${dots}
        </div>
      </section>`;
  }

  // onOpen получает id карточки; повторный вызов полностью перерисовывает карусель
  render(items, onOpen) {
    this.parent.innerHTML = items.length ? this.getHTML(items) : '';
    this.parent.querySelectorAll('.s-mini').forEach((el) =>
      el.addEventListener('click', () => onOpen(el.dataset.id)));
  }
}
