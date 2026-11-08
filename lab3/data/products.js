// Mock-коллекция товаров (вместо backend). Иллюстрации изделий лежат в папке images.

export const CATEGORIES = ['Все', 'Платья', 'Брюки', 'Верхняя одежда', 'Трикотаж', 'Рубашки'];

export const products = [
  { id: 1, title: 'Платье миди из шерсти', category: 'Платья', price: 18900, color: 'Чёрный', material: 'Шерсть 70%, вискоза 30%', sizes: ['XS', 'S', 'M', 'L'], tag: 'New', description: 'Приталенное платье длины миди с глубоким вырезом на спине. Мягкая шерстяная ткань держит форму.', image: 'images/dress.svg' },
  { id: 2, title: 'Брюки палаццо', category: 'Брюки', price: 12400, color: 'Молочный', material: 'Вискоза 55%, лён 45%', sizes: ['XS', 'S', 'M', 'L', 'XL'], tag: '', description: 'Широкие брюки с высокой посадкой и заутюженными стрелками. Идеальны для базового гардероба.', image: 'images/trousers.svg' },
  { id: 3, title: 'Тренч оверсайз', category: 'Верхняя одежда', price: 29900, color: 'Бежевый', material: 'Хлопок 100%', sizes: ['S', 'M', 'L'], tag: 'New', description: 'Классический тренч свободного кроя с поясом и двубортной застёжкой.', image: 'images/trench.svg' },
  { id: 4, title: 'Джемпер из кашемира', category: 'Трикотаж', price: 21500, color: 'Серый меланж', material: 'Кашемир 100%', sizes: ['XS', 'S', 'M', 'L'], tag: '', description: 'Тонкий джемпер с круглым вырезом из итальянской пряжи. Не колется и греет.', image: 'images/sweater.svg' },
  { id: 5, title: 'Рубашка из поплина', category: 'Рубашки', price: 8900, color: 'Белый', material: 'Хлопок 100%', sizes: ['XS', 'S', 'M', 'L', 'XL'], tag: '', description: 'Объёмная рубашка с удлинённой спинкой и скрытой планкой.', image: 'images/shirt.svg' },
  { id: 6, title: 'Пальто прямого кроя', category: 'Верхняя одежда', price: 34900, color: 'Графит', material: 'Шерсть 80%, кашемир 20%', sizes: ['S', 'M', 'L'], tag: 'Sale', description: 'Лаконичное пальто с втачными карманами и цельнокроеным рукавом.', image: 'images/coat.svg' },
  { id: 7, title: 'Платье-комбинация', category: 'Платья', price: 11200, color: 'Шампань', material: 'Шёлк 100%', sizes: ['XS', 'S', 'M'], tag: '', description: 'Платье на тонких бретелях из матового шёлка. Носить отдельно или с трикотажем.', image: 'images/slip.svg' },
  { id: 8, title: 'Брюки-карго', category: 'Брюки', price: 9800, color: 'Хаки', material: 'Хлопок 100%', sizes: ['XS', 'S', 'M', 'L'], tag: '', description: 'Свободные брюки с накладными карманами и регулируемым низом.', image: 'images/cargo.svg' },
];