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
    name: 'Штукатурка',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Плинтус',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Сверла',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Гвозди',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Саморезы',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Плинтус',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Рулетка',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Болгарка',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Пила',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Топор',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Кувалда',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Канцелярский нож',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Перчатки',
    specs:
      'Вес: 3 кг <br> ДхВхШ (см): 30 х 2 х 4 <br> Материалы: дерево, метал',
    price: `${Math.ceil(Math.random() * 100)}`,
  },
  {
    id: `prod${Math.ceil(Math.random() * 10000)}`,
    name: 'Малярная лента',
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
      `<div class="productCell">
         <div class = "product" id="${item.id}" draggable="true">
           <div class = "name">${item.name}</div>
           <div class = "specs">${item.specs}</div>
           <div class = "price">Цена: ${item.price}</div>
           <button class = "buy" id=${item.id} type= "button" onclick="handleClick(id)"> BUY </button>
         </div>
       </div>
    `;
  });
}

makeCards(goods);

const dragAndDrop = () => {
  const products = document.querySelectorAll('.product');
  const productCells = document.querySelectorAll('.productCell');

  const dragStart = function (e) {
    setTimeout(() => {
      this.classList.add('hide');
    });
    e.dataTransfer.setData('src', e.target.id);
  };
  const dragEnd = function () {
    this.classList.remove('hide');
  };
  const dragOver = function (e) {
    e.preventDefault();
  };
  const dragEnter = function () {
    this.classList.add('hovered');
  };
  const dragLeave = function () {
    this.classList.remove('hovered');
  };
  const dragDrop = function (e) {
    let dragSrc = document.getElementById(e.dataTransfer.getData('src'));
    let srcParent = dragSrc.parentNode;
    let dragTarget = e.currentTarget.firstElementChild;

    e.currentTarget.replaceChild(dragSrc, dragTarget);
    srcParent.appendChild(dragTarget);
  };

  productCells.forEach((cell) => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', dragDrop);
  });

  products.forEach((product) => {
    product.addEventListener('dragstart', dragStart);
    product.addEventListener('dragend', dragEnd);
  });
};

dragAndDrop();
