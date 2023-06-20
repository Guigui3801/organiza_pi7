import React from "react";
import "./AppServices.scss";

const AppServices = () => {
  return (
    <div className="AppServices">
      <div className="service-container">
        <div className="pomodoro-service">
          <h1>Pomodoro</h1>
          <p>
            Uma técnica de gerenciamento de tempo que usa um cronômetro para
            dividir o trabalho em intervalos, tradicionalmente de 25 minutos de
            trabalho, separados por intervalos curtos de descanso.
          </p>
        </div>
        <div className="task-service">
          <h1>Lista de tarefas</h1>
          <p>
            Para se organizar melhor é necessário seguir passos, por isso montar
            uma rotina é ideal para a oraganização.
          </p>
        </div>
      </div>
      <div className="image-container">
        <h1>Compre nosso ebook</h1>
        <img
          src="https://m.media-amazon.com/images/I/4155g1yc1uL.jpg"
          alt="Imagem Centralizada"
        />
      </div>
    </div>
  );
};

export default AppServices;
