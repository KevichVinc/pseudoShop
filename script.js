// fetch(`https://rickandmortyapi.com/api/character/?page=1`)
//   .then((response) => response.json())
//   .then((data) => makeCards(data.results));

function handleClick(id) {
  console.log(`${id} has been added to cart`);
}

const goods = [
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Молоток',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
];

function makeCards(goods) {
  const productContainer = document.querySelector('#productsList');
  goods.forEach((item) => {
    productContainer.innerHTML =
      productContainer.innerHTML +
      `<div class = "product" id="${item.id}">
         <div class = "name">${item.name}</div>
         <div class = "specs">${item.specs}</div>
         <div class = "price">Цена: ${item.price}</div>
         <button class = "buy" id=${item.id} type= "button" onclick="handleClick(id)"> BUY </button>
       </div>
    `;
  });
}

makeCards(goods);

document.querySelectorAll('.product').forEach((e) => {
  e.draggable = true;
  e.onDragStart = (e) => {
    e.dataTransfer.setData('id', e.target.id);
    e.target.classList.add('dragging');
  };
  e.ondragover = (e) => {
    let old = document.querySelector('.over');
    old && old.classList.remove('over');
    e.target.classList.add('over');
    e.preventDefault();
  };
  e.ondrop = (e) => {
    let old = document.querySelector('.dragging');
    old && old.classList.remove('dragging');
    old = document.querySelector('.over');
    old && old.classList.remove('over');
    let v = e.target.innerHTML;
    console.log(e.target.id);
    let fromEl = document.querySelector('#' + e.dataTransfer.getData('id'));
    e.target.innerHTML = fromEl.innerHTML;
    fromEl.innerHTML = v;
  };
});
