(function () {

  function handleScroll() {
    if (window.innerWidth <= 767) return; // Проверяем ширину экрана

    const container = document.querySelector(".benefits__inner");
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Вычисляем прогресс скролла относительно контейнера
    const scrollPercent = Math.min(
      Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0),
      1
    );

    //console.log("Scroll Percent:", scrollPercent);

    // Левый элемент (движется снизу вверх)
    const beforeOffset = -150 + scrollPercent * 500;
    // Правый элемент (движется сверху вниз)
    const afterOffset = -150 + scrollPercent * 500;

    // Применяем значения через CSS-переменные
    container.style.setProperty("--before-top", `${beforeOffset}px`);
    container.style.setProperty("--after-bottom", `${afterOffset}px`);
  }

  // Устанавливаем обработчики событий
  function setupParallax() {
    const onScroll = () => handleScroll();

    // Проверка ширины экрана и установка обработчика
    if (window.innerWidth >= 768) {
      document.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.removeEventListener("scroll", onScroll);
    }
  }

  // Запуск при загрузке и изменении размера окна
  window.addEventListener("load", setupParallax);
  window.addEventListener("resize", setupParallax);

})()
