import styled from "styled-components"
import '../css/ingredients.css'

export const Button = styled.button`
  ${props => {
    if(props.simple){
      return `
        color: var(--primary);
        font: var(--body-16bold);
        border: none;
        background-color: transparent;
        cursor: pointer;
      `
    } else {
      return `
        color: var(--primary);
        background-color: var(--white);
        filter: drop-shadow(0px 18px 69px rgba(0, 0, 0, 0.03)) drop-shadow(0px 11.6667px 40.4097px rgba(0, 0, 0, 0.0227778)) drop-shadow(0px 6.93333px 21.9778px rgba(0, 0, 0, 0.0182222)) drop-shadow(0px 3.6px 11.2125px rgba(0, 0, 0, 0.015)) drop-shadow(0px 1.46667px 5.62222px rgba(0, 0, 0, 0.0117778)) drop-shadow(0px 0.333333px 2.71528px rgba(0, 0, 0, 0.00722222));
        font: var(--body-16bold);
        border: none;
        border-radius: .5rem;
        padding: .75rem 1.5rem;
        cursor: pointer;
      `
    }
  }}
 
`

export function Ingredients(){
  return (
    <section className="ingredients">
      <div className="ingredients-header">
        <h3>Ingredientes</h3>
        <span>
          <i className="icon-user"></i>
          4 Porciones
        </span>
      </div>

      <ul className="ingredients-list">
        <li>1 cucharada de aceite</li>
        <li>6 jitomates, picados</li>
        <li>1/2 pieza de cebolla, picada</li>
        <li>1 diente de ajo, picado</li>         
        <li>2 chiles anchos, sin semillas</li>         
        <li>1 Cubo de Knorr Caldo de pollo</li>         
        <li>11/2 litros de caldo de frijoles negros</li>         
        <li>2 tazas de frijoles negros, sin caldo</li>         
        <li>8 tortillas de maíz cortadas en julianas y horneadas</li>         
        <li>1 pieza de aguacate en cubos</li>         
        <li>Cilantro fresco para decorar</li>         
      </ul>

      <div className="ingredients-buttons">
        <Button>INFORMACIÓN NUTRIMENTAL</Button>
        <Button simple>
          <i className="icon-share"></i>
          COMPARTIR
        </Button>
      </div>
    </section>
  )
}