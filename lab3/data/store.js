// Модель (M в MVC): единое хранилище данных
import { products } from './products.js';

let items = products.map((p) => ({ ...p }));
let nextId = Math.max(...items.map((p) => p.id)) + 1;

export const store = {
  getAll: () => items,
  getById: (id) => items.find((p) => p.id === Number(id)),
  // копия первой карточки с новым id, вставляется сразу после первой — чтобы её было видно
  addCopyOfFirst() {
    // если всё удалили, копируем первый товар из исходной коллекции
    const source = items[0] ?? products[0];
    const copy = { ...source, id: nextId++ };
    items.splice(1, 0, copy);
    return copy;
  },
  remove(id) {
    items = items.filter((p) => p.id !== Number(id));
  },
};
