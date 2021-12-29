import { NavLink } from 'react-router-dom'
import './header.scss'

// interface Props {
//   page: Pages,
//   setPage: (page: Pages) => void
// }

export const Header: React.FC = () => (
  <header className="header">
    <nav className="header__navigation">
      <ul className="header__actions">
        <li>
          <NavLink
            to='/discover'
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
            to='/my_plants'
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
            to='/diseases'
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
            to='/blog'
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
            to='/faq'
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
            to='/contact_us'
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
    </nav>
  </header>
)