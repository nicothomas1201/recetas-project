// import logo from '../images/logo.png'
import '../css/header.css'

export function Header(){
  return (
    <header className="header">
      <div className="header-logo">
        <img src='./images/logo.png' width='48' height='48' alt='logo' />
      </div>
      <i className="icon-search"></i>
    </header>
  )
}