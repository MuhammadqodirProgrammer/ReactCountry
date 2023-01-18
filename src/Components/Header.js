
import './header.css'
import mode from './moon-2304.svg'
// import mode2 from './circle-half-stroke-solid.svg'
function Header() {
    return(
        <header className="header">
        <h1>Country</h1>
      <button className='mode'>
      <img className='mode-img' src={mode} alt="mode" ></img>

      Dark-mode</button>
        </header>
    )
}
export default Header;