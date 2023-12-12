const verMaisPets = document.querySelector('#verMaisPets');
const verMaisShop = document.querySelector('#verMaisShop');
const petsSection = document.querySelector('#pets');
const shopSection = document.querySelector('#shop');
const navBtns = document.querySelectorAll('.nav__container a');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const menuMobile = document.querySelector('.menu__mobile');
const closeMenu = document.querySelector('.menu__mobile span');

const dataPets = [
  {
    nome: 'Donda',
    img: 'img/pets/cats/cat-donda.jpg',
    petImgAlt: 'Imagem de gato',
    sexo: 'Fêmea',
    idade: '1 mês',
    local: 'Cubatão/SP',
  },
  {
    nome: 'Jorge',
    img: 'img/pets/dogs/dog-jorgin.jpg',
    petImgAlt: 'Imagem de cachorro',
    sexo: 'Macho',
    idade: '2 meses',
    local: 'Praia Grande/SP',
  },
  {
    nome: 'Irineu',
    img: 'img/pets/cats/cat-irineu.jpg',
    petImgAlt: 'Imagem de gato',
    sexo: 'Macho',
    idade: '2 anos',
    local: 'Praia Grande/SP',
  },
  {
    nome: 'Lassie',
    img: 'img/pets/dogs/dog-lassie.jpg',
    petImgAlt: 'Imagem de cachorro',
    sexo: 'Fêmea',
    idade: '3 anos',
    local: 'Praia Grande/SP',
  },
  {
    nome: 'Loli',
    img: 'img/pets/cats/cat-loli.jpg',
    petImgAlt: 'Imagem de gato',
    sexo: 'Fêmea',
    idade: '4 meses',
    local: 'Guarujá/SP',
  },
  {
    nome: 'Roberto',
    img: 'img/pets/dogs/dog-robertin.jpg',
    petImgAlt: 'Imagem de cachorro',
    sexo: 'Macho',
    idade: '1 mês',
    local: 'São Vicente/SP',
  },
  {
    nome: 'Pete',
    img: 'img/pets/cats/cat-pete.jpg',
    petImgAlt: 'Imagem de gato',
    sexo: 'Macho',
    idade: '2 anos',
    local: 'São Vicente/SP',
  },
  {
    nome: 'Alfredo',
    img: 'img/pets/dogs/dog-alfredo.jpg',
    petImgAlt: 'Imagem de cachorro',
    sexo: 'Macho',
    idade: '4 anos',
    local: 'Santos/SP',
  },
  {
    nome: 'Robert',
    img: 'img/pets/cats/cat-robert.jpg',
    petImgAlt: 'Imagem de gato',
    sexo: 'Macho',
    idade: '1 mês',
    local: 'Santos/SP',
  },
];

const dataShop = [
  {
    nome: 'Brinquedo de rato',
    preco: '15,99',
    img: './img/shop/brinquedo-rato.jpeg',
  },
  {
    nome: 'Disco',
    preco: '23,99',
    img: './img/shop/disco.jpeg',
  },
  {
    nome: 'Fio para gato',
    preco: '25,99',
    img: './img/shop/fio-para-gato.jpeg',
  },
  {
    nome: 'Mordedor',
    preco: '19,99',
    img: './img/shop/mordedor.jpeg',
  },
  {
    nome: 'Novelo',
    preco: '22,99',
    img: './img/shop/novelo.jpeg',
  },
  {
    nome: 'Osso de borracha',
    preco: '17,99',
    img: './img/shop/osso-de-borracha.jpeg',
  },
  {
    nome: 'Osso de pelúcia',
    preco: '18,99',
    img: './img/shop/osso-de-pelucia.jpeg',
  },
  {
    nome: 'Rato colorido',
    preco: '21,99',
    img: './img/shop/rato-colorido.png',
  },
  {
    nome: 'Rato vermelho',
    preco: '25,99',
    img: './img/shop/rato-vermelho.jpeg',
  },
];

function displayPets() {
  dataPets.forEach((pet) => {
    if (pet.sexo === 'Macho') {
      iconImg = './icons/macho.svg';
      iconAlt = 'Sexo masculino';
      iconSex = './icons/macho.svg';
    } else {
      iconImg = './icons/femea.svg';
      iconAlt = 'Sexo feminino';
      iconSex = './icons/femea.svg';
    }

    pet.img.includes('dogs')
      ? (iconPet = './icons/cachorro.svg')
      : (iconPet = './icons/gato.svg');

    const divPet = document.createElement('div');

    divPet.innerHTML = `
    <div class="section__item translate">
            <img class="section__petImg" src=${pet.img} alt=${pet.petImgAlt}>
  
            <div class="section__infos">
              <img class="infos__icon" src=${iconPet} alt=${iconAlt}>
              <p>${pet.nome}</p>
  
              <img class="infos__icon" src=${iconSex} alt="ícone de sexo">
              <p>Macho</p>
  
              <img class="infos__icon" src="icons/bolo.svg" alt="ícone de bolo">
              <p>${pet.idade}</p>
  
              <img class="infos__icon" src="icons/localizador.svg" alt="ícone de localizador">
              <p>${pet.local}</p>
  
              <button class="sections__button ">ADOTAR</button>
            </div>
  
          </div>`;

    verMaisPets.classList.add('hidden');

    return petsSection.appendChild(divPet);
  });
}

function displayShop() {
  dataShop.forEach((item) => {
    const divShop = document.createElement('div');
    divShop.innerHTML = `
    <div class="section__item translate">
          <img class="section__shopImg" src="${item.img}" alt= >

          <div class="section__infos">
            <img class="infos__icon" src="icons/pata.svg" alt="ícone de pata">
            <p>${item.nome}</p>

            <img class="infos__icon" src="icons/dolar.svg" alt="ícone de dolar">
            <p>${item.preco}</p>

            <button class="sections__button ">COMPRAR</button>
          </div>
        </div>`;

    verMaisShop.classList.add('hidden');

    return shopSection.appendChild(divShop);
  });
}

function scrollToSection(e) {
  const targetId = e.currentTarget.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  const options = { top: targetSection.offsetTop, behavior: 'smooth' };
  window.scrollTo(options);
}

verMaisPets.addEventListener('click', () => {
  displayPets();
});

verMaisShop.addEventListener('click', () => {
  displayShop();
});

verMaisPets.addEventListener('click', () => {
  displayPets();
});

verMaisShop.addEventListener('click', () => {
  displayShop();
});

navBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(e);
  });
});

function displayMenu() {
  menu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  menuMobile.classList.toggle('hidden');
}

menu.addEventListener('click', () => {
  displayMenu();
});

overlay.addEventListener('click', () => {
  displayMenu();
});

closeMenu.addEventListener('click', () => {
  displayMenu();
});
