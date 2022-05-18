import '../css/section-why.css'
import styled from 'styled-components'

export const Line = styled.div`
  block-size: ${props => props.blockSize};
  inline-size: 1px;
  background-color: #000000;
  margin: ${props => props.margin};
` 

export function SectionWhy(){
  return (
    <section className="sectionWhy">
      <div className="sectionWhy-titles">
        <h3>¿POR QUÉ NOS ENCANTAN?</h3>
        <Line blockSize='5rem' margin='2rem auto'/>
        <h2>Frijoles Negros</h2>
      </div>
      <div className="sectionWhy-description">
        <div className="sectionWhy-des">
          <div className="sectionWhy-img">
            <img src="./images/Heart.png" width='64' height='64' alt="heart world"/>
            <span>BUENO PARA TI</span>
          </div>

          <h2>Ayuda a mejorar la función intestinal</h2>
          <p>
            Tengo un alto contenido en fibra, que puede ayudar a mantener 
            tus intestinos saludables. Come frijoles y tu panza te lo agradecerá.
          </p>
        </div>

        <div className="sectionWhy-bean">
          <img src="./images/bean.png" width='200' height='288' alt='black bean'/>
        </div>

        <div className="sectionWhy-des">
          <div className="sectionWhy-img">
            <img src="./images/world.png" width='64' height='64' alt="green world"/>
            <span>BUENO PARA EL MEDIO AMBIENTE</span>
          </div>

          <h2>Nutre al suelo</h2>
          <p>
            Ayudo a transformar el nitrógeno del aire en un componente que las plantas
            necesitan para crecer, haciendo que la tierra sea más fértil para que otras
            plantas puedan florecer.
          </p>
        </div>
      </div>
    </section>

  )
}