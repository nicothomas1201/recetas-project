import { useEffect } from 'react'
import { gsap } from 'gsap'
import '../css/hero.css'


export function Hero(){
  const timeline = gsap.timeline()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const slogan = document.querySelector('.slogan')
      const tortilla2 = document.querySelector('.tortilla2')
      timeline.to(slogan, {opacity: 0, duration: 1,})
      .to(tortilla2, {opacity: 1, duration: 1} )
    })
  }, [timeline])


  return (
    <section className="hero">
      <div className="hero-description">
        <h1>Sopa de <br/> tortilla</h1>
        <ul className="hero-list">
          <li>
            <i className="icon-user"></i>
            <span>4</span>
          </li>
          <li>
            <i className="icon-hot"></i>
            <span>45 MIN</span>
          </li>
          <li>
            <i className="icon-media"></i>
            <span>Media</span>
          </li>
        </ul>
      </div>

      <div className="hero-center">
        <div className='hero-images'>
          <img className='tortilla1' src='./images/Sopa-Tortilla-1.png' width='331' height='639' alt='imagenes bonitas' />
          <img className='slogan' src='./images/Slogan.png' width='308' height='639' alt='imagenes bonitas' />
          <img className='tortilla2' src='./images/Sopa-Tortilla-2.png' width='331' height='639' alt='imagenes bonitas' />
        </div>
        <p>
          BENEFICIOS DE LOS 50 ALIMENTOS <br />
          DEL FUTURO
        </p>
      </div>

      <img className='bg' src='./images/bg.png' width='887' height='874' alt='background ball' />
    </section>
  )
}