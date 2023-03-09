
function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="Slide 1"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Slide 2"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Slide 3"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
  );
}

export default Carousel;
