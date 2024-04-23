import '../styles/Navbar.css'
import {socialLinks } from '../data/socialLinks'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='nav-logo' alt='backroads' /> */}
          <h2><span className='nav-logo'>42</span>L<span className="nav-logo">R</span></h2>
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
