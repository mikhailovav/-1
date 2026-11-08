// Шапка: логотип + кнопка «Домой» (есть на обеих страницах)
export class HeaderComponent {
    constructor(parent) { this.parent = parent; }
  
    getHTML(title) {
      return `
        <header class="s-header">
          <div class="inner">
            <button id="home-btn" class="s-link" type="button">← Домой</button>
            <span class="s-logo" id="logo">12Storeez</span>
            <div class="s-actions"><span class="s-link muted">${title}</span></div>
          </div>
        </header>`;
    }
  
    render(title, onHome) {
      this.parent.insertAdjacentHTML('beforeend', this.getHTML(title));
      document.getElementById('home-btn').addEventListener('click', onHome);
      document.getElementById('logo').addEventListener('click', onHome);
    }
  }