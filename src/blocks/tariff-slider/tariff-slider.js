// (function(){
//   let swiper;

//   function initSwiper() {
//     if (window.innerWidth >= 768) {
//       if (!swiper) {
//         swiper = new Swiper('.tariff-slider__container', {
//           slidesPerView: 1,
//           spaceBetween: 16,
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
//           pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//           },
//         });
//       }
//     } else {
//       if (swiper) {
//         swiper.destroy(true, true); // Уничтожаем слайдер, если экран меньше 768px
//         swiper = null;
//       }
//     }
//   }

//   // Вызываем функцию при загрузке страницы и изменении размера окна
//   window.addEventListener('load', initSwiper);
//   window.addEventListener('resize', initSwiper);
// }());


(function () {
  const swiperInstances = new Map(); // Хранилище экземпляров Swiper

  // Функция инициализации Swiper
  function initSwiper(container) {
    if (!swiperInstances.has(container)) {
      //console.log("Инициализация Swiper для:", container);
      const swiper = new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
          nextEl: container.closest('.tab-pane').querySelector('.swiper-button-next'),
          prevEl: container.closest('.tab-pane').querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: container.closest('.tab-pane').querySelector('.swiper-pagination'),
          //clickable: true,
        },
        breakpoints: {
          480: {
            slidesPerView: 'auto',
            spaceBetween: 16
          },
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 18
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 18
          }
        },
      });
      swiperInstances.set(container, swiper); // Сохраняем экземпляр
    } else {
      //console.log("Обновление Swiper для:", container);
      swiperInstances.get(container).update(); // Обновляем, если уже инициализирован
    }
  }

  // Функция уничтожения Swiper
  function destroySwiper(container) {
    if (swiperInstances.has(container)) {
      //console.log("Удаление Swiper для:", container);
      swiperInstances.get(container).destroy(true, true);
      swiperInstances.delete(container);
    }
  }

  // Функция активации табов с учетом ширины экрана
  function handleTabActivation() {
    const activeTab = document.querySelector('.tab-pane.active'); // Находим активный таб
    if (!activeTab) return;

    const sliderContainer = activeTab.querySelector('.tariff-slider__container'); // Слайдер в активном табе

    // Если ширина экрана >= 768, инициализируем слайдер
    if (window.innerWidth >= 768) {
      if (sliderContainer) {
        initSwiper(sliderContainer); // Инициализируем или обновляем Swiper
      }
    } else {
      // Если ширина экрана < 768, уничтожаем слайдеры
      if (sliderContainer) {
        destroySwiper(sliderContainer);
      }
    }

    // Уничтожаем слайдеры в неактивных табах, если экран < 768
    document.querySelectorAll('.tab-pane').forEach((pane) => {
      if (pane !== activeTab) {
        const sliderContainer = pane.querySelector('.tariff-slider__container');
        if (window.innerWidth < 768 && sliderContainer) {
          destroySwiper(sliderContainer);
        }
      }
    });
  }

  // Добавляем обработчик клика по табам
  const tabButtons = document.querySelectorAll('.tariff-slider__btn');
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setTimeout(handleTabActivation, 100); // Небольшая задержка для корректного отображения активного таба
    });
  });

  // Инициализация Swiper при загрузке страницы
  window.addEventListener('load', handleTabActivation);

  // Инициализация и обновление слайдера при изменении размера экрана
  window.addEventListener('resize', () => {
    handleTabActivation(); // Переинициализируем слайдеры при изменении ширины
  });
})();




(function(){
  // Получаем элементы tabs и ссылки
  const tabs = document.getElementById('nav-tab');
  if (!tabs) return;

  const selector = document.querySelector('.selector');

  // Функция обновления положения и ширины .selector
  function updateSelector(target) {
    const activeWidth = target.offsetWidth;
    const itemPos = target.offsetLeft;
    selector.style.left = itemPos + 'px';
    selector.style.width = activeWidth + 'px';
  }

  // Ищем активный элемент и задаём его положение при загрузке страницы
  const activeItem = tabs.querySelector('.active');
  if (activeItem) {
    updateSelector(activeItem);
  }

  // Добавляем обработчик события click на ссылки
  tabs.addEventListener('click', function (e) {
    // Находим ближайший элемент с классом nav-link
    const target = e.target.closest('.nav-link');

    if (target) {
      e.preventDefault();
      updateSelector(target);
    }
  });

  // Добавляем обработчик события resize для пересчёта
  window.addEventListener('resize', function () {
    const activeItem = tabs.querySelector('.active');
    if (activeItem) {
      updateSelector(activeItem);
    }
  });

}());
