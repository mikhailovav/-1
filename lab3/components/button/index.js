export class ButtonComponent {
    constructor(parent) { this.parent = parent; }
  
    getHTML({ id, text, variant = '' }) {
      return `<button id="${id}" class="s-btn ${variant}" type="button">${text}</button>`;
    }
  
    render(data, listener) {
      this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
      document.getElementById(data.id).addEventListener('click', listener);
    }
  }