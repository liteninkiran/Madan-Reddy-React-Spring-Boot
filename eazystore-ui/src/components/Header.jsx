import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faTags } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Login' },
];

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <a href='/' className='link'>
          <FontAwesomeIcon icon={faTags} className='fa-icon' />
          <span className='brand-title'>Eazy Stickers</span>
        </a>
        <nav className='nav'>
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className='nav-link'>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href='/cart' className='nav-link' aria-label='Cart'>
                <FontAwesomeIcon icon={faShoppingBasket} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
