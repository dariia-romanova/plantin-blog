import logo from '../../img/logo.png'
import { Link, NavLink } from 'react-router-dom'

export const Header: React.FC = () => (
  <header className="header">
    <nav className="header__navigation">
      <img src={logo} alt="logo" className="header__logo" />
      <ul className="header__actions">
        <li>
          <NavLink
            to='./plantin-blog/discover'
            className={({ isActive }) => (
              isActive
                ? 'header__link header__link--active'
                : 'header__link'
              )}
          >
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink
            to='./plantin-blog/my_plants'
            className={({ isActive }) => (
              isActive
                ? 'header__link header__link--active'
                : 'header__link'
              )}
          >
            My Plants
          </NavLink>
        </li>
        <li>
          <NavLink
            to='./plantin-blog/diseases'
            className={({ isActive }) => (
              isActive
                ? 'header__link header__link--active'
                : 'header__link'
              )}
          >
            Diseases
          </NavLink>
        </li>
        <li>
          <NavLink
            to='./plantin-blog/blog'
            className={({ isActive }) => (
              isActive
                ? 'header__link header__link--active'
                : 'header__link'
              )}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to='./plantin-blog/faq'
            className={({ isActive }) => (
              isActive
                ? 'header__link header__link--active'
                : 'header__link'
              )}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to='./plantin-blog/contact_us'
            className={({ isActive }) => (
              isActive
                ? 'header__link header__link--active'
                : 'header__link'
              )}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div className="header__icons">
        <a
          className='header__icon header__icon--search'
          href="#search"
        />
        <div
          className='header__icon header__icon--user'
        />
        <Link
          className='header__icon header__icon--menu'
          to='/'
        />
      </div>
    </nav>
  </header>
);
