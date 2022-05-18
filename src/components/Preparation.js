import '../css/preparation.css'
import { Line } from './sectionWhy'

export function Preparation(){
  return (
    <section className="preparation">
      <div className="preparation-header">
        <h2>Método de <br /> preparación</h2>
        <ul className="preparation-list">
        <span>PASO:</span>
          <li>
            <a className='is-active' href="#paso1">01</a>
          </li>
          <li>
            <a href="#paso2">02</a>
          </li>
          <li>
            <a href="#paso3">03</a>
          </li>
          <li>
            <a href="#paso4">04</a>
          </li>
          <li>
            <a href="#paso5">05</a>
          </li>
        </ul>
      </div>

      <div className="preparation-img">
        <img width='528' height='528' src="./images/image-preparation.png" alt="sopa de tortilla"></img>
      </div>

      <div className="preparation-steps">
        <div id="paso1">
          <h3>PASO UNO</h3>
          <p>
            En una sartén mediana a fuego bajo, calentar 1/2 cucharada de 
            aceite y sofreír el jitomate, la cebolla y el ajo durante 10 min, 
            retirar del fuego y reservar.
          </p>
        </div>
        <Line blockSize='2.5rem' margin='1.5rem auto' />
        <div id="paso2">
          <h3>PASO DOS</h3>
          <p>
          En una cacerola pequeña, hervir los chiles con suficiente agua durante 10 min o hasta que estén blandos, retirar y reservar.
          </p>
        </div>
        <Line blockSize='2.5rem' margin='1.5rem auto' />
        <div id="paso3">
          <h3>PASO TRES</h3>
          <p>
            En un vaso de licuadora colocar, el sofrito de jitomate, los chiles anchos, Knorr® Caldo de Pollo y licuar hasta integrar todos los ingredientes. Reservar.
          </p>
        </div>
        <Line blockSize='2.5rem' margin='1.5rem auto' />
        <div id="paso4">
          <h3>PASO CUATRO</h3>
          <p>
            En una cacerola mediana a fuego medio, calentar 1/2 cucharada de aceite, añadir la salsa de jitomate, freír durante 3 min. Agregar el caldo de frijol y los frijoles cocidos y cocer durante 15 min a fuego bajo y reservar.
          </p>
        </div>
        <Line blockSize='2.5rem' margin='1.5rem auto' />
        <div id="paso5">
          <h3>PASO CINCO</h3>
          <p>
            En un plato hondo, colocar julianas de tortilla y bañar con el caldillo de frijol. Servir con cubos de aguacate y cilantro fresco.
          </p>
        </div>
      </div>
    </section>
    
  )
}