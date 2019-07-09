const preLoader = (() => {
  window.addEventListener('load', () =>
    document.querySelector('.preloader').classList.add('hidePreloader')
  );
})();

const createCars = (() => {
  const cars = [];

  class Car {
    constructor(make, country, img, special, model, price, type, trans, gas) {
      this.make = make;
      this.country = country;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.trans = trans;
      this.gas = gas;
    }
  }

  function makeCar(
    make,
    country,
    img = 'img/Hero.jpg',
    special = true,
    model = 'new model',
    price = 10000,
    type = 'sedan',
    trans = 'automatic',
    gas = '50'
  ) {
    const car = new Car(
      make,
      country,
      img,
      special,
      model,
      price,
      type,
      trans,
      gas
    );

    cars.push(car);
  }

  function produceCars() {
    makeCar(
      'chevy',
      'american',
      'img/chevy-1.jpg',
      true,
      undefined,
      20000,
      'sedan',
      'manual'
    );
    makeCar('mercedes', 'german', 'img/mercedes-1.jpg');
    makeCar('mercedes', 'german', 'img/mercedes-2.jpg');
    makeCar('mercedes', 'german', 'img/mercedes-3.jpg', false);
    makeCar('mercedes', 'german', 'img/mercedes-4.jpg');
    makeCar('mercedes', 'german', 'img/mercedes-5.jpg', false);
    makeCar('chevy', 'american', 'img/chevy-2.jpg');
  }

  produceCars();

  const specialCars = cars.filter(car => car.special === true);

  return {
    cars,
    specialCars
  };
})();

const displaySpecialCars = (createCars => {
  const specialCars = createCars.specialCars;

  const info = document.querySelector('.featured-info');

  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = '';

    let data = '';

    specialCars.forEach(item => {
      data += `          
      <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
      <span data-img="${item.img}" class="featured-icon mr-2">
          <i class="fas fa-car"></i>
        </span>
        <h5 class="font-weight-bold mx-1">${item.make}</h5>
        <h5 class="mx-1">${item.model}</h5>
      </div>`;
    });
    info.innerHTML = data;
  });

  info.addEventListener('click', event => {
    if (event.target.parentElement.classList.contains('featured-icon')) {
      const img = event.target.parentElement.dataset.img;
      document.querySelector('.featured-photo').src = img;
    }
  });
})(createCars);

const displayCars = (createCars => {
  const cars = createCars.cars;
  const inventory = document.querySelector('.inventory-container');

  document.addEventListener('DOMContentLoaded', () => {
    inventory.innerHTML = '';

    let output = '';

    cars.forEach(car => {
      output += `
      <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${
        car.country
      }">
      <div class="card car-card">
      <img src="${car.img}" class="card-img-top car-img" alt="car">
      <div class="card-body">
      <div class="car-info d-flex justify-content-between">
      <div class="car-text text-uppercase">
      <h6 class="font-weight-bold">${car.make}</h6>
      <h6>${car.model}</h6>
      </div>
      <h5 class="car-value align-self-center py02 px-3">
      $ <span class="car-price">${car.price}</span>
      </h5>
      </div>
      </div>
      <div class="card-footer text-capitalize d-flex justify-content-between">
      <p><span><i class="fas fa-car"></i>${car.type}</span></p>
      <p><span><i class="fas fa-cogs"></i>${car.trans}</span></p>
      <p><span><i class="fas fa-gas-pump"></i>${car.gas}</span></p>
      </div>
      </div>
      </div>`;
    });
    inventory.innerHTML = output;
  });
})(createCars);

const filterCars = (() => {
  const filter = document.querySelectorAll('.filter-btn');

  filter.forEach(btn => {
    btn.addEventListener('click', event => {
      const value = event.target.dataset.filter;
      const singleCar = document.querySelectorAll('.single-car');

      singleCar.forEach(car => {
        if (value === 'all') {
          car.style.display = 'block';
        } else {
          !car.classList.contains(value)
            ? (car.style.display = 'none')
            : (car.style.display = 'block');
        }
      });
    });
  });
})();

const modal = document.querySelector('.work_modal');

const showModal = (() => {
  const img = document.querySelector('.img-container');
  const modalItem = document.querySelector('.work-modal_item');

  img.addEventListener('click', event => {
    event.preventDefault();
    const link = document.querySelector('.featured-photo').src;
    modal.classList.add('work_modal-show');
    modalItem.style.backgroundImage = `url(${link})`;
  });
})();

const closeModal = (() => {
  document.querySelector('.work-modal_close').addEventListener('click', () => {
    modal.classList.remove('work_modal-show');
  });
})();
